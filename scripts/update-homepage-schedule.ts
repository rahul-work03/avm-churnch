import { getPayload } from 'payload'
import configPromise from '../src/payload.config'

const UPDATED_WEEKLY_SERVICES = [
  { emoji: '🕊️', title: 'Sunday Morning Service', time: '10:30 AM – 2:30 PM (IST)' },
  { emoji: '🌙', title: 'Sunday Evening Service', time: '7:00 PM – 11:00 PM (IST)' },
  { emoji: '🔥', title: 'Thursday Service', time: '6:00 PM – 10:00 PM (IST)' },
]

const UPDATED_DAILY_PROGRAMS = [
  { emoji: '🙏', title: 'Prayer Mountain', time: '8:00 PM (Daily)' },
]

async function run() {
  const payload = await getPayload({ config: configPromise })
  console.log('Fetching homepage global...')

  const current = await payload.findGlobal({
    slug: 'homepage',
    depth: 1,
  })

  console.log('Current weeklyServices:', JSON.stringify((current as any)?.weeklyServices, null, 2))
  console.log('Current dailyPrograms:', JSON.stringify((current as any)?.dailyPrograms, null, 2))

  const updated = await payload.updateGlobal({
    slug: 'homepage',
    context: {
      disableRevalidate: true,
    },
    data: {
      weeklyServices: UPDATED_WEEKLY_SERVICES,
      dailyPrograms: UPDATED_DAILY_PROGRAMS,
    },
  })

  console.log('Updated homepage schedule in DB successfully!')
  console.log('New weeklyServices:', JSON.stringify((updated as any)?.weeklyServices, null, 2))
  console.log('New dailyPrograms:', JSON.stringify((updated as any)?.dailyPrograms, null, 2))
  process.exit(0)
}

run().catch((err) => {
  console.error('Error:', err)
  process.exit(1)
})
