import { NextRequest, NextResponse } from 'next/server'
import { renderContactUsEmail, sendEmailNotification } from '@/utilities/email'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    // Validate minimum required fields
    if (!body.firstName || !body.email) {
      return NextResponse.json(
        { success: false, message: 'Please provide your name and email address.' },
        { status: 400 }
      )
    }

    // Dispatch email notification
    const emailContent = renderContactUsEmail(body)
    const emailResult = await sendEmailNotification({
      to: process.env.CONTACT_US_EMAIL_TO || process.env.EMAIL_TO,
      ...emailContent,
    })

    if (!emailResult.success && emailResult.mode === 'smtp') {
      console.warn('[Contact API] Failed to send email via SMTP, but request was accepted:', emailResult.error)
    }

    // Record submission into Payload CMS form-submissions
    try {
      const { getPayload } = await import('payload')
      const { default: config } = await import('@/payload.config')
      const payload = await getPayload({ config })

      let formId = body.formId
      if (!formId) {
        const formDoc = await payload.find({
          collection: 'forms',
          where: { title: { equals: 'Contact Us Form' } },
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
      console.warn('[Contact API] Could not record form-submission:', subErr)
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Your message has been sent successfully.',
        mode: emailResult.mode,
      },
      { status: 200 }
    )
  } catch (error: any) {
    console.error('Error handling contact submission:', error)
    return NextResponse.json(
      { success: false, message: error.message || 'Failed to submit contact message' },
      { status: 500 }
    )
  }
}
