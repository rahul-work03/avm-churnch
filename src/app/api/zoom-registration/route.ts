import { getPayload } from 'payload'
import config from '@/payload.config'
import { NextRequest, NextResponse } from 'next/server'
import { renderZoomRegistrationEmail, sendEmailNotification } from '@/utilities/email'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const payload = await getPayload({ config })

    const knownKeys = new Set([
      'firstName', 'gender', 'age', 'nationality', 'profession',
      'email', 'phone', 'relativeName', 'relativePhone', 'relativeEmail',
      'healthSituation', 'address', 'problemNature', 'duration',
      'dailyLifeEffect', 'hospitalized', 'medicalDevices', 'zoomAvailability',
      'additionalComments', 'formId'
    ])

    const additionalFields: Record<string, any> = {}
    for (const [key, val] of Object.entries(body)) {
      if (!knownKeys.has(key)) {
        additionalFields[key] = val
      }
    }

    const result = await payload.create({
      collection: 'zoom-registrations' as any,
      data: {
        firstName: body.firstName,
        gender: body.gender,
        age: body.age ? Number(body.age) : undefined,
        nationality: body.nationality,
        profession: body.profession,
        email: body.email,
        phone: body.phone,
        relativeName: body.relativeName,
        relativePhone: body.relativePhone,
        relativeEmail: body.relativeEmail,
        healthSituation: body.healthSituation,
        address: body.address,
        problemNature: body.problemNature,
        duration: body.duration,
        dailyLifeEffect: body.dailyLifeEffect,
        hospitalized: body.hospitalized,
        medicalDevices: body.medicalDevices,
        zoomAvailability: body.zoomAvailability,
        additionalComments: body.additionalComments,
        additionalFields: Object.keys(additionalFields).length > 0 ? additionalFields : undefined,
        status: 'pending',
      },
    })

    // Record submission into Payload CMS form-submissions
    try {
      let formId = body.formId
      if (!formId) {
        const formDoc = await payload.find({
          collection: 'forms',
          where: { title: { equals: 'Zoom Lay Hand Registration Form' } },
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
      console.warn('[Zoom Registration] Could not record form-submission:', subErr)
    }

    // Dispatch email notification asynchronously (non-blocking for user flow)
    try {
      const emailContent = renderZoomRegistrationEmail(body)
      await sendEmailNotification({
        to: process.env.ZOOM_REGISTRATION_EMAIL_TO || process.env.EMAIL_TO,
        ...emailContent,
      })
    } catch (emailErr) {
      console.error('[Zoom Registration] Email notification failed:', emailErr)
    }

    return NextResponse.json({ success: true, doc: result }, { status: 201 })
  } catch (error: any) {
    console.error('Error creating zoom registration:', error)
    return NextResponse.json(
      { success: false, message: error.message || 'Failed to submit registration' },
      { status: 400 }
    )
  }
}
