'use client'

import React, { useEffect, useState } from 'react'
import HeaderLayout from '../layouts/header-layout'
import Image from 'next/image'
import { motion } from 'framer-motion'

type NavItemsType = {
    label: string
    href: string
}

const navItems: NavItemsType[] = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about-us' },
    { label: 'Games', href: '#games' },
    { label: 'Rules', href: '#rules' },
    { label: 'Contact', href: '#contact' },
]

const Header = () => {
    const [active, setActive] = useState('Home')
    const [isScrolling, setIsScrolling] = useState(false)

    useEffect(() => {
        const sections = navItems
            .map((item) =>
                item.href !== '#' ? document.querySelector(item.href) : null
            )
            .filter(Boolean) as HTMLElement[]

        const observer = new IntersectionObserver(
            (entries) => {
                if (isScrolling) return

                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const id = entry.target.getAttribute('id')
                        const match = navItems.find(
                            (item) => item.href === `#${id}`
                        )
                        if (match) {
                            setActive(match.label)
                            history.replaceState(null, '', `#${id}`)
                        }
                    }
                })
            },
            { threshold: 0.6 }
        )

        sections.forEach((section) => observer.observe(section))
        return () => observer.disconnect()
    }, [isScrolling])

    const handleScrollTo = (href: string, label: string) => {
        const target = document.querySelector(href)
        if (target) {
            setIsScrolling(true)
            setActive(label)
            history.replaceState(null, '', href)

            target.scrollIntoView({ behavior: 'smooth', block: 'start' })

            // unlock observer after scroll finishes (~700ms is enough for smooth scroll)
            setTimeout(() => setIsScrolling(false), 700)
        }
    }

    return (
        <HeaderLayout>
            <div className="flex w-full items-center justify-between">
                <Image
                    src="/logo/vr-logo.svg"
                    alt="vr-logo"
                    width={120}
                    height={32}
                    className="max-h-[32px]"
                />

                <nav className="bg-primary-red/20 ring-primary-red relative flex items-center rounded-full p-1 text-xs font-medium uppercase ring-1 backdrop-blur-[12px]">
                    {navItems.map((item) => (
                        <button
                            key={item.label}
                            onClick={() =>
                                handleScrollTo(item.href, item.label)
                            }
                            className="relative z-10 rounded-full px-3 py-1 text-[10px] tracking-widest text-white uppercase transition-colors"
                        >
                            {active === item.label && (
                                <motion.div
                                    layoutId="active-pill"
                                    className="bg-primary-red absolute inset-0 z-[-1] rounded-full"
                                    transition={{
                                        type: 'spring',
                                        stiffness: 300,
                                        damping: 30,
                                    }}
                                />
                            )}
                            <a href={item.href}>{item.label}</a>
                        </button>
                    ))}
                </nav>

                <button className="bg-primary-red cursor-pointer rounded-full px-4 py-2 text-[10px] font-semibold tracking-widest text-white uppercase shadow-lg">
                    Register Now
                </button>
            </div>
        </HeaderLayout>
    )
}

export default Header
