import { AsyncLocalStorage } from 'node:async_hooks'
;(globalThis as any).AsyncLocalStorage = AsyncLocalStorage

import assert from 'node:assert'
import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'

// 1. Sunday School imports
import { SundaySchoolPageGlobal } from '../src/globals/SundaySchoolPage/config'
import { SundaySchoolScenesSection } from '../src/components/SundaySchoolPage/SundaySchoolScenesSection'

// 2. Gallery imports
import { GalleryPageGlobal } from '../src/globals/GalleryPage/config'
import { GalleryPage } from '../src/components/GalleryPage'

// 3. Testimonials hooks and config
import { Testimonials } from '../src/collections/Testimonials'
import {
  revalidateTestimonial,
  revalidateTestimonialDelete,
} from '../src/collections/Testimonials/hooks/revalidateTestimonial'

// 4. Global revalidation hook factory
import { createGlobalRevalidateHook } from '../src/utilities/revalidateGlobal'

// Dynamically import Next.js internals for real cache tracking
const { workAsyncStorageInstance } = await import(
  'next/dist/server/app-render/work-async-storage-instance.js'
)

// Helper to run a function inside Next.js workAsyncStorage context
function runInNextCacheContext<T>(
  fn: (store: any) => Promise<T> | T
): Promise<{ result: T; revalidatedTags: string[]; pathWasRevalidated: boolean }> {
  const store: any = { incrementalCache: {} }
  return new Promise((resolve, reject) => {
    workAsyncStorageInstance.run(store, async () => {
      try {
        const result = await fn(store)
        resolve({
          result,
          revalidatedTags: store.pendingRevalidatedTags || [],
          pathWasRevalidated: !!store.pathWasRevalidated,
        })
      } catch (err) {
        reject(err)
      }
    })
  })
}

// Mock Payload logger & request context
function createMockReq(context: Record<string, any> = {}) {
  const logMessages: string[] = []
  return {
    req: {
      payload: {
        logger: {
          info: (msg: string) => logMessages.push(msg),
          error: (msg: string) => console.error(msg),
          warn: (msg: string) => console.warn(msg),
        },
      } as any,
      context,
    } as any,
    logMessages,
  }
}

async function runEmpiricalStressTests() {
  console.log('====================================================')
  console.log('STARTING EMPIRICAL ADVERSARIAL STRESS TEST HARNESS')
  console.log('====================================================\n')

  let passCount = 0
  let failCount = 0

  async function test(name: string, fn: () => void | Promise<void>) {
    try {
      await fn()
      console.log(`  ✅ PASS: ${name}`)
      passCount++
    } catch (err: any) {
      console.error(`  ❌ FAIL: ${name}`)
      console.error(`     Reason:`, err.message || err)
      failCount++
    }
  }

  // =========================================================================
  // SUITE 1: Sunday School Scenes Array Boundaries & buildSeamlessMarquee
  // =========================================================================
  console.log('--- SUITE 1: Sunday School Scenes Array Boundaries ---')

  await test('1.1 SundaySchool beforeRead hook: 0 photos (empty array) falls back to 10 default photos', () => {
    const beforeReadHook = SundaySchoolPageGlobal.hooks?.beforeRead?.[0]
    assert(beforeReadHook, 'beforeRead hook must be defined on SundaySchoolPageGlobal')

    const inputDoc: any = { scenesRow1: [], scenesRow2: [] }
    const resultDoc = (beforeReadHook as any)({ doc: inputDoc })

    assert(Array.isArray(resultDoc.scenesRow1), 'scenesRow1 must be an array')
    assert.strictEqual(resultDoc.scenesRow1.length, 10, 'scenesRow1 should fallback to 10 default photos')
    assert(Array.isArray(resultDoc.scenesRow2), 'scenesRow2 must be an array')
    assert.strictEqual(resultDoc.scenesRow2.length, 10, 'scenesRow2 should fallback to 10 default photos')
  })

  await test('1.2 SundaySchool beforeRead hook: null/undefined scenes fall back to 10 defaults', () => {
    const beforeReadHook = SundaySchoolPageGlobal.hooks?.beforeRead?.[0] as any
    const resultNull = beforeReadHook({ doc: { scenesRow1: null, scenesRow2: null } })
    assert.strictEqual(resultNull.scenesRow1.length, 10)
    assert.strictEqual(resultNull.scenesRow2.length, 10)

    const resultUndefined = beforeReadHook({ doc: {} })
    assert.strictEqual(resultUndefined.scenesRow1.length, 10)
    assert.strictEqual(resultUndefined.scenesRow2.length, 10)
  })

  await test('1.3 SundaySchool beforeRead hook: 1 photo is PRESERVED (not overwritten by defaults)', () => {
    const beforeReadHook = SundaySchoolPageGlobal.hooks?.beforeRead?.[0] as any
    const singlePhoto = [{ imageFallback: '/custom1.png', alt: 'One Photo' }]
    const result = beforeReadHook({ doc: { scenesRow1: singlePhoto, scenesRow2: singlePhoto } })

    assert.strictEqual(result.scenesRow1.length, 1, 'Should preserve 1 photo')
    assert.strictEqual(result.scenesRow1[0].imageFallback, '/custom1.png')
    assert.strictEqual(result.scenesRow2.length, 1, 'Should preserve 1 photo')
  })

  await test('1.4 SundaySchool beforeRead hook: 3 photos are PRESERVED', () => {
    const beforeReadHook = SundaySchoolPageGlobal.hooks?.beforeRead?.[0] as any
    const threePhotos = [
      { imageFallback: '/p1.png', alt: 'P1' },
      { imageFallback: '/p2.png', alt: 'P2' },
      { imageFallback: '/p3.png', alt: 'P3' },
    ]
    const result = beforeReadHook({ doc: { scenesRow1: threePhotos, scenesRow2: threePhotos } })
    assert.strictEqual(result.scenesRow1.length, 3, 'Should preserve 3 photos')
  })

  await test('1.5 SundaySchool beforeRead hook: 9 photos are PRESERVED (verifying threshold >= 10 bug was removed)', () => {
    const beforeReadHook = SundaySchoolPageGlobal.hooks?.beforeRead?.[0] as any
    const ninePhotos = Array.from({ length: 9 }, (_, i) => ({
      imageFallback: `/p${i + 1}.png`,
      alt: `Photo ${i + 1}`,
    }))
    const result = beforeReadHook({ doc: { scenesRow1: ninePhotos, scenesRow2: ninePhotos } })
    assert.strictEqual(result.scenesRow1.length, 9, 'Should preserve all 9 photos without defaulting')
  })

  await test('1.6 SundaySchoolScenesSection component: Renders gracefully with 0 photos (empty array fallback)', () => {
    const html = renderToStaticMarkup(
      React.createElement(SundaySchoolScenesSection, {
        scenesRow1: [],
        scenesRow2: [],
      })
    )
    assert(html.includes('SCENES'), 'Should render section header')
    assert(html.includes('/scenes_of_sunday_school/image_1.png'), 'Should render default row1 photo')
    assert(html.includes('/scenes_of_sunday_school/image_11.png'), 'Should render default row2 photo')
  })

  await test('1.7 SundaySchoolScenesSection component: 1 photo repeats seamlessly in marquee without throwing', () => {
    const singlePhoto = [{ id: 'p1', imageFallback: '/custom-single.png', alt: 'Single Test Photo' }]
    const html = renderToStaticMarkup(
      React.createElement(SundaySchoolScenesSection, {
        scenesRow1: singlePhoto,
        scenesRow2: singlePhoto,
      })
    )
    assert(html.includes('/custom-single.png'), 'Must render custom image')
    assert(html.includes('Single Test Photo'), 'Must render custom alt')
    // 1 photo repeated until >=10 gives 10 per half = 20 total per row * 2 rows = 40 img elements
    const totalImgTags = (html.match(/<img /g) || []).length
    assert.strictEqual(totalImgTags, 40, `Expected 20 per row * 2 rows = 40 img tags, got ${totalImgTags}`)
  })

  await test('1.8 SundaySchoolScenesSection component: 3 photos repeat seamlessly in marquee without throwing', () => {
    const threePhotos = [
      { id: 'p1', imageFallback: '/c1.png', alt: 'P1' },
      { id: 'p2', imageFallback: '/c2.png', alt: 'P2' },
      { id: 'p3', imageFallback: '/c3.png', alt: 'P3' },
    ]
    const html = renderToStaticMarkup(
      React.createElement(SundaySchoolScenesSection, {
        scenesRow1: threePhotos,
        scenesRow2: threePhotos,
      })
    )
    assert(html.includes('/c1.png') && html.includes('/c2.png') && html.includes('/c3.png'))
    // 3 items -> 4 reps = 12 items * 2 = 24 items per row * 2 rows = 48 img tags
    const totalImgTags = (html.match(/<img /g) || []).length
    assert.strictEqual(totalImgTags, 48, `3 photos pattern: expected 24*2 = 48 img tags, got ${totalImgTags}`)
  })

  await test('1.9 SundaySchoolScenesSection component: 9 photos repeat seamlessly in marquee without throwing', () => {
    const ninePhotos = Array.from({ length: 9 }, (_, i) => ({
      id: `custom-p-${i + 1}`,
      imageFallback: `/custom_nine_${i + 1}.png`,
      alt: `Nine Photo ${i + 1}`,
    }))
    const html = renderToStaticMarkup(
      React.createElement(SundaySchoolScenesSection, {
        scenesRow1: ninePhotos,
        scenesRow2: ninePhotos,
      })
    )
    assert(html.includes('/custom_nine_1.png'))
    assert(html.includes('/custom_nine_9.png'))
    // 9 items -> 2 reps = 18 items * 2 = 36 items per row * 2 rows = 72 img tags
    const totalImgTags = (html.match(/<img /g) || []).length
    assert.strictEqual(totalImgTags, 72, `9 photos pattern: expected 36*2 = 72 img tags, got ${totalImgTags}`)
  })

  // =========================================================================
  // SUITE 2: Gallery Page Header Title and Subtitle
  // =========================================================================
  console.log('\n--- SUITE 2: Gallery Page Header Title & Subtitle ---')

  await test('2.1 GalleryPageGlobal beforeRead hook: Custom headerTitle and headerSubtitle are preserved', () => {
    const beforeReadHook = GalleryPageGlobal.hooks?.beforeRead?.[0] as any
    const customDoc = {
      headerTitle: 'Apostolic Power & Divine Revivals',
      headerSubtitle: 'Witness the boundless works of the Lord.',
    }
    const result = beforeReadHook({ doc: customDoc })
    assert.strictEqual(result.headerTitle, 'Apostolic Power & Divine Revivals')
    assert.strictEqual(result.headerSubtitle, 'Witness the boundless works of the Lord.')
  })

  await test('2.2 GalleryPageGlobal beforeRead hook: null/empty/undefined fall back to default text', () => {
    const beforeReadHook = GalleryPageGlobal.hooks?.beforeRead?.[0] as any

    const nullResult = beforeReadHook({ doc: { headerTitle: null, headerSubtitle: null } })
    assert.strictEqual(nullResult.headerTitle, 'Moments of Glory & Faith')
    assert(nullResult.headerSubtitle.includes('Experience the vibrant atmosphere of worship'))

    const emptyResult = beforeReadHook({ doc: { headerTitle: '', headerSubtitle: '' } })
    assert.strictEqual(emptyResult.headerTitle, 'Moments of Glory & Faith')
    assert(emptyResult.headerSubtitle.includes('Experience the vibrant atmosphere of worship'))

    const undefResult = beforeReadHook({ doc: {} })
    assert.strictEqual(undefResult.headerTitle, 'Moments of Glory & Faith')
    assert(undefResult.headerSubtitle.includes('Experience the vibrant atmosphere of worship'))
  })

  await test('2.3 GalleryPage Component: Custom headerTitle and headerSubtitle render in EditorialSectionHeader', () => {
    const customData = {
      headerTitle: 'Heavenly Encounters & Healing Signs',
      headerSubtitle: 'A collection of miraculous milestones in the church of Jesus Christ.',
    }
    const html = renderToStaticMarkup(React.createElement(GalleryPage, { data: customData }))

    // EditorialSectionHeader uses TextWordReveal which splits title words into separate spans
    assert(html.includes('Heavenly') && html.includes('Encounters') && html.includes('Healing') && html.includes('Signs'),
      'HTML must contain custom header title words')
    assert(html.includes('A collection of miraculous milestones in the church of Jesus Christ.'),
      'HTML must contain custom header subtitle')
  })

  await test('2.4 GalleryPage Component: Null, empty, or missing data falls back to default title & subtitle', () => {
    const htmlNull = renderToStaticMarkup(React.createElement(GalleryPage, { data: null }))
    assert(htmlNull.includes('Moments') && htmlNull.includes('Glory') && htmlNull.includes('Faith'),
      'Must contain default title words')
    assert(htmlNull.includes('Experience the vibrant atmosphere of worship'),
      'Must contain default subtitle')

    const htmlEmpty = renderToStaticMarkup(React.createElement(GalleryPage, { data: { headerTitle: '', headerSubtitle: '' } }))
    assert(htmlEmpty.includes('Moments') && htmlEmpty.includes('Glory') && htmlEmpty.includes('Faith'),
      'Must contain default title words when empty')
    assert(htmlEmpty.includes('Experience the vibrant atmosphere of worship'),
      'Must contain default subtitle when empty')
  })

  // =========================================================================
  // SUITE 3: Testimonials Collection Revalidation Hooks (Under Real Next.js Cache Engine)
  // =========================================================================
  console.log('\n--- SUITE 3: Testimonials Collection Hooks ---')

  await test('3.1 Hook registration: afterChange and afterDelete registered in Testimonials collection', () => {
    assert(Testimonials.hooks?.afterChange, 'Testimonials must define afterChange hooks')
    assert(Testimonials.hooks?.afterDelete, 'Testimonials must define afterDelete hooks')
    assert.strictEqual(Testimonials.hooks.afterChange[0], revalidateTestimonial)
    assert.strictEqual(Testimonials.hooks.afterDelete[0], revalidateTestimonialDelete)
  })

  await test('3.2 revalidateTestimonial (afterChange): Revalidates /testimonials, /testimonials/[slug], and tag "testimonials"', async () => {
    const { req } = createMockReq()
    const doc = { slug: 'sister-randeep-healing', person: 'Sister Randeep Kaur' }

    const { result, revalidatedTags } = await runInNextCacheContext(async () => {
      return (revalidateTestimonial as any)({
        doc,
        previousDoc: {},
        collection: Testimonials as any,
        operation: 'update',
        req,
        context: {},
      })
    })

    assert.strictEqual(result, doc, 'Hook must return doc')
    // Next.js stores revalidatePath('/testimonials') as implicit tag '_N_T_/testimonials'
    assert(revalidatedTags.includes('_N_T_/testimonials'), `Must revalidate /testimonials. Tags: ${JSON.stringify(revalidatedTags)}`)
    assert(revalidatedTags.includes('_N_T_/testimonials/sister-randeep-healing'), `Must revalidate /testimonials/[slug]. Tags: ${JSON.stringify(revalidatedTags)}`)
    assert(revalidatedTags.includes('testimonials'), `Must revalidate cache tag "testimonials". Tags: ${JSON.stringify(revalidatedTags)}`)
  })

  await test('3.3 revalidateTestimonial: Handles doc without slug gracefully (no invalid path revalidation)', async () => {
    const { req } = createMockReq()
    const doc = { slug: null, person: 'Anonymous' }

    const { revalidatedTags } = await runInNextCacheContext(async () => {
      return (revalidateTestimonial as any)({
        doc,
        previousDoc: {},
        collection: Testimonials as any,
        operation: 'create',
        req,
        context: {},
      })
    })

    assert(revalidatedTags.includes('_N_T_/testimonials'), 'Must revalidate /testimonials')
    assert(!revalidatedTags.some((p) => p.includes('null') || p.includes('undefined')),
      'Must not revalidate invalid slug path')
    assert(revalidatedTags.includes('testimonials'), 'Must revalidate tag "testimonials"')
  })

  await test('3.4 revalidateTestimonial: Respects disableRevalidate flag in context', async () => {
    const { req } = createMockReq({ disableRevalidate: true })
    const doc = { slug: 'sister-randeep-healing' }

    const { revalidatedTags } = await runInNextCacheContext(async () => {
      return (revalidateTestimonial as any)({
        doc,
        previousDoc: {},
        collection: Testimonials as any,
        operation: 'update',
        req,
        context: { disableRevalidate: true },
      })
    })

    assert.strictEqual(revalidatedTags.length, 0, 'No revalidations when disableRevalidate is true')
  })

  await test('3.5 revalidateTestimonialDelete (afterDelete): Revalidates /testimonials, /testimonials/[slug], and tag "testimonials"', async () => {
    const { req } = createMockReq()
    const doc = { slug: 'brother-john-deliverance', person: 'Brother John' }

    const { result, revalidatedTags } = await runInNextCacheContext(async () => {
      return (revalidateTestimonialDelete as any)({
        doc,
        collection: Testimonials as any,
        req,
        context: {},
      })
    })

    assert.strictEqual(result, doc, 'Hook must return doc')
    assert(revalidatedTags.includes('_N_T_/testimonials'), 'Must revalidate /testimonials')
    assert(revalidatedTags.includes('_N_T_/testimonials/brother-john-deliverance'), 'Must revalidate /testimonials/[slug]')
    assert(revalidatedTags.includes('testimonials'), 'Must revalidate tag "testimonials"')
  })

  await test('3.6 revalidateTestimonialDelete: Respects disableRevalidate flag in context', async () => {
    const { req } = createMockReq({ disableRevalidate: true })
    const doc = { slug: 'brother-john-deliverance' }

    const { revalidatedTags } = await runInNextCacheContext(async () => {
      return (revalidateTestimonialDelete as any)({
        doc,
        collection: Testimonials as any,
        req,
        context: { disableRevalidate: true },
      })
    })

    assert.strictEqual(revalidatedTags.length, 0, 'No revalidations on delete when disableRevalidate is true')
  })

  // =========================================================================
  // SUITE 4: Universal Global Revalidation Factory (Under Real Next.js Cache Engine)
  // =========================================================================
  console.log('\n--- SUITE 4: Universal Global Revalidation Hook Factory ---')

  await test('4.1 createGlobalRevalidateHook with single path', async () => {
    const hook = createGlobalRevalidateHook('/sunday-school', 'sunday-school-page')
    const { req } = createMockReq()
    const doc = { title: 'Sunday School' }

    const { result, revalidatedTags } = await runInNextCacheContext(async () => {
      return hook({ doc, req, context: {} } as any)
    })

    assert.strictEqual(result, doc)
    assert(revalidatedTags.includes('_N_T_/sunday-school'), 'Must revalidate /sunday-school')
    assert(revalidatedTags.includes('global_sunday-school-page'), 'Must revalidate tag global_sunday-school-page')
  })

  await test('4.2 createGlobalRevalidateHook with multiple duplicate paths (e.g. branches, terms)', async () => {
    const hook = createGlobalRevalidateHook(['/church-branches', '/branches'], 'church-branches-page')
    const { req } = createMockReq()
    const doc = { title: 'Church Branches' }

    const { revalidatedTags } = await runInNextCacheContext(async () => {
      return hook({ doc, req, context: {} } as any)
    })

    assert(revalidatedTags.includes('_N_T_/church-branches'), 'Must revalidate /church-branches')
    assert(revalidatedTags.includes('_N_T_/branches'), 'Must revalidate /branches')
    assert(revalidatedTags.includes('global_church-branches-page'), 'Must revalidate tag')
  })

  await test('4.3 createGlobalRevalidateHook respects disableRevalidate flag', async () => {
    const hook = createGlobalRevalidateHook('/about', 'about-page')
    const { req } = createMockReq({ disableRevalidate: true })
    const doc = { title: 'About' }

    const { revalidatedTags } = await runInNextCacheContext(async () => {
      return hook({ doc, req, context: { disableRevalidate: true } } as any)
    })

    assert.strictEqual(revalidatedTags.length, 0, 'Should not revalidate when disableRevalidate is true')
  })

  // =========================================================================
  // SUMMARY
  // =========================================================================
  console.log('\n====================================================')
  console.log(`TEST SUMMARY: Total: ${passCount + failCount} | Passed: ${passCount} | Failed: ${failCount}`)
  console.log('====================================================\n')

  if (failCount > 0) {
    process.exit(1)
  }
}

runEmpiricalStressTests().catch((err) => {
  console.error('Fatal test harness failure:', err)
  process.exit(1)
})
