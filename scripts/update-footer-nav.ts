import { getPayload } from 'payload'
import configPromise from '../src/payload.config'

async function run() {
  const payload = await getPayload({ config: configPromise })

  console.log('Fetching existing footer global...')
  const current = await payload.findGlobal({
    slug: 'footer',
    depth: 1,
  })

  console.log('Current pagesList:', JSON.stringify((current as any)?.pagesList, null, 2))

  const existingPages = (current as any)?.pagesList || []
  const hasMultimedia = existingPages.some((p: any) => p.href === '/multimedia-college')

  let newPagesList = existingPages
  if (!hasMultimedia) {
    newPagesList = [
      ...existingPages,
      {
        label: 'Multimedia College',
        href: '/multimedia-college',
      },
    ]
  }

  const updated = await payload.updateGlobal({
    slug: 'footer',
    context: {
      disableRevalidate: true,
    },
    data: {
      pagesList: newPagesList,
    },
  })

  console.log('Updated footer successfully!')
  console.log('Updated pagesList:', JSON.stringify((updated as any)?.pagesList, null, 2))
  process.exit(0)
}

run().catch((err) => {
  console.error('Error:', err)
  process.exit(1)
})
