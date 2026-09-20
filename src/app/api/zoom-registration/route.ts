import { getPayload } from 'payload'
import config from '@/payload.config'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const payload = await getPayload({ config })

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
        status: 'pending',
      },
    })

    return NextResponse.json({ success: true, doc: result }, { status: 201 })
  } catch (error: any) {
    console.error('Error creating zoom registration:', error)
    return NextResponse.json(
      { success: false, message: error.message || 'Failed to submit registration' },
      { status: 400 }
    )
  }
}
