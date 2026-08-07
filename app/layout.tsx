import './globals.css'
import React from 'react'

export const metadata = {
  title: 'SnapFrame — Indy Aryanti',
  description: 'Portofolio SnapFrame — scrapbook digital & photobooth strip',
  openGraph: {
    title: 'SnapFrame — Indy Aryanti',
    description: 'Portofolio SnapFrame — scrapbook digital & photobooth strip',
    images: ['/og-image.svg']
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>
        {children}
      </body>
    </html>
  )
}