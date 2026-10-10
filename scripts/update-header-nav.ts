import { getPayload } from 'payload'
import configPromise from '../src/payload.config'

async function run() {
  const payload = await getPayload({ config: configPromise })

  console.log('Fetching existing header global...')
  const current = await payload.findGlobal({
    slug: 'header',
    depth: 1,
  })

  console.log('Current navItems:', JSON.stringify((current as any)?.navItems, null, 2))

  const newNavItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    {
      label: 'Ministries & More',
      href: '/ministries',
      children: [
        { label: 'Ministries', href: '/ministries' },
        { label: 'Prayer Mountain', href: '/prayer-mountain' },
        { label: 'Prayer House', href: '/prayer-house' },
        { label: 'Bible College', href: '/bible-college' },
        { label: 'Sophia Institute', href: '/sophia-institute' },
        { label: 'Multimedia College', href: '/multimedia-college' },
        { label: 'Church Branches', href: '/church-branches' },
        { label: 'Sunday School', href: '/sunday-school' },
      ],
    },
    { label: 'Events', href: '/events' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Testimonials', href: '/testimonials' },
    { label: 'Give', href: '/give' },
  ]

  const updated = await payload.updateGlobal({
    slug: 'header',
    context: {
      disableRevalidate: true,
    },
    data: {
      navItems: newNavItems,
    },
  })

  console.log('Updated header successfully!')
  console.log('Updated navItems:', JSON.stringify((updated as any)?.navItems, null, 2))
  process.exit(0)
}

run().catch((err) => {
  console.error('Error:', err)
  process.exit(1)
})
