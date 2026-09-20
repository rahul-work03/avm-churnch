import type { AccessArgs } from 'payload'
import type { User } from '@/payload-types'

type isAdminOrEditor = (args: AccessArgs<User>) => boolean

export const adminsOrEditors: isAdminOrEditor = ({ req: { user } }) => {
  if (!user) return false
  if (Array.isArray((user as any)?.roles)) {
    return (user as any).roles.includes('admin') || (user as any).roles.includes('editor')
  }
  return (user as any)?.roles === 'admin' || (user as any)?.roles === 'editor' || !(user as any)?.roles
}
