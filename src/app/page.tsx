import Header from '@/components/common/header'
import AboutUsSection from '@/app/landing/about-us-section'
import HeroSection from '@/app/landing/hero-section'
import React from 'react'
import CountDownSection from './landing/count-down-section'

const LandingPage = () => {
    return (
        <div className="cursor-none">
            <Header />

            <main>
                <HeroSection />
                <AboutUsSection />
                <CountDownSection />
            </main>
        </div>
    )
}

export default LandingPage
