import React from 'react'

type LandingPageLayoutProps = {
    children: React.ReactNode
}

const LandingPageLayout = ({ children }: LandingPageLayoutProps) => {
    return (
        <div className="mx-auto max-w-full px-[160px] py-[80px]">
            {children}
        </div>
    )
}

export default LandingPageLayout
