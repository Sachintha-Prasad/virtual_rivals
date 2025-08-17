import Header from '@/components/common/header'
import AboutUsSection from '@/app/landing/about-us-section'
import HeroSection from '@/app/landing/hero-section'
import React from 'react'
import CountDownSection from './landing/count-down-section'

const LandingPage = () => {
    return (
        <>
            <Header />

            <main>
                <HeroSection />
                <AboutUsSection />
                <CountDownSection />
            </main>
        </>
    )
}

export default LandingPage
