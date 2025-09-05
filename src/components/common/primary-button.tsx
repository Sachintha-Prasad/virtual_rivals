'use client'
import React, { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import Image from 'next/image'

type PrimaryButtonProps = {
    text: string
    href?: string
    icon_path?: string
    size?: 'small' | 'base' | 'large'
    onClick?: () => void
    isGlow?: boolean
}

const PrimaryButton = ({
    text,
    href,
    icon_path,
    onClick,
    size = 'base',
    isGlow = false,
}: PrimaryButtonProps) => {
    return (
        <a
            href={href}
            onClick={onClick}
            className={cn(
                'bg-primary-red relative flex cursor-pointer items-center gap-3 px-4 font-semibold tracking-widest uppercase',
                size === 'small' && 'py-2 text-sm',
                size === 'base' && 'py-3 text-sm sm:text-lg',
                size === 'large' && 'py-4 text-sm sm:text-2xl',
                isGlow &&
                    'shadow-[0px_0px_48px_0px_#D10225BF] backdrop-blur-[17.4px]'
            )}
        >
            {/* Left Polygon */}
            <div
                className="bg-primary-red absolute top-0 left-0 h-full w-6 -translate-x-full"
                style={{
                    clipPath:
                        size === 'small'
                            ? 'polygon(25% 50%, 100% 0, 100% 100%)'
                            : 'polygon(0% 50%, 100% 0, 100% 100%)',
                }}
            />
            {/* Right Polygon */}
            <div
                className="bg-primary-red absolute top-0 right-0 h-full w-6 translate-x-full"
                style={{
                    clipPath:
                        size === 'small'
                            ? 'polygon(75% 50%, 0 0, 0 100%)'
                            : 'polygon(100% 50%, 0 0, 0 100%)',
                }}
            />

            {icon_path && (
                <Image
                    src={icon_path}
                    alt="console icon"
                    width={42}
                    height={18}
                    className={cn(
                        size === 'base' && 'max-w-[24px]',
                        size === 'large' && 'max-w-[24px] sm:max-w-[42px]'
                    )}
                />
            )}
            {text}
        </a>
    )
}

export default PrimaryButton
