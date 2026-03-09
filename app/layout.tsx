import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Eduard Stankovič',
  description: 'Personal website of Eduard Stankovič — Frontend Engineer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
