import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Nextech | Assistentes IA para WhatsApp de Clínicas',
  description: 'Assistentes de WhatsApp com IA que automatizam conversas de clínicas e consultórios, recuperando suas consultas perdidas e oferecendo atendimento 24/7.',
  icons: {
    icon: [
      {
        url: '/Favicon.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/Favicon.png',
        media: '(prefers-color-scheme: dark)',
      },
    ]
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
