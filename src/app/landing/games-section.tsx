'use client'

import Image from 'next/image'
import React, { useRef, useEffect } from 'react'

const images = [
    '/games-images/cod-img.jpg',
    '/games-images/pubg-img.jpg',
    '/games-images/mw-img.jpg',
    '/games-images/nfs-run-img.jpg',
    '/games-images/mk-img.jpg',
    '/games-images/blur-img.jpg',
    '/games-images/hill-climb-img.jpg',
]

const GamesSection = () => {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const container = containerRef.current
        if (!container) return

        const children = Array.from(container.children)
        children.forEach((child) => {
            const clone = child.cloneNode(true)
            container.appendChild(clone)
        })

        let scroll = 0
        const speed = 1

        const animate = () => {
            scroll += speed
            if (container.scrollWidth / 2 <= scroll) {
                scroll = 0
            }
            container.scrollLeft = scroll
            requestAnimationFrame(animate)
        }

        animate()
    }, [])

    return (
        <section
            id="games"
            className="bg-background w-full overflow-hidden py-[80px]"
        >
            <div ref={containerRef} className="flex gap-3 overflow-hidden py-3">
                {images.map((src, i) => (
                    <div
                        key={i}
                        className="size-[410px] w-full max-w-[410px] flex-shrink-0 overflow-hidden rounded-xl"
                    >
                        <Image
                            src={src}
                            alt={`game-${i}`}
                            width={3000}
                            height={3000}
                            quality={100}
                            className="pointer-events-none h-full w-full object-cover"
                        />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default GamesSection
