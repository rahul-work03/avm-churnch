import type { AccessArgs } from 'payload'
import type { User } from '@/payload-types'

type isAdmin = (args: AccessArgs<User>) => boolean

export const admins: isAdmin = ({ req: { user } }) => {
  if (!user) return false
  if (Array.isArray((user as any)?.roles)) {
    return (user as any).roles.includes('admin')
  }
  return (user as any)?.roles === 'admin' || !(user as any)?.roles
}
