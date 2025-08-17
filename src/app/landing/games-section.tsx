'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import React, { useState } from 'react'

const images = [
    '/games-images/cod-img.svg',
    '/games-images/pubg-img.svg',
    '/games-images/mw-img.svg',
    '/games-images/nfs-run-img.svg',
    '/games-images/mk-img.svg',
    '/games-images/blur-img.svg',
]

const GamesSection = () => {
    const [isDragging, setIsDragging] = useState(false)

    return (
        <section
            id="games"
            className="bg-background flex min-h-screen items-center overflow-hidden py-3"
        >
            <motion.div
                className="flex gap-3"
                drag="x"
                dragConstraints={{ left: -1500, right: 0 }}
                animate={
                    !isDragging
                        ? { x: ['0%', '-100%'] } // auto scroll
                        : undefined // stop anim while dragging
                }
                transition={
                    !isDragging
                        ? { repeat: Infinity, ease: 'linear', duration: 20 }
                        : undefined
                }
                onDragStart={() => setIsDragging(true)}
                onDragEnd={() => setIsDragging(false)}
            >
                {/* Always render first set */}
                {images.map((src, i) => (
                    <div
                        key={`set1-${i}`}
                        className="flex-shrink-0 overflow-hidden rounded-lg"
                    >
                        <Image
                            src={src}
                            alt={`game-${i}`}
                            width={300}
                            height={160}
                            className="transition-transform duration-300 hover:scale-105"
                        />
                    </div>
                ))}

                {/* Render second set ONLY when auto-scroll is active */}
                {!isDragging &&
                    images.map((src, i) => (
                        <div
                            key={`set2-${i}`}
                            className="flex-shrink-0 overflow-hidden rounded-lg"
                        >
                            <Image
                                src={src}
                                alt={`game-${i}`}
                                width={300}
                                height={160}
                            />
                        </div>
                    ))}
            </motion.div>
        </section>
    )
}

export default GamesSection
