import { getPayload } from 'payload'
import config from '@/payload.config'
import { NextRequest, NextResponse } from 'next/server'
import { renderPrayerRequestEmail, sendEmailNotification } from '@/utilities/email'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const payload = await getPayload({ config })

    // Collect standard schema keys
    const knownKeys = new Set([
      'firstName', 'lastName', 'gender', 'age', 'nationality', 'profession',
      'phone', 'email', 'address', 'relativesName', 'relativesPhone', 'relativesEmail',
      'hasSickness', 'sicknessDetails', 'problemNature', 'problemDuration',
      'medications', 'dailyLivingImpact', 'hospitalized', 'useBrace',
      'useWalkingAid', 'useMedicalDevice', 'dailyActivitiesNormal',
      'surgeryTherapyDetails', 'howDidYouHear', 'comments', 'formId'
    ])

    const additionalFields: Record<string, any> = {}
    for (const [key, val] of Object.entries(body)) {
      if (!knownKeys.has(key)) {
        additionalFields[key] = val
      }
    }

    const result = await payload.create({
      collection: 'prayer-requests' as any,
      data: {
        firstName: body.firstName,
        lastName: body.lastName,
        gender: body.gender,
        age: body.age ? Number(body.age) : undefined,
        nationality: body.nationality,
        profession: body.profession,
        phone: body.phone,
        email: body.email,
        address: body.address,
        relativesName: body.relativesName,
        relativesPhone: body.relativesPhone,
        relativesEmail: body.relativesEmail,
        hasSickness: body.hasSickness,
        sicknessDetails: body.sicknessDetails,
        problemNature: body.problemNature,
        problemDuration: body.problemDuration,
        medications: body.medications,
        dailyLivingImpact: body.dailyLivingImpact,
        hospitalized: body.hospitalized,
        useBrace: body.useBrace,
        useWalkingAid: body.useWalkingAid,
        useMedicalDevice: body.useMedicalDevice,
        dailyActivitiesNormal: body.dailyActivitiesNormal,
        surgeryTherapyDetails: body.surgeryTherapyDetails,
        howDidYouHear: body.howDidYouHear,
        comments: body.comments,
        additionalFields: Object.keys(additionalFields).length > 0 ? additionalFields : undefined,
        status: 'pending',
      },
    })

    // Also record submission into Payload CMS form-submissions
    try {
      let formId = body.formId
      if (!formId) {
        const formDoc = await payload.find({
          collection: 'forms',
          where: { title: { equals: 'Prayer Request Form' } },
          limit: 1,
        })
        if (formDoc.docs.length > 0) formId = formDoc.docs[0].id
      }

      if (formId) {
        const submissionData = Object.entries(body)
          .filter(([key]) => key !== 'formId')
          .map(([field, value]) => ({
            field,
            value: typeof value === 'object' ? JSON.stringify(value) : String(value ?? ''),
          }))

        await payload.create({
          collection: 'form-submissions' as any,
          data: {
            form: formId,
            submissionData,
          },
        })
      }
    } catch (subErr) {
      console.warn('[Prayer Request] Could not record form-submission:', subErr)
    }

    // Dispatch email notification asynchronously (non-blocking for user flow)
    try {
      const emailContent = renderPrayerRequestEmail(body)
      await sendEmailNotification({
        to: process.env.PRAYER_REQUEST_EMAIL_TO || process.env.EMAIL_TO,
        ...emailContent,
      })
    } catch (emailErr) {
      console.error('[Prayer Request] Email notification failed:', emailErr)
    }

    return NextResponse.json({ success: true, doc: result }, { status: 201 })
  } catch (error: any) {
    console.error('Error submitting prayer request:', error)
    return NextResponse.json(
      { success: false, message: error.message || 'Failed to submit prayer request' },
      { status: 400 }
    )
  }
}
