import { getPayload } from 'payload'
import configPromise from '../src/payload.config'

const DEFAULT_SOCIAL_PLATFORMS = [
  {
    name: 'Instagram',
    handle: '@ankurnarulaministries',
    url: 'https://www.instagram.com/ankurnarulaministries?stkn=MWd1d3dlZHJvdjF0aw==',
    badge: '6 Handles',
    handles: [
      {
        title: 'Ankur Narula Ministries',
        handle: '@ankurnarulaministries',
        url: 'https://www.instagram.com/ankurnarulaministries?stkn=MWd1d3dlZHJvdjF0aw==',
        description: 'Official ministry page & daily scriptures',
      },
      {
        title: 'Apostle Dr. Ankur Yoseph Narula',
        handle: '@apostledr.ankuryosephnarula',
        url: 'https://www.instagram.com/apostledr.ankuryosephnarula?stkn=MW9hbDhoaGx4ZGNnZA==',
        description: 'Official personal ministry profile',
      },
      {
        title: 'Pastor Sonia Yoseph Narula',
        handle: '@pastorsoniayosephnarula',
        url: 'https://www.instagram.com/pastorsoniayosephnarula?stkn=MTVneWFnbmdqbDc1Yw==',
        description: 'Official personal ministry profile',
      },
      {
        title: 'The Yoseph Family',
        handle: '@the_yoseph_family',
        url: 'https://www.instagram.com/the_yoseph_family?stkn=MThkNmNjZWh0Nmg2ZQ==',
        description: 'Family faith journey & ministry moments',
      },
      {
        title: 'Anugrah TV Official',
        handle: '@anugrahtv_official',
        url: 'https://www.instagram.com/anugrahtv_official?stkn=ZjFpMGpkNHZ4b2d5',
        description: 'Christian broadcast network & shows',
      },
      {
        title: 'ANM Worship Songs Official',
        handle: '@anm_worshipsongs_official',
        url: 'https://www.instagram.com/anm_worshipsongs_official?stkn=MTZybGo2aWFqNDMxbg==',
        description: 'Anointed worship music & praise songs',
      },
    ],
  },
  {
    name: 'Facebook',
    handle: 'Pastor Sonia Yoseph Narula',
    url: 'https://www.facebook.com/p/Pastor-Sonia-Yoseph-Narula-61571457190633/',
    badge: '4 Pages',
    handles: [
      {
        title: 'Apostle Dr. Ankur Yoseph Narula',
        handle: 'Ankur Narula',
        url: 'https://www.facebook.com/ankur.narula.5/',
        description: 'Official Facebook profile',
      },
      {
        title: 'Pastor Sonia Yoseph Narula',
        handle: 'Pastor Sonia Yoseph Narula',
        url: 'https://www.facebook.com/p/Pastor-Sonia-Yoseph-Narula-61571457190633/',
        description: 'Official Facebook page',
      },
      {
        title: 'The Yoseph Family',
        handle: 'The Yoseph Family',
        url: 'https://www.facebook.com/p/The-Yoseph-Family-61577143774557/',
        description: 'Official Facebook community',
      },
      {
        title: 'Anugrah TV',
        handle: 'Anugrah TV',
        url: 'https://www.facebook.com/p/Anugrah-TV-61577404071596/',
        description: 'Official Television Ministry Page',
      },
    ],
  },
  {
    name: 'YouTube',
    handle: '@ApostleDr.AnkurYosephNarula',
    url: 'https://www.youtube.com/@ApostleDr.AnkurYosephNarula',
    badge: '4 Channels',
    handles: [
      {
        title: 'Apostle Dr. Ankur Yoseph Narula',
        handle: '@ApostleDr.AnkurYosephNarula',
        url: 'https://www.youtube.com/@ApostleDr.AnkurYosephNarula',
        description: 'Main ministry sermons, messages & teachings',
      },
      {
        title: 'Pastor Sonia Yoseph Narula',
        handle: '@pastorsoniayosephnarula',
        url: 'https://www.youtube.com/@pastorsoniayosephnarula',
        description: 'Devotionals, worship & women fellowship',
      },
      {
        title: 'Live Ankur Narula Ministries',
        handle: '@liveankurnarulaministries',
        url: 'https://www.youtube.com/@liveankurnarulaministries',
        description: 'Live church prayer services & broadcasts',
      },
      {
        title: 'The Yoseph Family',
        handle: '@theyosephfamily',
        url: 'https://www.youtube.com/@theyosephfamily',
        description: 'Family life, faith journey & inspirational moments',
      },
    ],
  },
  {
    name: 'X (Twitter)',
    handle: '@apostleankur',
    url: 'https://x.com/apostleankur',
    badge: '',
    handles: [],
  },
]

async function run() {
  const payload = await getPayload({ config: configPromise })
  console.log('Updating homepage socialPlatforms global in DB with new order...')
  
  await payload.updateGlobal({
    slug: 'homepage',
    data: {
      socialPlatforms: DEFAULT_SOCIAL_PLATFORMS,
    },
  })
  
  console.log('Homepage socialPlatforms order updated successfully in DB!')
  process.exit(0)
}

run().catch((err) => {
  console.error('Error:', err)
  process.exit(1)
})
