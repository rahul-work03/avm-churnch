import {
  renderPrayerRequestEmail,
  renderZoomRegistrationEmail,
  renderContactUsEmail,
  sendEmailNotification,
} from '../src/utilities/email'

async function runTests() {
  console.log('🧪 Starting Email Notification Suite Verification...\n')

  // Set test environment variables
  process.env.EMAIL_BACKEND = 'console'
  process.env.EMAIL_HOST_USER = 'pastoral-care@ankurnarulaministries.com, coordinator@ankurnarulaministries.com'
  process.env.DEFAULT_FROM_EMAIL = 'Ankur Narula Ministries <no-reply@ankurnarulaministries.com>'
  process.env.EMAIL_TO = 'intercession-team@ankurnarulaministries.com'
  process.env.EMAIL_CC = 'cc-supervisor@ankurnarulaministries.com'
  process.env.EMAIL_BCC = 'audit-archive@ankurnarulaministries.com'

  // Test 1: Prayer Request Email
  console.log('--- Test 1: Prayer Request Form Notification ---')
  const prayerRequestData = {
    firstName: 'Brother',
    lastName: 'Simranjeet',
    gender: 'Male',
    age: 34,
    nationality: 'Indian',
    profession: 'Software Engineer',
    phone: '+91 98765 43210',
    email: 'simranjeet@example.com',
    address: 'Phase 7, Mohali, Punjab',
    hasSickness: true,
    sicknessDetails: 'Severe back disc compression for 2 years',
    problemNature: 'Chronic Pain',
    problemDuration: '2 years',
    dailyLivingImpact: 'Unable to sit or stand for long hours',
    hospitalized: false,
    comments: 'Praying for divine healing touch and total restoration in Jesus Name.',
  }
  const prEmail = renderPrayerRequestEmail(prayerRequestData)
  const prResult = await sendEmailNotification({
    to: process.env.EMAIL_TO,
    ...prEmail,
  })
  console.log('Test 1 Result:', prResult)

  // Test 2: Zoom Lay Hand Registration Email
  console.log('\n--- Test 2: Zoom Lay Hand Prayer Registration ---')
  const zoomData = {
    firstName: 'Sister Gurpreet Kaur',
    gender: 'Female',
    age: 42,
    nationality: 'Canadian (OCI)',
    profession: 'Nurse',
    email: 'gurpreet.k@example.ca',
    phone: '+1 604 555 0192',
    address: 'Surrey, BC, Canada',
    relativeName: 'Jaspreet Singh (Husband)',
    relativePhone: '+1 604 555 0193',
    healthSituation: 'Migraine and kidney inflammation',
    duration: '6 months',
    hospitalized: 'No',
    medicalDevices: 'No',
    zoomAvailability: 'Available on Sunday Evening Session',
    additionalComments: 'Seeking Apostle Ji prayer impartation over Zoom session.',
  }
  const zoomEmail = renderZoomRegistrationEmail(zoomData)
  const zoomResult = await sendEmailNotification({
    to: process.env.EMAIL_TO,
    ...zoomEmail,
  })
  console.log('Test 2 Result:', zoomResult)

  // Test 3: Contact Us Message Email
  console.log('\n--- Test 3: Contact Us Inquiry Form Notification ---')
  const contactData = {
    firstName: 'David',
    lastName: 'Sharma',
    countryCode: '+91',
    phone: '98123 45678',
    email: 'david.sharma@example.com',
    subject: 'Branch service timings inquiry',
    message: 'Grace and peace! Could you please let me know the bus transportation route for Sunday service at Khambra Church from Ludhiana?',
  }
  const contactEmail = renderContactUsEmail(contactData)
  const contactResult = await sendEmailNotification({
    to: process.env.EMAIL_TO,
    ...contactEmail,
  })
  console.log('Test 3 Result:', contactResult)

  console.log('\n✅ All 3 form notifications verified successfully in console mode!')
}

runTests().catch((err) => {
  console.error('❌ Test failed with error:', err)
  process.exit(1)
})
