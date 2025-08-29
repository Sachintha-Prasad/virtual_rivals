import React from 'react'

type LandingPageLayoutProps = {
    children: React.ReactNode
}

const LandingPageLayout = ({ children }: LandingPageLayoutProps) => {
    return (
        <div className="mx-auto max-w-full px-6 py-[80px] lg:px-[160px]">
            {children}
        </div>
    )
}

export default LandingPageLayout
