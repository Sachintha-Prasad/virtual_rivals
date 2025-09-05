import React from 'react'

type SectionHeaderProps = {
    title: string
    description: string
}

const SectionHeader = ({ title, description }: SectionHeaderProps) => {
    return (
        <div className="flex flex-col items-center gap-4 text-center md:gap-8">
            <h2 className="text-4xl font-bold uppercase">{title}</h2>
            <p className="max-w-[900px] text-xl font-medium">{description}</p>
        </div>
    )
}

export default SectionHeader
