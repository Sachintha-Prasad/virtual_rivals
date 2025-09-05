import React from 'react'
import Header from '@/components/common/header'
import HeroSection from './landing/hero-section'
import AboutUsSection from './landing/about-us-section'
import CountDownSection from './landing/count-down-section'
import GamesSection from './landing/games-section'
import RulesSection from './landing/rules-section'
import PriceSection from './landing/price-section'
import TrailerSection from './landing/trailer-section'

const LandingPage = () => {
    return (
        <div className="cursor-none">
            <div>
                <Header />
            </div>

            <main>
                <HeroSection />
                <AboutUsSection />
                <CountDownSection targetDate={'2025-09-17'} />
                <GamesSection />
                <RulesSection />
                <TrailerSection />
                <PriceSection />
            </main>
        </div>
    )
}

export default LandingPage
