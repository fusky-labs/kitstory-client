import { twMerge } from "tailwind-merge"
import clsx, { type ClassValue } from "clsx"

export function cn(...className: ClassValue[]) {
  return twMerge(clsx(className))
}