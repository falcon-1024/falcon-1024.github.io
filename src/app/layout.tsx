import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

const poppins = Poppins({ subsets: ['latin'],
weight: ['400','500', '600', '700', '800', '900'],
variable: '--font-poppins' })

export const metadata: Metadata = {
  title: 'Abhi Patel',
  description: 'Abhi\'s Portfolio Site',
  // icons: 'src/app/icon.png'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${poppins.variable}`}>{children}</body>
    </html>
  )
}
