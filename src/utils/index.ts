import clsx, { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export { vazirmatn } from './fonts'
export * from './locales'

export const clsxm = (...classes: ClassValue[]) => twMerge(clsx(...classes))
