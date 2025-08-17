import React from 'react'
import LandingPageLayout from '../../components/layouts/landing-page-layout'
import Image from 'next/image'
import ParticleWave from '../../components/animation/particle-wave'
import CustomCursor from '@/components/animation/custom-cursor'

const HeroSection = () => {
    return (
        <section id="home" className="relative min-h-screen">
            <div className="absolute -z-10 min-h-[90vh] w-full bg-[url('/hero-flag-bg.svg')] bg-contain bg-top bg-no-repeat"></div>
            <div className="absolute -bottom-12 -z-20 h-full w-full">
                <ParticleWave />
            </div>

            <CustomCursor />

            <LandingPageLayout>
                <div className="flex min-h-[80vh] w-full flex-col items-center justify-center gap-6">
                    <Image
                        src={'/hero-img.svg'}
                        alt="vr-logo"
                        width={380}
                        height={150}
                    />

                    <div className="flex flex-col items-center gap-3 text-center">
                        <h1 className="text-stroke text-[26px] font-bold uppercase">
                            The Ultimate Inter-Faculty Gaming Showdown
                        </h1>
                        <p className="text-[14px] font-medium">
                            Battle for glory, pride, and the championship crown.
                            This is your arena.
                        </p>
                    </div>

                    <a
                        href="#countdown"
                        className="bg-primary-red flex cursor-pointer gap-3 rounded-full p-4 text-[14px] font-semibold tracking-widest uppercase shadow-[0px_0px_48px_0px_#D10225BF] backdrop-blur-[17.4px]"
                    >
                        <Image
                            src={'/game-console-icon.svg'}
                            alt="console icon"
                            width={30}
                            height={18}
                        />
                        Join the rivalry
                    </a>
                </div>
            </LandingPageLayout>
        </section>
    )
}

export default HeroSection
