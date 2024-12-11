import type { Metadata } from 'next'
import { PT_Sans } from 'next/font/google'
import './globals.css'
import Footer from './components/Footer'

const ptSans = PT_Sans({
  weight: ['400','700'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'CountdownSphere',
  description: 'CountdownSphere lets you track, create, and share countdowns for any event.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={ptSans.className}>
        {children}
        <Footer/>
      </body>
    </html>
  )
}