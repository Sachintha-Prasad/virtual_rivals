"use client"
import React, { useEffect, useState } from "react"

type HeaderLayoutProps = {
    children: React.ReactNode
}

const HeaderLayout = ({ children }: HeaderLayoutProps) => {
    const [isScroll, setIsScroll] = useState(false)

    useEffect(() => {
        const onScroll = () => setIsScroll(window.scrollY > 24)
        window.addEventListener("scroll", onScroll)
        return () => removeEventListener("scroll", onScroll)
    }, [isScroll])

    return (
        <div className="fixed w-full z-50">
            {/* Blur layer that covers the entire header */}
            <div
                className="absolute inset-0 backdrop-blur-md"
                style={{
                    maskImage: "var(--nav-mask)",
                    WebkitMaskImage: "var(--nav-mask)",
                    maskComposite: "intersect",
                    WebkitMaskComposite: "source-in"
                }}
            />

            {/* Main header content */}
            <div className="relative bg-gradient-to-b from-black via-black/35 to-transparent">
                <div className="max-w-full px-[160px] py-12 mx-auto w-full">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default HeaderLayout
