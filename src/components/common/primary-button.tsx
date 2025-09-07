'use client'
import React, { ButtonHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'
import Image, { StaticImageData } from 'next/image'

type PrimaryButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    text: string
    loadingText?: string
    href?: string
    iconSrc?: string | StaticImageData
    size?: 'small' | 'base' | 'large'
    isGlow?: boolean
    loading?: boolean
    onClick?: () => void
}

const PrimaryButton = ({
    text,
    loadingText,
    href,
    iconSrc,
    size = 'base',
    isGlow,
    loading = false,
    onClick,
    ...props
}: PrimaryButtonProps) => {
    const content = (
        <>
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

            {loading ? (
                <span className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
            ) : (
                iconSrc && (
                    <Image
                        src={iconSrc}
                        alt="icon"
                        width={42}
                        height={18}
                        className={cn(
                            size === 'base' && 'max-w-[18px] lg:max-w-[24px]',
                            size === 'large' && 'max-w-[24px] sm:max-w-[42px]'
                        )}
                    />
                )
            )}
            {loading ? loadingText : text}
        </>
    )

    if (href) {
        return (
            <a
                href={href}
                onClick={loading ? () => {} : onClick}
                className={cn(
                    'bg-primary-red relative flex w-fit cursor-pointer items-center gap-3 px-4 font-semibold tracking-widest uppercase',
                    size === 'small' && 'py-2 text-sm',
                    size === 'base' && 'py-3 text-sm lg:text-lg',
                    size === 'large' && 'py-4 text-lg sm:text-xl lg:text-2xl',
                    isGlow &&
                        'shadow-[0px_0px_48px_0px_#D10225BF] backdrop-blur-[17.4px]',
                    loading && 'pointer-events-none opacity-70'
                )}
            >
                {content}
            </a>
        )
    }

    return (
        <button
            onClick={loading ? undefined : onClick}
            disabled={loading}
            {...props}
            className={cn(
                'bg-primary-red relative flex w-fit items-center gap-3 px-4 font-semibold tracking-widest uppercase',
                size === 'small' && 'py-2 text-sm',
                size === 'base' && 'py-3 text-sm sm:text-lg',
                size === 'large' && 'py-4 text-sm sm:text-2xl',
                isGlow &&
                    'shadow-[0px_0px_48px_0px_#D10225BF] backdrop-blur-[17.4px]',
                loading && 'cursor-not-allowed opacity-70'
            )}
        >
            {content}
        </button>
    )
}

export default PrimaryButton
