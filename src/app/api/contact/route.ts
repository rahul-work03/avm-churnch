import { NextRequest, NextResponse } from 'next/server'
import { renderContactUsEmail, sendEmailNotification } from '@/utilities/email'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    // Validate minimum required fields
    if (!body.firstName || !body.email || !body.message) {
      return NextResponse.json(
        { success: false, message: 'Please provide your name, email, and message.' },
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
