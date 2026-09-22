import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { sqliteAdapter } from '@payloadcms/db-sqlite'
import sharp from 'sharp'
import path from 'path'
import { buildConfig, PayloadRequest } from 'payload'
import { fileURLToPath } from 'url'

import { Categories } from './collections/Categories'
import { Media } from './collections/Media'
import { Pages } from './collections/Pages'
import { Posts } from './collections/Posts'
import { Sermons } from './collections/Sermons'
import { Testimonials } from './collections/Testimonials'
import { PrayerRequests } from './collections/PrayerRequests'
import { ZoomRegistrations } from './collections/ZoomRegistrations'
import { Products } from './collections/Products'
import { Orders } from './collections/Orders'
import { Users } from './collections/Users'
import { Footer } from './Footer/config'
import { Header } from './Header/config'
import { Homepage } from './globals/Homepage/config'
import { AboutPageGlobal } from './globals/AboutPage/config'
import { MinistriesPageGlobal } from './globals/MinistriesPage/config'
import { PrayerMountainPageGlobal } from './globals/PrayerMountainPage/config'
import { PrayerHousePageGlobal } from './globals/PrayerHousePage/config'
import { BibleCollegePageGlobal } from './globals/BibleCollegePage/config'
import { SophiaInstitutePageGlobal } from './globals/SophiaInstitutePage/config'
import { SundaySchoolPageGlobal } from './globals/SundaySchoolPage/config'
import { ChurchBranchesPageGlobal } from './globals/ChurchBranchesPage/config'
import { EventsPageGlobal } from './globals/EventsPage/config'
import { GalleryPageGlobal } from './globals/GalleryPage/config'
import { TestimonialsPageGlobal } from './globals/TestimonialsPage/config'
import { GivePageGlobal } from './globals/GivePage/config'
import { ContactPageGlobal } from './globals/ContactPage/config'
import { PrayerRequestPageGlobal } from './globals/PrayerRequestPage/config'
import { ZoomLayHandPageGlobal } from './globals/ZoomLayHandPage/config'
import { StorePageGlobal } from './globals/StorePage/config'
import { PrivacyPolicyPageGlobal } from './globals/PrivacyPolicyPage/config'
import { TermsPageGlobal } from './globals/TermsPage/config'
import { plugins } from './plugins'
import { defaultLexical } from '@/fields/defaultLexical'
import { getServerSideURL } from './utilities/getURL'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    components: {
      // The `BeforeLogin` component renders a message that you see while logging into your admin panel.
      // Feel free to delete this at any time. Simply remove the line below.
      beforeLogin: ['@/components/BeforeLogin'],
      // The `BeforeDashboard` component renders the 'welcome' block that you see after logging into your admin panel.
      // Feel free to delete this at any time. Simply remove the line below.
      beforeDashboard: ['@/components/BeforeDashboard'],
    },
    importMap: {
      baseDir: path.resolve(dirname),
    },
    user: Users.slug,
    livePreview: {
      breakpoints: [
        {
          label: 'Mobile',
          name: 'mobile',
          width: 375,
          height: 667,
        },
        {
          label: 'Tablet',
          name: 'tablet',
          width: 768,
          height: 1024,
        },
        {
          label: 'Desktop',
          name: 'desktop',
          width: 1440,
          height: 900,
        },
      ],
    },
  },
  // This config helps us configure global or default features that the other editors can inherit
  editor: defaultLexical,
  db: process.env.DATABASE_URL?.startsWith('mongodb')
    ? mongooseAdapter({
        url: process.env.DATABASE_URL,
      })
    : sqliteAdapter({
        client: {
          url: process.env.DATABASE_URL || 'file:./payload.db',
        },
        push: true,
      }),
  collections: [
    Pages,
    Posts,
    Sermons,
    Testimonials,
    PrayerRequests,
    ZoomRegistrations,
    Products,
    Orders,
    Media,
    Categories,
    Users,
  ],
  cors: [getServerSideURL()].filter(Boolean),
  globals: [
    Header,
    Footer,
    Homepage,
    AboutPageGlobal,
    MinistriesPageGlobal,
    PrayerMountainPageGlobal,
    PrayerHousePageGlobal,
    BibleCollegePageGlobal,
    SophiaInstitutePageGlobal,
    SundaySchoolPageGlobal,
    ChurchBranchesPageGlobal,
    EventsPageGlobal,
    GalleryPageGlobal,
    TestimonialsPageGlobal,
    GivePageGlobal,
    ContactPageGlobal,
    PrayerRequestPageGlobal,
    ZoomLayHandPageGlobal,
    StorePageGlobal,
    PrivacyPolicyPageGlobal,
    TermsPageGlobal,
  ],

  plugins,
  secret: process.env.PAYLOAD_SECRET || '128c97a5a78fc3fcf4f8be003a7f0dc562cfb2118e1d3ec38d4a288609aa90c7',
  sharp,
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  jobs: {
    access: {
      run: ({ req }: { req: PayloadRequest }): boolean => {
        // Allow logged in users to execute this endpoint (default)
        if (req.user) return true

        const secret = process.env.CRON_SECRET
        if (!secret) return false

        // If there is no logged in user, then check
        // for the Vercel Cron secret to be present as an
        // Authorization header:
        const authHeader = req.headers.get('authorization')
        return authHeader === `Bearer ${secret}`
      },
    },
    tasks: [],
  },
})
