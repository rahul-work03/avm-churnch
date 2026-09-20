import type { CollectionConfig } from 'payload'

import { authenticated } from '../../access/authenticated'
import { admins } from '../../access/admins'

export const Users: CollectionConfig = {
  slug: 'users',
  access: {
    admin: authenticated,
    create: admins,
    delete: admins,
    read: authenticated,
    update: admins,
  },
  admin: {
    defaultColumns: ['name', 'email', 'roles'],
    useAsTitle: 'name',
  },
  auth: true,
  fields: [
    {
      name: 'name',
      type: 'text',
    },
    {
      name: 'roles',
      type: 'select',
      hasMany: true,
      defaultValue: ['admin'],
      options: [
        {
          label: 'Admin',
          value: 'admin',
        },
        {
          label: 'Editor',
          value: 'editor',
        },
      ],
      access: {
        update: ({ req: { user } }) => {
          if (!user) return false
          const roles = (user as any)?.roles
          return Array.isArray(roles) ? roles.includes('admin') : roles === 'admin'
        },
      },
    },
  ],
  timestamps: true,
  versions: false,
}

