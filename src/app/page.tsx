import Header from "@/components/common/header"
import AboutUsSection from "@/app/landing/about-us-section"
import HeroSection from "@/app/landing/hero-section"
import React from "react"

const LandingPage = () => {
    return (
        <>
            <Header />

            <main>
                <HeroSection />
                <AboutUsSection />
            </main>
        </>
    )
}

export default LandingPage
