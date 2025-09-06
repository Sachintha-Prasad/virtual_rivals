'use client'
import React, { ButtonHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'
import Image, { StaticImageData } from 'next/image'

type PrimaryButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    text: string
    href?: string
    iconSrc?: string | StaticImageData
    size?: 'small' | 'base' | 'large'
    isGlow?: boolean
    onClick?: () => void
}

const PrimaryButton = ({
    text,
    href,
    iconSrc,
    size = 'base',
    isGlow,
    onClick,
}: PrimaryButtonProps) => {
    return (
        <a
            href={href}
            onClick={onClick}
            className={cn(
                'bg-primary-red relative flex w-fit cursor-pointer items-center gap-3 px-4 font-semibold tracking-widest uppercase',
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

            {iconSrc && (
                <Image
                    src={iconSrc}
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
