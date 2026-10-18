import { getPayload } from 'payload'
import config from '../src/payload.config'
import {
  contactUsFormSeed,
  prayerRequestFormSeed,
  zoomLayHandFormSeed,
  storeCheckoutFormSeed,
} from '../src/endpoints/seed/initial-forms'

async function seedForms() {
  console.log('🚀 Initializing Primary Frontend Forms in Payload CMS...')
  const payload = await getPayload({ config })

  // 1. Contact Us Form
  let contactFormDoc: any = null
  const contactQuery = await payload.find({
    collection: 'forms',
    where: { title: { equals: contactUsFormSeed.title } },
    limit: 1,
  })

  if (contactQuery.docs.length > 0) {
    contactFormDoc = contactQuery.docs[0]
    console.log(`✅ Form already exists: "${contactUsFormSeed.title}" (ID: ${contactFormDoc.id})`)
  } else {
    contactFormDoc = await payload.create({
      collection: 'forms',
      data: contactUsFormSeed,
    })
    console.log(`✨ Created form: "${contactUsFormSeed.title}" (ID: ${contactFormDoc.id})`)
  }

  // Link to ContactPage global
  try {
    await payload.updateGlobal({
      slug: 'contact-page' as any,
      data: {
        form: contactFormDoc.id,
      },
    })
    console.log(`🔗 Linked "${contactUsFormSeed.title}" to contact-page global.`)
  } catch (err: any) {
    console.warn(`Could not update contact-page global: ${err.message}`)
  }

  // 2. Prayer Request Form
  let prayerFormDoc: any = null
  const prayerQuery = await payload.find({
    collection: 'forms',
    where: { title: { equals: prayerRequestFormSeed.title } },
    limit: 1,
  })

  if (prayerQuery.docs.length > 0) {
    prayerFormDoc = prayerQuery.docs[0]
    console.log(`✅ Form already exists: "${prayerRequestFormSeed.title}" (ID: ${prayerFormDoc.id})`)
  } else {
    prayerFormDoc = await payload.create({
      collection: 'forms',
      data: prayerRequestFormSeed,
    })
    console.log(`✨ Created form: "${prayerRequestFormSeed.title}" (ID: ${prayerFormDoc.id})`)
  }

  // Link to PrayerRequestPage global
  try {
    await payload.updateGlobal({
      slug: 'prayer-request-page' as any,
      data: {
        form: prayerFormDoc.id,
      },
    })
    console.log(`🔗 Linked "${prayerRequestFormSeed.title}" to prayer-request-page global.`)
  } catch (err: any) {
    console.warn(`Could not update prayer-request-page global: ${err.message}`)
  }

  // 3. Zoom Lay Hand Registration Form
  let zoomFormDoc: any = null
  const zoomQuery = await payload.find({
    collection: 'forms',
    where: { title: { equals: zoomLayHandFormSeed.title } },
    limit: 1,
  })

  if (zoomQuery.docs.length > 0) {
    zoomFormDoc = zoomQuery.docs[0]
    console.log(`✅ Form already exists: "${zoomLayHandFormSeed.title}" (ID: ${zoomFormDoc.id})`)
  } else {
    zoomFormDoc = await payload.create({
      collection: 'forms',
      data: zoomLayHandFormSeed,
    })
    console.log(`✨ Created form: "${zoomLayHandFormSeed.title}" (ID: ${zoomFormDoc.id})`)
  }

  // Link to ZoomLayHandPage global
  try {
    await payload.updateGlobal({
      slug: 'zoom-lay-hand-page' as any,
      data: {
        form: zoomFormDoc.id,
      },
    })
    console.log(`🔗 Linked "${zoomLayHandFormSeed.title}" to zoom-lay-hand-page global.`)
  } catch (err: any) {
    console.warn(`Could not update zoom-lay-hand-page global: ${err.message}`)
  }

  // 4. Store Checkout Form
  let storeFormDoc: any = null
  const storeQuery = await payload.find({
    collection: 'forms',
    where: { title: { equals: storeCheckoutFormSeed.title } },
    limit: 1,
  })

  if (storeQuery.docs.length > 0) {
    storeFormDoc = storeQuery.docs[0]
    console.log(`✅ Form already exists: "${storeCheckoutFormSeed.title}" (ID: ${storeFormDoc.id})`)
  } else {
    storeFormDoc = await payload.create({
      collection: 'forms',
      data: storeCheckoutFormSeed,
    })
    console.log(`✨ Created form: "${storeCheckoutFormSeed.title}" (ID: ${storeFormDoc.id})`)
  }

  // Link to StorePage global
  try {
    await payload.updateGlobal({
      slug: 'store-page' as any,
      data: {
        checkoutForm: storeFormDoc.id,
      },
    })
    console.log(`🔗 Linked "${storeCheckoutFormSeed.title}" to store-page global.`)
  } catch (err: any) {
    console.warn(`Could not update store-page global: ${err.message}`)
  }

  console.log('🎉 Primary Frontend Forms seeding completed successfully!')
  process.exit(0)
}

seedForms().catch((err) => {
  console.error('❌ Error seeding primary forms:', err)
  process.exit(1)
})
