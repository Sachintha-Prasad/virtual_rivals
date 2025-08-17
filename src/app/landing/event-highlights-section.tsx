import LandingPageLayout from '@/components/layouts/landing-page-layout'
import Image from 'next/image'
import React from 'react'

const eventHighlights = [
    {
        id: 1,
        title: 'Ultimate Bragging Rights',
        description:
            'Win the championship title and earn recognition as the top gaming team in the university.',
        icon: '/icons/event-highlights-icons/cup-icon.svg',
    },
    {
        id: 2,
        title: 'Thrilling Game Lineup',
        description:
            'Compete in a mix of tactical shooters, sports, and racing games for nonstop excitement.',
        icon: '/icons/event-highlights-icons/target-icon.svg',
    },
    {
        id: 3,
        title: 'Community & Spirit',
        description:
            'Meet new people, share strategies, and celebrate the love for gaming together.',
        icon: '/icons/event-highlights-icons/user-group-icon.svg',
    },
    {
        id: 4,
        title: 'Organised by Experts',
        description:
            'Professionally planned and managed by the Society of Computer Sciences, ensuring a smooth event.',
        icon: '/icons/event-highlights-icons/light-icon.svg',
    },
]

const EventHighlightsSection = () => {
    return (
        <section className="bg-linear-to-r from-[#6B0113] via-[#D10225] to-[#6B0113]">
            <LandingPageLayout>
                <div className="grid grid-cols-4 gap-8">
                    {eventHighlights.map((data) => (
                        <div key={data.id} className="flex flex-col gap-8">
                            <Image
                                src={data.icon}
                                alt={data.title}
                                width={50}
                                height={50}
                                className="invert-100"
                            />
                            <div className="flex flex-col items-start gap-2">
                                <h3 className="text-[16px] font-bold uppercase">
                                    {data.title}
                                </h3>
                                <p className="text-[12px]">
                                    {data.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </LandingPageLayout>
        </section>
    )
}

export default EventHighlightsSection
