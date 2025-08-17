'use client'
import React from 'react'

type HeaderLayoutProps = {
    children: React.ReactNode
}

const HeaderLayout = ({ children }: HeaderLayoutProps) => {
    return (
        <div className="fixed z-50 mx-auto w-full max-w-full bg-gradient-to-b from-black via-black/35 to-transparent px-[160px] py-9">
            {children}
        </div>
    )
}

export default HeaderLayout
