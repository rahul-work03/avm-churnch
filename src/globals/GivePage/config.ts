import type { GlobalConfig } from 'payload'
import { anyone } from '../../access/anyone'
import { adminsOrEditors } from '../../access/adminsOrEditors'

const DEFAULT_BANK_ACCOUNTS = [
  {
    bankName: 'Axis Bank',
    logoFallback: '/give/axis_bank_logo.png',
    accountHolder: 'ANKUR NARULA MINISTRY SOCIETY',
    accountNumber: '924010075067074',
    ifsc: 'UTIB0004459',
    branch: 'JALANDHAR',
    borderColor: '#97144d',
  },
  {
    bankName: 'HDFC Bank',
    logoFallback: '/give/hdfc_bank_logo.png',
    accountHolder: 'ANKUR NARULA MINISTRY SOCIETY',
    accountNumber: '591300000000116',
    ifsc: 'HDFC0000341',
    branch: 'JALANDHAR',
    borderColor: '#004c8f',
  },
  {
    bankName: 'ICICI Bank',
    logoFallback: '/give/icici_bank_logo.png',
    accountHolder: 'ANKUR NARULA MINISTRY SOCIETY',
    accountNumber: '24680500116',
    ifsc: 'ICIC0002468',
    branch: 'JALANDHAR',
    borderColor: '#f37021',
  },
]

export const GivePageGlobal: GlobalConfig = {
  slug: 'give-page',
  access: {
    read: anyone,
    update: adminsOrEditors,
  },
  admin: {
    group: 'Website Settings',
  },
  hooks: {
    beforeRead: [
      ({ doc }) => {
        if (!doc) return doc
        return {
          ...doc,
          bankAccounts:
            doc.bankAccounts && doc.bankAccounts.length > 0
              ? doc.bankAccounts
              : DEFAULT_BANK_ACCOUNTS,
        }
      },
    ],
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Hero Section',
          fields: [
            {
              name: 'heroTitle',
              type: 'text',
              label: 'Hero Main Title',
              defaultValue: 'Give your Tithe & Offerings to the Lord',
            },
            {
              name: 'scriptureVerse',
              type: 'textarea',
              label: 'Scripture Quotation',
              defaultValue:
                'The Bible says, “Give, and it shall be given unto you” (Luke 6:38). In God’s Kingdom, giving is a seed that brings a multiplied harvest.',
            },
            {
              name: 'purposeStatement',
              type: 'textarea',
              label: 'Ministry Purpose Statement',
              defaultValue:
                'At Ankur Narula Ministries, your tithes, offerings, and seeds are used for God’s kingdom— spreading the Gospel, building the house of God, restoring broken families, and helping the poor, widows, and orphans through charity and compassion.',
            },
          ],
        },
        {
          label: 'QR Code Section',
          fields: [
            {
              name: 'qrHeaderTitle',
              type: 'text',
              label: 'QR Section Header Title',
              defaultValue: 'Scan QR Code For Tithes & Offerings',
            },
            {
              name: 'iciciQrImage',
              type: 'upload',
              relationTo: 'media',
              label: 'ICICI Bank QR Code Image',
            },
            {
              name: 'iciciQrFallback',
              type: 'text',
              label: 'ICICI Bank QR Fallback Path',
              defaultValue: '/give/icici_qr_card.png',
            },
            {
              name: 'hdfcQrImage',
              type: 'upload',
              relationTo: 'media',
              label: 'HDFC Bank QR Code Image',
            },
            {
              name: 'hdfcQrFallback',
              type: 'text',
              label: 'HDFC Bank QR Fallback Path',
              defaultValue: '/give/hdfc_qr_card.png',
            },
            {
              name: 'axisLogo',
              type: 'upload',
              relationTo: 'media',
              label: 'Axis Bank Logo Image',
            },
            {
              name: 'axisLogoFallback',
              type: 'text',
              label: 'Axis Bank Logo Fallback Path',
              defaultValue: '/give/axis_bank_logo.png',
            },
            {
              name: 'axisQrImage',
              type: 'upload',
              relationTo: 'media',
              label: 'Axis Bank QR Code Image',
            },
            {
              name: 'axisQrFallback',
              type: 'text',
              label: 'Axis Bank QR Fallback Path',
              defaultValue: '/give/axis_qr_card.png',
            },
            {
              name: 'gpayQrImage',
              type: 'upload',
              relationTo: 'media',
              label: 'Google Pay QR Code Image',
            },
            {
              name: 'gpayQrFallback',
              type: 'text',
              label: 'Google Pay QR Fallback Path',
              defaultValue: '/give/gpay_qr_card.png',
            },
          ],
        },
        {
          label: 'Direct Bank Accounts',
          fields: [
            {
              name: 'bankHeaderTitle',
              type: 'text',
              label: 'Bank Accounts Section Header Title',
              defaultValue: 'YOU CAN SEND OFFERING THROUGH WITH ALL THESE BANKS',
            },
            {
              name: 'bankAccounts',
              type: 'array',
              label: 'Bank Account Cards',
              defaultValue: DEFAULT_BANK_ACCOUNTS,
              fields: [
                {
                  name: 'bankName',
                  type: 'text',
                  label: 'Bank Name',
                  required: true,
                },
                {
                  name: 'logo',
                  type: 'upload',
                  relationTo: 'media',
                  label: 'Bank Logo',
                },
                {
                  name: 'logoFallback',
                  type: 'text',
                  label: 'Fallback Logo Path',
                },
                {
                  name: 'accountHolder',
                  type: 'text',
                  label: 'Account Holder Name',
                  defaultValue: 'ANKUR NARULA MINISTRY SOCIETY',
                },
                {
                  name: 'accountNumber',
                  type: 'text',
                  label: 'Account Number',
                  required: true,
                },
                {
                  name: 'ifsc',
                  type: 'text',
                  label: 'IFSC Code',
                  required: true,
                },
                {
                  name: 'branch',
                  type: 'text',
                  label: 'Branch Location',
                  defaultValue: 'JALANDHAR',
                },
                {
                  name: 'borderColor',
                  type: 'text',
                  label: 'Card Border Accent Color (Hex code, e.g. #97144d)',
                  defaultValue: '#003471',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
