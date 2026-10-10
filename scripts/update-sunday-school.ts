import { getPayload } from 'payload'
import configPromise from '../src/payload.config'

async function run() {
  const payload = await getPayload({ config: configPromise })
  
  console.log('Fetching existing sunday-school-page global...')
  const current = await payload.findGlobal({
    slug: 'sunday-school-page',
    depth: 0,
  })
  console.log('Current whatIsCardTitle:', (current as any)?.whatIsCardTitle)
  
  const updated = await payload.updateGlobal({
    slug: 'sunday-school-page',
    data: {
      whatIsCardTitle: 'WHAT IS SUNDAY SCHOOL',
    },
  })
  
  console.log('Updated whatIsCardTitle:', (updated as any)?.whatIsCardTitle)
  process.exit(0)
}

run().catch((err) => {
  console.error('Error:', err)
  process.exit(1)
})
