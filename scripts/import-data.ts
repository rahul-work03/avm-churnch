import fs from 'fs'
import path from 'path'
import { getPayload } from 'payload'
import config from '../src/payload.config'

async function importData() {
  const exportPath = path.resolve(process.cwd(), 'data-export.json')
  if (!fs.existsSync(exportPath)) {
    console.error(`❌ Export file not found at: ${exportPath}`)
    console.error('Please run "npx tsx scripts/export-data.ts" first.')
    process.exit(1)
  }

  const rawData = fs.readFileSync(exportPath, 'utf-8')
  const backup = JSON.parse(rawData)

  console.log('🚀 Connecting to Database and initializing schema...')
  const payload = await getPayload({ config })
  console.log('✅ Database connected!')

  // Import collections in dependency order
  const collectionOrder = [
    'users',
    'media',
    'categories',
    'forms',
    'pages',
    'posts',
    'sermons',
    'testimonials',
    'products',
    'orders',
    'prayer-requests',
    'zoom-registrations',
  ]

  for (const slug of collectionOrder) {
    const docs = backup.collections?.[slug]
    if (!docs || docs.length === 0) continue

    console.log(`\n📥 Importing ${docs.length} document(s) into "${slug}"...`)

    for (const doc of docs) {
      try {
        const { id, createdAt, updatedAt, ...cleanData } = doc

        // If media ID is null or points to missing media, ensure it doesn't fail foreign keys
        if ('image' in cleanData && typeof cleanData.image !== 'object' && !cleanData.image) {
          cleanData.image = null
        }

        // Check if doc already exists by unique key
        let existingDoc: any = null
        if (slug === 'users' && doc.email) {
          const res = await payload.find({
            collection: 'users',
            where: { email: { equals: doc.email } },
            limit: 1,
            showHiddenFields: true,
          })
          if (res.docs.length > 0) existingDoc = res.docs[0]
        } else if (doc.slug) {
          const res = await payload.find({
            collection: slug as any,
            where: { slug: { equals: doc.slug } },
            limit: 1,
          })
          if (res.docs.length > 0) existingDoc = res.docs[0]
        } else if (doc.title) {
          const res = await payload.find({
            collection: slug as any,
            where: { title: { equals: doc.title } },
            limit: 1,
          })
          if (res.docs.length > 0) existingDoc = res.docs[0]
        }

        if (existingDoc) {
          console.log(`  ⏩ [${slug}] "${doc.title || doc.slug || doc.email || id}" exists. Updating...`)
          await payload.update({
            collection: slug as any,
            id: existingDoc.id,
            data: cleanData,
            context: { disableRevalidate: true },
          })
        } else {
          // If inserting users, ensure password is set
          if (slug === 'users' && !cleanData.password) {
            cleanData.password = process.env.DEFAULT_ADMIN_PASSWORD || 'ChangeMe123!'
          }

          await payload.create({
            collection: slug as any,
            data: cleanData,
            context: { disableRevalidate: true },
          })
          console.log(`  ✨ [${slug}] Created "${doc.title || doc.slug || doc.email || id}"`)
        }
      } catch (err: any) {
        console.error(`  ❌ Failed to import doc in "${slug}" (${doc.title || doc.slug || doc.id}): ${err.message}`)
      }
    }
  }

  // Import globals (Homepage, Header, Footer, ChurchBranches, etc.)
  if (backup.globals) {
    console.log('\n🌐 Importing Globals...')
    for (const [globalSlug, globalData] of Object.entries(backup.globals)) {
      if (!globalData || Object.keys(globalData as object).length === 0) continue
      try {
        const { id, createdAt, updatedAt, ...cleanData } = globalData as any
        await payload.updateGlobal({
          slug: globalSlug as any,
          data: cleanData,
          context: { disableRevalidate: true },
        })
        console.log(`  ✅ Global "${globalSlug}" imported.`)
      } catch (err: any) {
        console.error(`  ❌ Failed to update global "${globalSlug}": ${err.message}`)
      }
    }
  }

  console.log('\n🎉 Data sync completed!')
  process.exit(0)
}

importData().catch((err) => {
  console.error('Fatal import error:', err)
  process.exit(1)
})
