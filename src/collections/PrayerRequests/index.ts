import type { CollectionConfig } from 'payload'

export const PrayerRequests: CollectionConfig = {
  slug: 'prayer-requests',
  admin: {
    useAsTitle: 'fullName',
    group: 'Ministry Operations',
    defaultColumns: ['fullName', 'phone', 'email', 'problemNature', 'status', 'createdAt'],
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
            return `${siblingData.firstName || ''} ${siblingData.lastName || ''}`.trim()
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
          name: 'lastName',
          type: 'text',
          label: 'Last Name',
          required: true,
        },
      ],
    },
    {
      type: 'row',
      fields: [
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
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'phone',
          type: 'text',
          label: 'Phone Number',
          required: true,
        },
        {
          name: 'email',
          type: 'email',
          label: 'Email Address',
          required: true,
        },
      ],
    },
    {
      name: 'address',
      type: 'textarea',
      label: 'Full Address',
      required: true,
    },
    {
      type: 'collapsible',
      label: 'Relatives Information',
      admin: {
        initCollapsed: true,
      },
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'relativesName',
              type: 'text',
              label: 'Relatives Name',
            },
            {
              name: 'relativesPhone',
              type: 'text',
              label: 'Relatives Phone',
            },
            {
              name: 'relativesEmail',
              type: 'email',
              label: 'Relatives Email',
            },
          ],
        },
      ],
    },
    {
      type: 'collapsible',
      label: 'Medical and Prayer Condition Details',
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'hasSickness',
              type: 'select',
              label: 'Having Sickness?',
              options: ['Yes', 'No'],
            },
            {
              name: 'hospitalized',
              type: 'text',
              label: 'Ever Hospitalized?',
            },
          ],
        },
        {
          name: 'problemNature',
          type: 'textarea',
          label: 'Nature of Problem and Symptoms',
        },
        {
          name: 'problemDuration',
          type: 'text',
          label: 'Duration of Problem',
        },
        {
          name: 'medications',
          type: 'textarea',
          label: 'Medications Taken',
        },
        {
          name: 'dailyLivingImpact',
          type: 'textarea',
          label: 'Daily Living Impact',
        },
        {
          type: 'row',
          fields: [
            {
              name: 'useBrace',
              type: 'select',
              label: 'Using Brace?',
              options: ['Yes', 'No'],
            },
            {
              name: 'useWalkingAid',
              type: 'select',
              label: 'Using Walking Aid / Wheelchair?',
              options: ['Yes', 'No'],
            },
            {
              name: 'useMedicalDevice',
              type: 'select',
              label: 'Using Medical Device?',
              options: ['Yes', 'No'],
            },
            {
              name: 'dailyActivitiesNormal',
              type: 'select',
              label: 'Daily Activities Normal?',
              options: ['Yes', 'No'],
            },
          ],
        },
        {
          name: 'surgeryTherapyDetails',
          type: 'textarea',
          label: 'Surgery or Therapy Details',
        },
        {
          name: 'howDidYouHear',
          type: 'text',
          label: 'How did you hear about us?',
        },
        {
          name: 'comments',
          type: 'textarea',
          label: 'Additional Comments',
        },
      ],
    },
    {
      name: 'status',
      type: 'select',
      label: 'Prayer Status',
      defaultValue: 'pending',
      options: [
        { label: 'Pending Prayer', value: 'pending' },
        { label: 'Prayed by Ministry Team', value: 'prayed' },
        { label: 'Followed Up / Contacted', value: 'contacted' },
        { label: 'Archived', value: 'archived' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
  ],
}
