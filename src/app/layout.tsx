import type { Metadata } from "next"
import { Chakra_Petch } from "next/font/google"
import "./globals.css"

const chakraPetch = Chakra_Petch({
    weight: ["300", "400", "500", "600", "700"]
})

export const metadata: Metadata = {
    title: "Virtual Rivals",
    description: "Virtual rivals definitive edition"
}

export default function RootLayout({
    children
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body className={`${chakraPetch.className}`}>{children}</body>
        </html>
    )
}
