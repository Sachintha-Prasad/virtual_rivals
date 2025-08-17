import LandingPageLayout from '@/components/layouts/landing-page-layout'
import React from 'react'

const CountDownSection = () => {
    return (
        <section id="countdown">
            <LandingPageLayout>
                <div className="flex flex-col items-center gap-16">
                    <div className="flex flex-col items-center gap-8">
                        <h2 className="text-primary-red text-center text-[26px] font-bold uppercase">
                            Countdown to Rivalry
                        </h2>
                        <p className="max-w-[820px] text-center text-[14px] font-medium">
                            The wait is almost over. The ultimate inter-faculty
                            gaming battle begins soon. Stay sharp, gather your
                            squad, and get ready to enter the arena.
                        </p>
                    </div>

                    <div className="flex flex-col items-center gap-8">
                        <h2 className="text-center text-[26px] font-bold uppercase">
                            Time left until the battle begins:
                        </h2>

                        <div className="flex gap-16">
                            <div className="flex flex-col items-center gap-3">
                                <p className="text-stroke text-stroke-lg text-[96px] font-bold">
                                    05
                                </p>
                                <p className="text-[24px] font-bold uppercase">
                                    days
                                </p>
                            </div>
                            <div className="flex flex-col items-center gap-3">
                                <p className="text-stroke text-stroke-lg text-[96px] font-bold">
                                    15
                                </p>
                                <p className="text-[24px] font-bold uppercase">
                                    hours
                                </p>
                            </div>
                            <div className="flex flex-col items-center gap-3">
                                <p className="text-stroke text-stroke-lg text-[96px] font-bold">
                                    48
                                </p>
                                <p className="text-[24px] font-bold uppercase">
                                    minutes
                                </p>
                            </div>
                        </div>
                    </div>

                    <p className="max-w-[820px] text-center font-medium">
                        Competition Starts: 10th September 2025
                    </p>
                </div>
            </LandingPageLayout>
        </section>
    )
}

export default CountDownSection
