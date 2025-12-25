import type React from "react"
import type { Metadata } from "next"
import { Barlow, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _barlow = Barlow({ subsets: ["latin"], weight: ["400", "500", "600", "700"] })
const _inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500", "600"] })

export const metadata: Metadata = {
  title: "BetEco Production | Архитектурный бетон",
  description: "Производство столешниц и изделий для интерьера из архитектурного бетона",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <body className={`font-sans antialiased ${_inter.className}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
