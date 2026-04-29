import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export const MJ_BARBER_PHONE_TEL = "tel:0698306176"
export const MJ_BARBER_PHONE_DISPLAY = "06 98 30 61 76"
export const MJ_BARBER_ADDRESS_STREET = "17 Rue Jean-Pierre-Moustier"
export const MJ_BARBER_ADDRESS_CITY = "13001 Marseille"
export const MJ_BARBER_ADDRESS_FULL = `${MJ_BARBER_ADDRESS_STREET}, ${MJ_BARBER_ADDRESS_CITY}`
export const MJ_BARBER_GOOGLE_MAPS_DIRECTIONS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=17+Rue+Jean-Pierre-Moustier+13001+Marseille"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
