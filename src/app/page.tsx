import Header from '@/components/common/header'
import AboutUsSection from '@/app/landing/about-us-section'
import HeroSection from '@/app/landing/hero-section'
import React from 'react'
import CountDownSection from './landing/count-down-section'
import RulesSection from './landing/rules-section'
import EventHighlightsSection from './landing/event-highlights-section'
import GamesSection from './landing/games-section'

const LandingPage = () => {
    return (
        <div className="cursor-none">
            <Header />

            <main>
                <HeroSection />
                <AboutUsSection />
                <CountDownSection />
                <GamesSection />
                <EventHighlightsSection />
                <RulesSection />
            </main>
        </div>
    )
}

export default LandingPage
