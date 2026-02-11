import localFont from 'next/font/local'
import { Inter, Playfair_Display } from 'next/font/google'


export const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair-display',
})

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})