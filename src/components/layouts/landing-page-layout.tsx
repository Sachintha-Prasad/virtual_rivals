import React from "react"

type LandingPageLayoutProps = {
    children: React.ReactNode
}

const LandingPageLayout = ({ children }: LandingPageLayoutProps) => {
    return (
        <div className="max-w-full px-[160px] mx-auto py-[80px]">
            {children}
        </div>
    )
}

export default LandingPageLayout
