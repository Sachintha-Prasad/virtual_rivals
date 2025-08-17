import LandingPageLayout from '@/components/layouts/landing-page-layout'
import Image from 'next/image'
import React from 'react'

const RulesSection = () => {
    return (
        <section
            id="rules"
            className="bg-[url('/images/rules-bg.svg')] bg-size-[100%] bg-top bg-no-repeat"
        >
            <LandingPageLayout>
                <div className="flex flex-col items-center gap-8">
                    <h2 className="text-primary-red text-[26px] font-bold uppercase">
                        Play Fair. Play Hard.
                    </h2>
                    <p className="max-w-[820px] text-center text-[14px] font-medium">
                        Every rivalry is built on fair play. To keep the
                        competition exciting and equal for everyone, all players
                        must follow the official rules and guidelines. From team
                        eligibility to gameplay conduct, these regulations
                        ensure a smooth, professional, and enjoyable experience
                        for all faculties.
                    </p>
                    <a
                        href="#countdown"
                        className="bg-primary-red flex cursor-pointer gap-3 rounded-full p-4 text-[14px] font-semibold tracking-widest uppercase shadow-[0px_0px_48px_0px_#D10225BF] backdrop-blur-[17.4px]"
                    >
                        <Image
                            src={'/icons/game-console-icon.svg'}
                            alt="console icon"
                            width={30}
                            height={18}
                        />
                        show rules
                    </a>
                </div>
            </LandingPageLayout>
        </section>
    )
}

export default RulesSection
