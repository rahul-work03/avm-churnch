import type { CollectionConfig } from 'payload'

export const ZoomRegistrations: CollectionConfig = {
  slug: 'zoom-registrations',
  admin: {
    useAsTitle: 'fullName',
    group: 'Ministry Operations',
    defaultColumns: ['fullName', 'phone', 'email', 'zoomAvailability', 'status', 'createdAt'],
  },
  access: {
    create: () => true,
    read: ({ req: { user } }) => Boolean(user),
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => Boolean(user),
  },
  fields: [
    {
      name: 'fullName',
      type: 'text',
      label: 'Full Name',
      admin: {
        readOnly: true,
      },
      hooks: {
        beforeValidate: [
          ({ siblingData }) => {
            return (siblingData.firstName || '').trim()
          },
        ],
      },
    },
    {
      type: 'row',
      fields: [
        {
          name: 'firstName',
          type: 'text',
          label: 'First Name',
          required: true,
        },
        {
          name: 'gender',
          type: 'select',
          label: 'Gender',
          options: ['Male', 'Female', 'Other'],
          required: true,
        },
        {
          name: 'age',
          type: 'number',
          label: 'Age',
          required: true,
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'nationality',
          type: 'text',
          label: 'Nationality',
          required: true,
        },
        {
          name: 'profession',
          type: 'text',
          label: 'Profession',
          required: true,
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'email',
          type: 'email',
          label: 'Email Address',
          required: true,
        },
        {
          name: 'phone',
          type: 'text',
          label: 'Phone Number',
          required: true,
        },
      ],
    },
    {
      type: 'collapsible',
      label: 'Emergency / Relative Contact',
      admin: {
        initCollapsed: true,
      },
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'relativeName',
              type: 'text',
              label: "Relative's Name",
            },
            {
              name: 'relativePhone',
              type: 'text',
              label: "Relative's Phone",
            },
            {
              name: 'relativeEmail',
              type: 'email',
              label: "Relative's Email",
            },
          ],
        },
      ],
    },
    {
      type: 'collapsible',
      label: 'Health Situation and Problem Details',
      fields: [
        {
          name: 'healthSituation',
          type: 'textarea',
          label: 'Health Situation / Sickness',
          required: true,
        },
        {
          name: 'address',
          type: 'textarea',
          label: 'Address',
          required: true,
        },
        {
          name: 'problemNature',
          type: 'textarea',
          label: 'Nature of Problem',
          required: true,
        },
        {
          type: 'row',
          fields: [
            {
              name: 'duration',
              type: 'text',
              label: 'How long has this been going on?',
              required: true,
            },
            {
              name: 'dailyLifeEffect',
              type: 'text',
              label: 'Effect on daily life',
              required: true,
            },
          ],
        },
        {
          type: 'row',
          fields: [
            {
              name: 'hospitalized',
              type: 'select',
              label: 'Ever hospitalized?',
              options: ['Yes', 'No'],
              required: true,
            },
            {
              name: 'medicalDevices',
              type: 'select',
              label: 'Using medical devices?',
              options: ['Yes', 'No'],
              required: true,
            },
          ],
        },
        {
          name: 'zoomAvailability',
          type: 'text',
          label: 'Zoom Availability (Time zone / Preferred windows)',
          required: true,
        },
        {
          name: 'additionalComments',
          type: 'textarea',
          label: 'Additional Comments',
        },
      ],
    },
    {
      type: 'collapsible',
      label: 'Session Management (Admin Only)',
      admin: {
        position: 'sidebar',
      },
      fields: [
        {
          name: 'status',
          type: 'select',
          label: 'Registration Status',
          defaultValue: 'pending',
          options: [
            { label: 'Pending Review', value: 'pending' },
            { label: 'Session Scheduled', value: 'scheduled' },
            { label: 'Completed', value: 'completed' },
            { label: 'Cancelled', value: 'cancelled' },
          ],
        },
        {
          name: 'scheduledZoomLink',
          type: 'text',
          label: 'Assigned Zoom Link',
        },
        {
          name: 'scheduledDateTime',
          type: 'text',
          label: 'Scheduled Date & Time',
        },
      ],
    },
  ],
}
