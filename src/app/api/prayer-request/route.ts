import { getPayload } from 'payload'
import config from '@/payload.config'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const payload = await getPayload({ config })

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
        status: 'pending',
      },
    })

    return NextResponse.json({ success: true, doc: result }, { status: 201 })
  } catch (error: any) {
    console.error('Error submitting prayer request:', error)
    return NextResponse.json(
      { success: false, message: error.message || 'Failed to submit prayer request' },
      { status: 400 }
    )
  }
}
