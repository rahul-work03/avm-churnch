import nodemailer from 'nodemailer'

export interface EmailRecipientOptions {
  to?: string | string[]
  cc?: string | string[]
  bcc?: string | string[]
}

export interface SendEmailOptions extends EmailRecipientOptions {
  subject: string
  html: string
  text?: string
}

function parseEmailList(input?: string | string[]): string[] {
  if (!input) return []
  if (Array.isArray(input)) {
    return input.map((e) => e.trim()).filter(Boolean)
  }
  return input
    .split(',')
    .map((e) => e.trim())
    .filter(Boolean)
}

/**
 * Resolves the primary auth user and fallback sender.
 */
function getEmailAuth() {
  const rawUser = process.env.EMAIL_HOST_USER || ''
  const parsedUsers = parseEmailList(rawUser)
  const authUser = parsedUsers[0] || ''
  const authPass = process.env.EMAIL_HOST_PASSWORD || ''
  return { authUser, authPass, allUsers: parsedUsers }
}

/**
 * Creates or retrieves a nodemailer transporter.
 */
function createTransporter() {
  const { authUser, authPass } = getEmailAuth()

  // Use Gmail service with App Passwords by default
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: authUser,
      pass: authPass,
    },
  })
}

/**
 * Dispatches an email or logs to console depending on EMAIL_BACKEND.
 */
export async function sendEmailNotification(options: SendEmailOptions): Promise<{
  success: boolean
  mode: 'console' | 'smtp'
  messageId?: string
  error?: string
}> {
  const backend = (process.env.EMAIL_BACKEND || 'console').toLowerCase().trim()
  const { authUser, allUsers } = getEmailAuth()

  // Determine From address
  const from =
    process.env.DEFAULT_FROM_EMAIL ||
    (authUser ? `Ankur Narula Ministries <${authUser}>` : 'Ankur Narula Ministries <no-reply@ankurnarulaministries.com>')

  // Resolve To recipients
  const defaultTo = parseEmailList(process.env.EMAIL_TO || allUsers.join(','))
  const explicitTo = parseEmailList(options.to)
  const toList = explicitTo.length > 0 ? explicitTo : defaultTo

  // Resolve CC and BCC
  const envCc = parseEmailList(process.env.EMAIL_CC)
  const explicitCc = parseEmailList(options.cc)
  const ccList = Array.from(new Set([...envCc, ...explicitCc]))

  const envBcc = parseEmailList(process.env.EMAIL_BCC)
  const explicitBcc = parseEmailList(options.bcc)
  const bccList = Array.from(new Set([...envBcc, ...explicitBcc]))

  // Fallback plaintext if not provided
  const textContent = options.text || options.html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()

  // Console Mode
  if (backend === 'console') {
    console.log('\n' + '='.repeat(70))
    console.log('📧 [EMAIL NOTIFICATION - CONSOLE BACKEND]')
    console.log('='.repeat(70))
    console.log(`From   : ${from}`)
    console.log(`To     : ${toList.length > 0 ? toList.join(', ') : '(no recipient specified)'}`)
    if (ccList.length > 0) console.log(`Cc     : ${ccList.join(', ')}`)
    if (bccList.length > 0) console.log(`Bcc    : ${bccList.join(', ')}`)
    console.log(`Subject: ${options.subject}`)
    console.log('-'.repeat(70))
    console.log('Text Preview:\n', textContent)
    console.log('='.repeat(70) + '\n')

    return {
      success: true,
      mode: 'console',
    }
  }

  // SMTP Mode
  try {
    const transporter = createTransporter()
    const info = await transporter.sendMail({
      from,
      to: toList.join(', '),
      cc: ccList.length > 0 ? ccList.join(', ') : undefined,
      bcc: bccList.length > 0 ? bccList.join(', ') : undefined,
      subject: options.subject,
      text: textContent,
      html: options.html,
    })

    console.log(`[Email] Successfully sent email to "${toList.join(', ')}". MessageId: ${info.messageId}`)
    return {
      success: true,
      mode: 'smtp',
      messageId: info.messageId,
    }
  } catch (error: unknown) {
    const errorMsg = error instanceof Error ? error.message : String(error)
    console.error('[Email Error] Failed to send email via SMTP:', errorMsg)
    return {
      success: false,
      mode: 'smtp',
      error: errorMsg || 'Failed to dispatch email',
    }
  }
}

// -------------------------------------------------------------
// Form Data Interfaces
// -------------------------------------------------------------

export interface PrayerRequestEmailData {
  firstName?: string
  lastName?: string
  gender?: string
  age?: number | string
  nationality?: string
  profession?: string
  phone?: string
  email?: string
  address?: string
  relativesName?: string
  relativesPhone?: string
  relativesEmail?: string
  hasSickness?: boolean
  sicknessDetails?: string
  problemNature?: string
  problemDuration?: string
  medications?: string
  dailyLivingImpact?: string
  hospitalized?: boolean | string
  useBrace?: boolean | string
  useWalkingAid?: boolean | string
  useMedicalDevice?: boolean | string
  dailyActivitiesNormal?: boolean | string
  surgeryTherapyDetails?: string
  howDidYouHear?: string
  comments?: string
}

export interface ZoomRegistrationEmailData {
  firstName?: string
  gender?: string
  age?: number | string
  nationality?: string
  profession?: string
  email?: string
  phone?: string
  address?: string
  relativeName?: string
  relativePhone?: string
  relativeEmail?: string
  healthSituation?: string
  problemNature?: string
  duration?: string
  dailyLifeEffect?: string
  hospitalized?: string
  medicalDevices?: string
  zoomAvailability?: string
  additionalComments?: string
}

export interface ContactUsEmailData {
  firstName?: string
  lastName?: string
  countryCode?: string
  phone?: string
  email?: string
  subject?: string
  message?: string
}

// -------------------------------------------------------------
// Production-Grade Email Components & Layout Helpers
// -------------------------------------------------------------

type BadgeVariant = 'alert' | 'success' | 'neutral' | 'gold'

function renderBadge(text: string, variant: BadgeVariant = 'neutral'): string {
  const styles: Record<BadgeVariant, { bg: string; color: string; border: string }> = {
    alert: { bg: '#fef2f2', color: '#b91c1c', border: '#fecaca' },
    success: { bg: '#ecfdf5', color: '#047857', border: '#a7f3d0' },
    neutral: { bg: '#f1f5f9', color: '#475569', border: '#cbd5e1' },
    gold: { bg: '#fefce8', color: '#854d0e', border: '#fef08a' },
  }
  const s = styles[variant]
  return `<span style="display: inline-block; background-color: ${s.bg}; color: ${s.color}; border: 1px solid ${s.border}; padding: 3px 10px; border-radius: 9999px; font-size: 11px; font-weight: 700; letter-spacing: 0.3px; text-transform: uppercase;">${text}</span>`
}

function renderFieldRow(label: string, value?: unknown, badgeVariant?: BadgeVariant): string {
  if (value === undefined || value === null || value === '') return ''

  let formattedValue = ''
  if (typeof value === 'boolean') {
    formattedValue = renderBadge(value ? 'Yes' : 'No', value ? (badgeVariant || 'alert') : 'neutral')
  } else if (badgeVariant) {
    formattedValue = renderBadge(String(value), badgeVariant)
  } else {
    formattedValue = `<span style="color: #0f172a; font-size: 13px; font-weight: 500; word-break: break-word;">${String(value)}</span>`
  }

  return `
    <tr style="border-bottom: 1px solid #f1f5f9;">
      <td style="padding: 10px 14px; font-size: 12px; font-weight: 600; color: #64748b; width: 36%; vertical-align: top; background-color: #fafbfc; text-transform: uppercase; letter-spacing: 0.4px;">
        ${label}
      </td>
      <td style="padding: 10px 14px; vertical-align: top; background-color: #ffffff;">
        ${formattedValue}
      </td>
    </tr>
  `
}

function renderCard(title: string, icon: string, rowsHtml: string): string {
  if (!rowsHtml.trim()) return ''

  return `
    <div style="margin-bottom: 20px; border: 1px solid #e2e8f0; border-radius: 10px; overflow: hidden; background-color: #ffffff; box-shadow: 0 1px 3px rgba(0,0,0,0.03);">
      <div style="padding: 10px 16px; background-color: #f8fafc; border-bottom: 1px solid #e2e8f0;">
        <span style="font-size: 13px; font-weight: 700; color: #1e293b; text-transform: uppercase; letter-spacing: 0.6px;">
          ${icon} &nbsp;${title}
        </span>
      </div>
      <table style="width: 100%; border-collapse: collapse;">
        <tbody>
          ${rowsHtml}
        </tbody>
      </table>
    </div>
  `
}

function renderQuoteCallout(title: string, icon: string, text?: string): string {
  if (!text || !text.trim()) return ''

  return `
    <div style="margin-bottom: 20px; background-color: #fefce8; border: 1px solid #fef08a; border-left: 4px solid #efbf04; border-radius: 8px; padding: 16px 20px;">
      <div style="font-size: 11px; font-weight: 800; color: #854d0e; text-transform: uppercase; letter-spacing: 0.8px; margin-bottom: 8px;">
        ${icon} &nbsp;${title}
      </div>
      <div style="font-size: 14px; line-height: 1.65; color: #713f12; font-style: normal; white-space: pre-wrap; font-weight: 400;">
        ${text.trim()}
      </div>
    </div>
  `
}

interface ActionButton {
  label: string
  href: string
  primary?: boolean
}

function renderActionButtons(buttons: ActionButton[]): string {
  const validButtons = buttons.filter((b) => b.href && b.href !== 'tel:' && b.href !== 'mailto:')
  if (validButtons.length === 0) return ''

  const btnHtml = validButtons
    .map((b) => {
      const bg = b.primary ? '#0b0c1c' : '#ffffff'
      const color = b.primary ? '#ffffff' : '#0b0c1c'
      const border = b.primary ? '1px solid #0b0c1c' : '1px solid #cbd5e1'
      return `
        <a href="${b.href}" style="display: inline-block; background-color: ${bg}; color: ${color}; border: ${border}; padding: 11px 20px; border-radius: 8px; font-size: 13px; font-weight: 600; text-decoration: none; margin: 4px 6px; box-shadow: 0 1px 2px rgba(0,0,0,0.05); text-align: center;">
          ${b.label}
        </a>
      `
    })
    .join('')

  return `
    <div style="margin: 24px 0 16px 0; padding: 16px; background-color: #f8fafc; border-radius: 10px; border: 1px solid #e2e8f0; text-align: center;">
      <div style="font-size: 11px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.6px; margin-bottom: 10px;">
        Quick Coordinator Actions
      </div>
      ${btnHtml}
    </div>
  `
}

interface QuickStat {
  label: string
  value: string
  icon?: string
}

function renderQuickStats(stats: QuickStat[]): string {
  const filtered = stats.filter((s) => s.value && s.value !== 'N/A')
  if (filtered.length === 0) return ''

  const cells = filtered
    .map(
      (s) => `
        <td style="padding: 10px 12px; width: 50%; vertical-align: top; border: 1px solid #f1f5f9; background-color: #ffffff;">
          <div style="font-size: 10px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 2px;">
            ${s.icon ? s.icon + ' ' : ''}${s.label}
          </div>
          <div style="font-size: 13px; font-weight: 600; color: #0f172a; word-break: break-word;">
            ${s.value}
          </div>
        </td>
      `
    )

  // Pair into rows of 2
  const rows: string[] = []
  for (let i = 0; i < cells.length; i += 2) {
    const col1 = cells[i]
    const col2 = cells[i + 1] || '<td style="padding: 10px 12px; width: 50%; border: 1px solid #f1f5f9; background-color: #ffffff;"></td>'
    rows.push(`<tr>${col1}${col2}</tr>`)
  }

  return `
    <div style="margin-bottom: 22px; border-radius: 10px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 1px 3px rgba(0,0,0,0.02);">
      <table style="width: 100%; border-collapse: collapse;">
        <tbody>
          ${rows.join('')}
        </tbody>
      </table>
    </div>
  `
}

interface WrapProductionEmailOptions {
  categoryBadge: string
  categoryColor?: { bg: string; text: string; border: string }
  headline: string
  quickStats: QuickStat[]
  bodyCardsHtml: string
  actions?: ActionButton[]
}

function wrapProductionEmail({
  categoryBadge,
  categoryColor = { bg: '#fef3c7', text: '#92400e', border: '#fcd34d' },
  headline,
  quickStats,
  bodyCardsHtml,
  actions = [],
}: WrapProductionEmailOptions): string {
  const currentYear = new Date().getFullYear()

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${headline}</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f6f8fb; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased; color: #0f172a;">
  
  <!-- Outer Table Container -->
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f6f8fb; margin: 0; padding: 24px 10px;">
    <tr>
      <td align="center" style="vertical-align: top;">

        <!-- Main Email Container (Max 620px) -->
        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width: 620px; background-color: #ffffff; border-radius: 14px; overflow: hidden; box-shadow: 0 4px 20px rgba(11, 12, 28, 0.07); border: 1px solid #e2e8f0; text-align: left;">
          
          <!-- Gold Gradient Accent Line -->
          <tr>
            <td style="height: 4px; background: linear-gradient(90deg, #d4af37 0%, #efbf04 50%, #d4af37 100%);"></td>
          </tr>

          <!-- Sacred Ministry Header -->
          <tr>
            <td style="background-color: #0b0c1c; padding: 28px 24px 22px 24px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0 0 5px 0; font-size: 21px; font-weight: 800; letter-spacing: 1.2px; text-transform: uppercase;">
                Ankur Narula Ministries
              </h1>
              <p style="color: #efbf04; margin: 0; font-size: 11px; text-transform: uppercase; letter-spacing: 2px; font-weight: 700;">
                The Church of Signs and Wonders
              </p>
            </td>
          </tr>

          <!-- Body Content Area -->
          <tr>
            <td style="padding: 24px 24px 20px 24px;">

              <!-- Category Badge & Headline -->
              <div style="margin-bottom: 18px;">
                <span style="display: inline-block; background-color: ${categoryColor.bg}; color: ${categoryColor.text}; border: 1px solid ${categoryColor.border}; padding: 4px 12px; border-radius: 9999px; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.6px; margin-bottom: 8px;">
                  ${categoryBadge}
                </span>
                <h2 style="margin: 0; font-size: 19px; font-weight: 700; color: #0b0c1c; line-height: 1.35;">
                  ${headline}
                </h2>
              </div>

              <!-- Quick Glance Summary Bar -->
              ${renderQuickStats(quickStats)}

              <!-- Main Content Cards -->
              ${bodyCardsHtml}

              <!-- Action Buttons -->
              ${renderActionButtons(actions)}

            </td>
          </tr>

          <!-- Church Footer -->
          <tr>
            <td style="background-color: #f8fafc; padding: 22px 24px; text-align: center; border-top: 1px solid #e2e8f0; font-size: 12px; color: #64748b; line-height: 1.6;">
              <p style="margin: 0 0 6px 0; font-weight: 600; color: #334155;">
                Ankur Narula Ministries • Khambra Church
              </p>
              <p style="margin: 0 0 10px 0; font-size: 11px; color: #64748b;">
                Near TV Tower, Nakodar Road, Jalandhar, Punjab 144026, India<br>
                Official Website: <a href="https://ankurnarula.org" style="color: #0b0c1c; font-weight: 600; text-decoration: underline;">ankurnarula.org</a>
              </p>
              <div style="border-top: 1px dashed #cbd5e1; margin: 12px 0 10px 0;"></div>
              <p style="margin: 0; font-size: 10px; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.4px;">
                🔒 CONFIDENTIAL: Strictly intended for authorized pastoral and intercessory teams. &copy; ${currentYear} All rights reserved.
              </p>
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>

</body>
</html>
  `
}

// -------------------------------------------------------------
// 1. Prayer Request Email Template
// -------------------------------------------------------------

export function renderPrayerRequestEmail(data: PrayerRequestEmailData): { subject: string; html: string; text: string } {
  const fullName = [data.firstName, data.lastName].filter(Boolean).join(' ') || 'Anonymous Believer'
  const subject = `[Prayer Request] New Submission from ${fullName}`
  const nowIst = new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata', dateStyle: 'medium', timeStyle: 'short' }) + ' IST'

  const quickStats: QuickStat[] = [
    { label: 'Applicant', value: fullName, icon: '👤' },
    { label: 'Phone', value: data.phone || 'N/A', icon: '📞' },
    { label: 'Location', value: data.address || data.nationality || 'N/A', icon: '📍' },
    { label: 'Date (IST)', value: nowIst, icon: '📅' },
  ]

  // Card 1: Personal & Contact Profile
  const profileRows = [
    renderFieldRow('Full Name', fullName),
    renderFieldRow('Email', data.email),
    renderFieldRow('Phone Number', data.phone),
    renderFieldRow('Gender', data.gender),
    renderFieldRow('Age', data.age),
    renderFieldRow('Nationality', data.nationality),
    renderFieldRow('Profession', data.profession),
    renderFieldRow('Address', data.address),
    renderFieldRow('Relative Name', data.relativesName),
    renderFieldRow('Relative Phone', data.relativesPhone),
    renderFieldRow('Relative Email', data.relativesEmail),
    renderFieldRow('How Heard', data.howDidYouHear),
  ].join('')

  // Card 2: Health & Medical Situation
  const medicalRows = [
    renderFieldRow('Has Sickness', data.hasSickness, 'alert'),
    renderFieldRow('Sickness Details', data.sicknessDetails),
    renderFieldRow('Problem Nature', data.problemNature),
    renderFieldRow('Duration', data.problemDuration),
    renderFieldRow('Daily Living Impact', data.dailyLivingImpact),
    renderFieldRow('Hospitalized', data.hospitalized, 'alert'),
    renderFieldRow('Medical Devices', data.useMedicalDevice, 'alert'),
    renderFieldRow('Walking Aid', data.useWalkingAid),
    renderFieldRow('Uses Brace', data.useBrace),
    renderFieldRow('Normal Activities', data.dailyActivitiesNormal),
    renderFieldRow('Surgery / Therapy', data.surgeryTherapyDetails),
    renderFieldRow('Medications', data.medications),
  ].join('')

  const cardsHtml = [
    renderCard('Applicant Profile & Contact', '👤', profileRows),
    renderCard('Health & Medical Assessment', '🩺', medicalRows),
    renderQuoteCallout('Spiritual Prayer Burden & Request', '🙏', data.comments),
  ].join('')

  const actions: ActionButton[] = [
    { label: '✉️ Reply to Email', href: data.email ? `mailto:${data.email}` : '', primary: true },
    { label: '📞 Call Applicant', href: data.phone ? `tel:${data.phone.replace(/[^0-9+]/g, '')}` : '' },
  ]

  const html = wrapProductionEmail({
    categoryBadge: '🙏 Prayer & Intercession Request',
    categoryColor: { bg: '#eff6ff', text: '#1e40af', border: '#bfdbfe' },
    headline: `New Prayer Request from ${fullName}`,
    quickStats,
    bodyCardsHtml: cardsHtml,
    actions,
  })

  const text = `
=== NEW ONLINE PRAYER REQUEST ===
Applicant: ${fullName}
Email: ${data.email || 'N/A'}
Phone: ${data.phone || 'N/A'}
Gender: ${data.gender || 'N/A'} | Age: ${data.age || 'N/A'}
Location: ${data.address || data.nationality || 'N/A'}
Has Sickness: ${data.hasSickness ? 'YES' : 'NO'}
Sickness Details: ${data.sicknessDetails || 'N/A'}
Nature of Problem: ${data.problemNature || 'N/A'}
Duration: ${data.problemDuration || 'N/A'}
Hospitalized: ${data.hospitalized ? 'YES' : 'NO'}
Daily Living Impact: ${data.dailyLivingImpact || 'N/A'}
Prayer Request:
${data.comments || 'N/A'}
Submitted: ${nowIst}
  `.trim()

  return { subject, html, text }
}

// -------------------------------------------------------------
// 2. Zoom Lay Hand Registration Email Template
// -------------------------------------------------------------

export function renderZoomRegistrationEmail(data: ZoomRegistrationEmailData): { subject: string; html: string; text: string } {
  const name = data.firstName || 'Registrant'
  const subject = `[Zoom Lay Hand] New Registration from ${name}`
  const nowIst = new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata', dateStyle: 'medium', timeStyle: 'short' }) + ' IST'

  const quickStats: QuickStat[] = [
    { label: 'Registrant', value: name, icon: '👤' },
    { label: 'Phone', value: data.phone || 'N/A', icon: '📞' },
    { label: 'Zoom Slot', value: data.zoomAvailability || 'Pending Confirmation', icon: '💻' },
    { label: 'Date (IST)', value: nowIst, icon: '📅' },
  ]

  // Card 1: Registrant Details
  const profileRows = [
    renderFieldRow('First Name', data.firstName),
    renderFieldRow('Gender', data.gender),
    renderFieldRow('Age', data.age),
    renderFieldRow('Nationality', data.nationality),
    renderFieldRow('Profession', data.profession),
    renderFieldRow('Email', data.email),
    renderFieldRow('Phone', data.phone),
    renderFieldRow('Physical Address', data.address),
  ].join('')

  // Card 2: Relative / Guardian Info
  const relativeRows = [
    renderFieldRow('Relative Name', data.relativeName),
    renderFieldRow('Relative Phone', data.relativePhone),
    renderFieldRow('Relative Email', data.relativeEmail),
  ].join('')

  // Card 3: Clinical & Medical Condition
  const medicalRows = [
    renderFieldRow('Health Situation', data.healthSituation),
    renderFieldRow('Problem Nature', data.problemNature),
    renderFieldRow('Duration', data.duration),
    renderFieldRow('Daily Life Effect', data.dailyLifeEffect),
    renderFieldRow('Hospitalized', data.hospitalized, data.hospitalized?.toLowerCase() === 'yes' ? 'alert' : 'neutral'),
    renderFieldRow('Medical Devices', data.medicalDevices, data.medicalDevices?.toLowerCase() === 'yes' ? 'alert' : 'neutral'),
  ].join('')

  // Card 4: Zoom Availability
  const zoomRows = [
    renderFieldRow('Selected Slot', data.zoomAvailability, 'gold'),
  ].join('')

  const cardsHtml = [
    renderCard('Registrant Profile & Contact', '👤', profileRows),
    renderCard('Relative / Guardian Details', '👥', relativeRows),
    renderCard('Medical & Physical Condition', '🩺', medicalRows),
    renderCard('Session Availability', '💻', zoomRows),
    renderQuoteCallout('Additional Comments & Situation', '📝', data.additionalComments),
  ].join('')

  const actions: ActionButton[] = [
    { label: '✉️ Email Registrant', href: data.email ? `mailto:${data.email}` : '', primary: true },
    { label: '📞 Call Registrant', href: data.phone ? `tel:${data.phone.replace(/[^0-9+]/g, '')}` : '' },
  ]

  const html = wrapProductionEmail({
    categoryBadge: '🕊️ Zoom Lay Hand Healing Registration',
    categoryColor: { bg: '#f0fdf4', text: '#166534', border: '#bbf7d0' },
    headline: `New Zoom Lay Hand Registration: ${name}`,
    quickStats,
    bodyCardsHtml: cardsHtml,
    actions,
  })

  const text = `
=== NEW ZOOM LAY HAND PRAYER REGISTRATION ===
Registrant: ${name}
Gender: ${data.gender || 'N/A'} | Age: ${data.age || 'N/A'}
Nationality: ${data.nationality || 'N/A'}
Email: ${data.email || 'N/A'} | Phone: ${data.phone || 'N/A'}
Address: ${data.address || 'N/A'}
Relative: ${data.relativeName || 'N/A'} (${data.relativePhone || 'N/A'})
Health Situation: ${data.healthSituation || 'N/A'}
Problem Nature: ${data.problemNature || 'N/A'}
Duration: ${data.duration || 'N/A'}
Hospitalized: ${data.hospitalized || 'N/A'}
Medical Devices: ${data.medicalDevices || 'N/A'}
Zoom Availability: ${data.zoomAvailability || 'N/A'}
Comments:
${data.additionalComments || 'N/A'}
Submitted: ${nowIst}
  `.trim()

  return { subject, html, text }
}

// -------------------------------------------------------------
// 3. Contact Us Email Template
// -------------------------------------------------------------

export function renderContactUsEmail(data: ContactUsEmailData): { subject: string; html: string; text: string } {
  const fullName = [data.firstName, data.lastName].filter(Boolean).join(' ') || 'Website Visitor'
  const subject = `[Contact Us] New Message from ${fullName}`
  const nowIst = new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata', dateStyle: 'medium', timeStyle: 'short' }) + ' IST'
  const phoneWithCode = [data.countryCode, data.phone].filter(Boolean).join(' ')

  const quickStats: QuickStat[] = [
    { label: 'Sender', value: fullName, icon: '👤' },
    { label: 'Phone', value: phoneWithCode || 'N/A', icon: '📞' },
    { label: 'Subject', value: data.subject || 'General Inquiry', icon: '🏷️' },
    { label: 'Date (IST)', value: nowIst, icon: '📅' },
  ]

  const senderRows = [
    renderFieldRow('Full Name', fullName),
    renderFieldRow('Email Address', data.email),
    renderFieldRow('Phone Number', phoneWithCode),
    renderFieldRow('Subject', data.subject),
  ].join('')

  const cardsHtml = [
    renderCard('Sender Contact Details', '👤', senderRows),
    renderQuoteCallout('Inquiry Message', '💬', data.message),
  ].join('')

  const actions: ActionButton[] = [
    { label: '✉️ Reply to Email', href: data.email ? `mailto:${data.email}?subject=Re: ${encodeURIComponent(data.subject || 'Your inquiry to Ankur Narula Ministries')}` : '', primary: true },
    { label: '📞 Call Sender', href: phoneWithCode ? `tel:${phoneWithCode.replace(/[^0-9+]/g, '')}` : '' },
  ]

  const html = wrapProductionEmail({
    categoryBadge: '✉️ General Contact Inquiry',
    categoryColor: { bg: '#fef3c7', text: '#92400e', border: '#fcd34d' },
    headline: `New Message from ${fullName}`,
    quickStats,
    bodyCardsHtml: cardsHtml,
    actions,
  })

  const text = `
=== NEW CONTACT US INQUIRY ===
From: ${fullName}
Email: ${data.email || 'N/A'}
Phone: ${phoneWithCode || 'N/A'}
Subject: ${data.subject || 'General Inquiry'}
Message:
${data.message || 'N/A'}
Submitted: ${nowIst}
  `.trim()

  return { subject, html, text }
}

// -------------------------------------------------------------
// 4. Store Order Email Templates (Customer Confirmation & Admin Alert)
// -------------------------------------------------------------

export interface StoreOrderItemSummary {
  title: string
  quantity: number
  unitPrice: number
  totalPrice: number
}

export interface StoreOrderEmailData {
  orderNumber: string
  customerName: string
  customerEmail: string
  customerPhone: string
  shippingAddress: string
  landmark?: string
  city: string
  state?: string
  pincode: string
  deliveryNotes?: string
  items: StoreOrderItemSummary[]
  totalAmount: number
  paymentId?: string
  paymentStatus?: string
  orderDate?: string
}

function renderOrderItemsTable(items: StoreOrderItemSummary[]): string {
  const rows = items
    .map(
      (it) => `
    <tr style="border-bottom: 1px solid #f1f5f9;">
      <td style="padding: 10px 12px; font-size: 13px; font-weight: 600; color: #1e293b; background-color: #ffffff;">
        ${it.title}
      </td>
      <td style="padding: 10px 12px; font-size: 13px; color: #475569; text-align: center; background-color: #ffffff;">
        ${it.quantity}
      </td>
      <td style="padding: 10px 12px; font-size: 13px; color: #475569; text-align: right; background-color: #ffffff;">
        ₹${it.unitPrice}.00
      </td>
      <td style="padding: 10px 12px; font-size: 13px; font-weight: 700; color: #003471; text-align: right; background-color: #ffffff;">
        ₹${it.totalPrice}.00
      </td>
    </tr>
  `
    )
    .join('')

  return `
    <table style="width: 100%; border-collapse: collapse; margin-top: 4px;">
      <thead>
        <tr style="background-color: #f8fafc; border-bottom: 2px solid #e2e8f0;">
          <th style="padding: 8px 12px; text-align: left; font-size: 11px; font-weight: 700; color: #64748b; text-transform: uppercase;">Item</th>
          <th style="padding: 8px 12px; text-align: center; font-size: 11px; font-weight: 700; color: #64748b; text-transform: uppercase;">Qty</th>
          <th style="padding: 8px 12px; text-align: right; font-size: 11px; font-weight: 700; color: #64748b; text-transform: uppercase;">Price</th>
          <th style="padding: 8px 12px; text-align: right; font-size: 11px; font-weight: 700; color: #64748b; text-transform: uppercase;">Total</th>
        </tr>
      </thead>
      <tbody>
        ${rows}
      </tbody>
    </table>
  `
}

/**
 * 4A. Customer Order Confirmation Email
 */
export function renderStoreOrderCustomerEmail(data: StoreOrderEmailData): {
  subject: string
  html: string
  text: string
} {
  const subject = `Your Order #${data.orderNumber} is Confirmed! - The Church of Signs and Wonders Store`
  const nowIst =
    data.orderDate ||
    new Date().toLocaleString('en-US', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'medium',
      timeStyle: 'short',
    }) + ' IST'

  const quickStats: QuickStat[] = [
    { label: 'Order ID', value: data.orderNumber, icon: '📦' },
    { label: 'Total Paid', value: `₹${data.totalAmount}.00`, icon: '💳' },
    { label: 'Payment Gateway', value: 'Instamojo (Verified)', icon: '🔒' },
    { label: 'Order Date', value: nowIst, icon: '📅' },
  ]

  const fullAddress = [
    data.shippingAddress,
    data.landmark ? `Landmark: ${data.landmark}` : '',
    `${data.city}, ${data.state || ''} - ${data.pincode}`,
  ]
    .filter(Boolean)
    .join('<br>')

  const shippingRows = [
    renderFieldRow('Recipient Name', data.customerName),
    renderFieldRow('Mobile Phone', data.customerPhone),
    renderFieldRow('Delivery Address', fullAddress),
    renderFieldRow('Delivery Notes', data.deliveryNotes),
    renderFieldRow('Instamojo Ref', data.paymentId || 'Verified'),
  ].join('')

  const itemsHtml = renderOrderItemsTable(data.items)

  const cardsHtml = [
    renderCard('Ordered Items Summary', '📚', `<tr><td colspan="2" style="padding: 0;">${itemsHtml}</td></tr>`),
    renderCard('Shipping Destination', '📍', shippingRows),
    renderQuoteCallout(
      'Apostolic Blessing',
      '🕊️',
      'Thank you for acquiring these anointed resources by Apostle Dr. Ankur Yoseph Narula. May the presence and power of the Holy Spirit fill your home and bring divine transformation to your life!'
    ),
  ].join('')

  const actions: ActionButton[] = [
    {
      label: '🌐 Visit Ministry Store',
      href: `${process.env.NEXT_PUBLIC_SERVER_URL || 'https://ankurnarula.org'}/store`,
      primary: true,
    },
    {
      label: '📞 Store Helpline: 0181 520 7777',
      href: 'tel:01815207777',
    },
  ]

  const html = wrapProductionEmail({
    categoryBadge: '✨ Order Confirmed & Paid',
    categoryColor: { bg: '#ecfdf5', text: '#065f46', border: '#a7f3d0' },
    headline: `Thank You, ${data.customerName}! Your Order #${data.orderNumber} is Received`,
    quickStats,
    bodyCardsHtml: cardsHtml,
    actions,
  })

  const textItems = data.items
    .map((it) => `- ${it.title} x ${it.quantity} = ₹${it.totalPrice}.00`)
    .join('\n')

  const text = `
=== ORDER CONFIRMATION: ANKUR NARULA MINISTRIES ===
Order Number: ${data.orderNumber}
Customer: ${data.customerName}
Phone: ${data.customerPhone}
Date: ${nowIst}
Payment ID: ${data.paymentId || 'Instamojo'}

ITEMS ORDERED:
${textItems}
Total Paid: ₹${data.totalAmount}.00

SHIPPING ADDRESS:
${data.shippingAddress}
${data.city}, ${data.state || ''} - ${data.pincode}

Our dispatch team is preparing your package. Courier tracking details will follow soon.
Helpline: 0181 520 7777 | info@ankurnarula.org
  `.trim()

  return { subject, html, text }
}

/**
 * 4B. Admin Order Received Notification Email
 */
export function renderStoreOrderAdminEmail(data: StoreOrderEmailData): {
  subject: string
  html: string
  text: string
} {
  const subject = `🚨 [New Store Order to Dispatch] #${data.orderNumber} - ₹${data.totalAmount} (Paid via Instamojo)`
  const nowIst =
    data.orderDate ||
    new Date().toLocaleString('en-US', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'medium',
      timeStyle: 'short',
    }) + ' IST'

  const quickStats: QuickStat[] = [
    { label: 'Order ID', value: data.orderNumber, icon: '🏷️' },
    { label: 'Customer', value: data.customerName, icon: '👤' },
    { label: 'Amount Paid', value: `₹${data.totalAmount}.00`, icon: '💰' },
    { label: 'Location', value: `${data.city}, ${data.state || ''}`, icon: '📍' },
  ]

  const fullAddress = [
    data.shippingAddress,
    data.landmark ? `Landmark: ${data.landmark}` : '',
    `${data.city}, ${data.state || ''} - ${data.pincode}`,
  ]
    .filter(Boolean)
    .join('<br>')

  const customerRows = [
    renderFieldRow('Full Name', data.customerName),
    renderFieldRow('Phone Number', data.customerPhone),
    renderFieldRow('Email Address', data.customerEmail),
    renderFieldRow('Shipping Address', fullAddress),
    renderFieldRow('Customer Notes', data.deliveryNotes),
    renderFieldRow('Instamojo Payment ID', data.paymentId || 'Credit'),
    renderFieldRow('Payment Status', 'PAID (CREDITED)', 'success'),
  ].join('')

  const itemsHtml = renderOrderItemsTable(data.items)

  const cardsHtml = [
    renderCard('Items to Dispatch & Pack', '📦', `<tr><td colspan="2" style="padding: 0;">${itemsHtml}</td></tr>`),
    renderCard('Customer & Dispatch Address', '🚚', customerRows),
  ].join('')

  const actions: ActionButton[] = [
    {
      label: '📞 Call Customer',
      href: `tel:${data.customerPhone.replace(/[^0-9+]/g, '')}`,
      primary: true,
    },
    {
      label: '✉️ Email Customer',
      href: `mailto:${data.customerEmail}?subject=Regarding Your Order ${data.orderNumber}`,
    },
    {
      label: '⚙️ Open in Payload Admin',
      href: `${process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'}/admin/collections/orders`,
    },
  ]

  const html = wrapProductionEmail({
    categoryBadge: '🚨 Action Required: Dispatch Order',
    categoryColor: { bg: '#fef2f2', text: '#991b1b', border: '#fecaca' },
    headline: `New Paid Order #${data.orderNumber} from ${data.customerName}`,
    quickStats,
    bodyCardsHtml: cardsHtml,
    actions,
  })

  const textItems = data.items
    .map((it) => `- ${it.title} (Qty: ${it.quantity}) - ₹${it.totalPrice}.00`)
    .join('\n')

  const text = `
=== NEW STORE ORDER RECEIVED FOR DISPATCH ===
Order ID: ${data.orderNumber}
Customer: ${data.customerName}
Phone: ${data.customerPhone}
Email: ${data.customerEmail}
Amount Paid: ₹${data.totalAmount}.00 (Instamojo Ref: ${data.paymentId || 'N/A'})

PACKING LIST:
${textItems}

COURIER SHIPPING ADDRESS:
${data.customerName}
${data.shippingAddress}
${data.landmark ? `Landmark: ${data.landmark}\n` : ''}${data.city}, ${data.state || ''} - ${data.pincode}
Phone: ${data.customerPhone}

Submitted: ${nowIst}
  `.trim()

  return { subject, html, text }
}

