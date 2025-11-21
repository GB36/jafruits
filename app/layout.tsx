import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'J & A Fruits | Premium Agricultural Exports',
  description: 'Leading supplier of premium tropical and specialty fruits for global markets. Sustainable farming practices and world-class export excellence.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/light-mode-3.jpg',
      },

    ],
    apple: '/jafavicon.png'
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f9f7f4" },
    { media: "(prefers-color-scheme: dark)", color: "#1f2414" }
  ],
  userScalable: true,
  width: "device-width",
  initialScale: 1
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
