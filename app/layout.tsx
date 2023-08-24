import Navbar from '@/components/layouts/Navbar';
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from '@/components/layouts/Footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FlexDribble',
  description: 'A developer app for displaying their work',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={ inter.className }>
        <Navbar />
        <main>
        { children }
        </main>
        <Footer />
      </body>
    </html>
  )
}
