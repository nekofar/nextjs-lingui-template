import clsx, { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export * from './locales'

export const clsxm = (...classes: ClassValue[]) => twMerge(clsx(...classes))
