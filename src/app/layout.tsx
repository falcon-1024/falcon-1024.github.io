import type { Metadata } from 'next'
import Script from 'next/script'
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
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} ${poppins.variable}`}>
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
