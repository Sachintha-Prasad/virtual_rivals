import Header from '@/components/common/header'
import AboutUsSection from '@/app/landing/about-us-section'
import HeroSection from '@/app/landing/hero-section'
import React from 'react'
import CountDownSection from './landing/count-down-section'
import RulesSection from './landing/rules-section'
import GamesSection from './landing/games-section'

const LandingPage = () => {
    return (
        <div className="cursor-none">
            <div>
                <Header />
            </div>

            <main>
                <HeroSection />
                <AboutUsSection />
                <CountDownSection targetDate={'2025-09-15'} />
                <GamesSection />
                <RulesSection />
            </main>
        </div>
    )
}

export default LandingPage
