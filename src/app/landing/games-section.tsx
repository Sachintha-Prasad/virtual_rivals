'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import React, { useRef, useState, useEffect } from 'react'

const images = [
    '/games-images/cod-img.svg',
    '/games-images/pubg-img.svg',
    '/games-images/mw-img.svg',
    '/games-images/nfs-run-img.svg',
    '/games-images/mk-img.svg',
    '/games-images/blur-img.svg',
]

const GamesSection = () => {
    const containerRef = useRef<HTMLDivElement>(null)
    const scrollerRef = useRef<HTMLDivElement>(null)
    const [sectionHeight, setSectionHeight] = useState(0)
    const [totalScrollWidth, setTotalScrollWidth] = useState(0)

    useEffect(() => {
        const calcWidths = () => {
            if (!scrollerRef.current) return
            const containerWidth = scrollerRef.current.scrollWidth
            const viewportWidth = window.innerWidth
            const scrollWidth = containerWidth - viewportWidth

            setTotalScrollWidth(scrollWidth > 0 ? scrollWidth : 0)
            setSectionHeight(
                window.innerHeight + (scrollWidth > 0 ? scrollWidth : 0)
            )
        }

        calcWidths()
        window.addEventListener('resize', calcWidths)
        return () => window.removeEventListener('resize', calcWidths)
    }, [])

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end'],
    })

    const x = useTransform(scrollYProgress, [1, 0], [0, -totalScrollWidth])

    return (
        <section ref={containerRef} id="games" className="flex h-[60vh]">
            <div style={{ height: sectionHeight }} className="relative">
                <div className="bg-background top-0 flex items-center overflow-hidden">
                    <motion.div
                        ref={scrollerRef}
                        style={{ x }}
                        className="flex gap-3 py-3"
                    >
                        {images.map((src, i) => (
                            <div
                                key={i}
                                className="h-[60vh] w-full max-w-[360px] flex-shrink-0 overflow-hidden rounded-xl"
                            >
                                <Image
                                    src={src}
                                    alt={`game-${i}`}
                                    width={360}
                                    height={200}
                                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                                />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default GamesSection
