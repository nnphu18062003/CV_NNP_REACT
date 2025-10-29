import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Nguyen Ngoc Phu - Computer Vision Engineer",
  description: "Personal website of Nguyen Ngoc Phu, Computer Vision Engineer",
    generator: 'NGUYEN NGOC PHU'
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
