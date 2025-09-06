'use client'
import Image, { StaticImageData } from 'next/image'
import React, { InputHTMLAttributes } from 'react'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    placeholder: string
    iconSrc: string | StaticImageData
}

const GradientInput = ({ placeholder, iconSrc, ...rest }: InputProps) => {
    return (
        <div className="group relative flex rounded-lg pl-12">
            <div className="from-primary-red/50 group-focus-within:from-primary-red/50 group-focus-within:to-primary-red/100 absolute inset-0 rounded-lg border border-none border-transparent bg-gradient-to-r to-transparent bg-[length:200%_200%] transition-all duration-700 ease-in-out"></div>

            <div className="absolute inset-0.5 rounded-lg bg-[#15151C]"></div>

            <Image
                src={iconSrc}
                alt={placeholder}
                width={24}
                height={24}
                className="absolute top-1/2 left-4 z-10 -translate-y-1/2"
            />

            <input
                placeholder={placeholder}
                className="relative z-10 w-full bg-transparent px-6 py-5 text-lg text-white outline-none"
                {...rest}
            />
        </div>
    )
}

export default GradientInput
