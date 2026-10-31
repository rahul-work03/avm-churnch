import fs from 'fs'
import path from 'path'
import { getPayload } from 'payload'
import config from '../src/payload.config'

async function exportData() {
  console.log('📦 Starting data export from SQLite...')

  // Force SQLite for export
  delete process.env.DB_HOST
  delete process.env.DB_USER
  process.env.DATABASE_URL = 'file:./payload.db'

  const payload = await getPayload({ config })

  const collections = [
    'users',
    'media',
    'categories',
    'pages',
    'posts',
    'sermons',
    'testimonials',
    'products',
    'orders',
    'prayer-requests',
    'zoom-registrations',
    'forms',
  ]

  const globals = [
    'header',
    'footer',
    'homepage',
    'about-page',
    'ministries-page',
    'prayer-mountain-page',
    'prayer-house-page',
    'bible-college-page',
    'sophia-institute-page',
    'multimedia-college-page',
    'sunday-school-page',
    'church-branches-page',
    'events-page',
    'gallery-page',
    'testimonials-page',
    'give-page',
    'contact-page',
    'prayer-request-page',
    'zoom-lay-hand-page',
    'store-page',
    'privacy-policy-page',
    'terms-page',
  ]

  const exportedData: Record<string, any> = {
    collections: {},
    globals: {},
  }

  // Export collections
  for (const collectionSlug of collections) {
    try {
      const result = await payload.find({
        collection: collectionSlug as any,
        limit: 1000,
        depth: 0,
        showHiddenFields: true,
      })
      exportedData.collections[collectionSlug] = result.docs
      console.log(`✅ Exported collection "${collectionSlug}": ${result.docs.length} document(s)`)
    } catch (err: any) {
      console.warn(`⚠️ Skipped collection "${collectionSlug}": ${err.message}`)
    }
  }

  // Export globals
  for (const globalSlug of globals) {
    try {
      const result = await payload.findGlobal({
        slug: globalSlug as any,
        depth: 0,
        showHiddenFields: true,
      })
      exportedData.globals[globalSlug] = result
      console.log(`✅ Exported global "${globalSlug}"`)
    } catch (err: any) {
      console.warn(`⚠️ Skipped global "${globalSlug}": ${err.message}`)
    }
  }

  const exportPath = path.resolve(process.cwd(), 'data-export.json')
  fs.writeFileSync(exportPath, JSON.stringify(exportedData, null, 2), 'utf-8')
  console.log(`🎉 Export complete! Saved to ${exportPath}`)
  process.exit(0)
}

exportData().catch((err) => {
  console.error('Fatal export error:', err)
  process.exit(1)
})
