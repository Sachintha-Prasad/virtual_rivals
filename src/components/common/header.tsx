'use client'

import React, { useEffect, useRef } from 'react'
import HeaderLayout from '../layouts/header-layout'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
    const navRef = useRef<HTMLElement>(null)

    useEffect(() => {
        const updateMask = () => {
            if (navRef.current) {
                const rect = navRef.current.getBoundingClientRect()
                const headerRect = navRef.current
                    .closest('.fixed')
                    ?.getBoundingClientRect()

                if (headerRect) {
                    const x = rect.left - headerRect.left
                    const y = rect.top - headerRect.top
                    const width = rect.width
                    const height = rect.height
                    const borderRadius = height / 2 // rounded-full effect

                    // Create a rounded rectangle mask using CSS paint function simulation
                    const maskValue = `radial-gradient(${borderRadius}px at ${
                        x + borderRadius
                    }px ${y + height / 2}px, transparent ${
                        borderRadius - 1
                    }px, black ${borderRadius}px),
                                     radial-gradient(${borderRadius}px at ${
                                         x + width - borderRadius
                                     }px ${y + height / 2}px, transparent ${
                                         borderRadius - 1
                                     }px, black ${borderRadius}px),
                                     linear-gradient(to right, transparent ${x}px, black ${
                                         x + borderRadius
                                     }px, black ${x + width - borderRadius}px, transparent ${
                                         x + width
                                     }px),
                                     linear-gradient(to bottom, transparent ${y}px, black ${y}px, black ${
                                         y + height
                                     }px, transparent ${y + height}px)`

                    document.documentElement.style.setProperty(
                        '--nav-mask',
                        maskValue
                    )
                }
            }
        }

        // Update mask on mount and resize
        updateMask()
        window.addEventListener('resize', updateMask)

        return () => window.removeEventListener('resize', updateMask)
    }, [])

    return (
        <HeaderLayout>
            <div className="flex w-full items-center justify-between">
                <Image
                    src={'/vr-logo.svg'}
                    alt="vr-logo"
                    width={120}
                    height={32}
                    className="max-h-[32px]"
                />

                <nav
                    ref={navRef}
                    className="ring-primary-red relative flex max-h-[36px] items-center gap-6 overflow-hidden rounded-full bg-black/10 py-1 pr-6 pl-1 text-sm text-[10px] tracking-widest uppercase ring-1"
                >
                    <Link
                        href={'#'}
                        className="bg-primary-red relative z-10 h-full rounded-full px-3 py-2"
                    >
                        Home
                    </Link>
                    <Link href={'#about-us'} className="relative z-10">
                        About
                    </Link>
                    <Link href={'#games'} className="relative z-10">
                        Games
                    </Link>
                    <Link href={'#rules'} className="relative z-10">
                        Rules
                    </Link>
                    <Link href={'#contact'} className="relative z-10">
                        Contact
                    </Link>
                </nav>

                <button className="bg-primary-red cursor-pointer rounded-full px-3 py-[10px] text-[10px] tracking-widest uppercase">
                    Register Now
                </button>
            </div>
        </HeaderLayout>
    )
}

export default Header
