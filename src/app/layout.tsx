import type { Metadata } from 'next'
import Script from 'next/script'
import { Manrope, Space_Grotesk } from 'next/font/google'
import './globals.css'

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-body',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-display',
})

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
    <html lang="en" suppressHydrationWarning>
      <body className={`${manrope.variable} ${spaceGrotesk.variable}`}>
        <Script id="theme-init" strategy="beforeInteractive">
          {`(() => {
            try {
              const storedTheme = window.localStorage.getItem("theme");
              const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
              const theme = storedTheme === "light" || storedTheme === "dark"
                ? storedTheme
                : (prefersDark ? "dark" : "light");
              document.documentElement.dataset.theme = theme;
            } catch {
              document.documentElement.dataset.theme = "light";
            }
          })();`}
        </Script>
        {children}
      </body>
    </html>
  )
}
