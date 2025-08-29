import React from 'react'
import LandingPageLayout from '../../components/layouts/landing-page-layout'
import Image from 'next/image'

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

const AboutUsSection = () => {
    return (
        <section id="about-us" className="bg-background">
            <LandingPageLayout>
                <div className="flex gap-12">
                    <Image
                        src={'/images/about-bg.svg'}
                        alt="about us image"
                        width={432}
                        height={175}
                        className="w-full"
                    />

                    <div className="flex flex-col gap-16">
                        <div className="flex flex-col gap-8">
                            <h2 className="text-4xl font-bold">
                                Where Skill Meets Strategy
                            </h2>
                            <div className="flex w-full justify-between gap-[96px]">
                                <p className="flex flex-1 flex-col space-y-6 text-justify text-lg font-medium">
                                    <span>
                                        Virtual Rival is an electrifying
                                        inter-faculty eSports competition hosted
                                        by the Society of Computer Sciences,
                                        Sabaragamuwa University of Sri Lanka.
                                    </span>
                                    <span>
                                        This annual gaming showdown is more than
                                        just a battle. It’s a celebration of
                                        teamwork, strategy, and the competitive
                                        spirit of our university. Whether you’re
                                        a casual challenger or a competitive
                                        pro, Virtual Rival is your chance to
                                        rise above, represent your faculty, and
                                        make history.
                                    </span>
                                    <span>
                                        Organized with professionalism and
                                        fairness, Virtual Rival connects
                                        faculties, builds community, and crowns
                                        the true champions of our university.
                                    </span>
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                            {eventHighlights.map((data) => (
                                <div
                                    key={data.id}
                                    className="flex flex-col gap-8"
                                >
                                    <Image
                                        src={data.icon}
                                        alt={data.title}
                                        width={50}
                                        height={50}
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
                    </div>
                </div>
            </LandingPageLayout>
        </section>
    )
}

export default AboutUsSection
