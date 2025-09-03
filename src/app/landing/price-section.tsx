'use client'
import React from 'react'
import Image from 'next/image'
import LandingPageLayout from '@/components/layouts/landing-page-layout'

const PriceSection = () => {
    return (
        <div>
            <LandingPageLayout>
                {/* Header */}
                <div className="mb-12 flex flex-col items-center gap-4 text-center md:gap-8">
                    <h2 className="text-4xl font-bold uppercase">
                        Glory awaits the champions
                    </h2>
                    <p className="max-w-[900px] text-[14px] font-medium">
                        Beyond the competition, Virtual Rival rewards skill,
                        teamwork, and spirit. From trophies and cash prizes to
                        medals and special titles, every victory is a mark of
                        pride and excellence.
                    </p>
                </div>

                {/* Price Image */}
                <div className="flex justify-center">
                    <Image
                        src="/images/price.png"
                        alt="Tournament Prizes"
                        width={1200}
                        height={500}
                        className="h-auto max-w-full"
                    />
                </div>
                {/* Days Section */}
                <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                    {/* Registration Open */}
                    <div className="group relative h-[273px] w-auto cursor-pointer items-center justify-start rounded-lg border-b-2 border-l-2 border-[#580110] bg-[#15151C] p-[20px] transition-all duration-500 hover:skew-y-1">
                        <div className="absolute top-0 right-0 h-full w-full rounded-lg border-t-2 border-r-2 border-[#580110] transition-opacity duration-300 group-hover:opacity-0"></div>
                        <div className="absolute top-0 right-0 h-full w-full rounded-lg border-t-2 border-r-2 border-[#580110] opacity-0 transition-opacity delay-1000 duration-300 group-hover:opacity-100"></div>
                        <Image
                            src="/images/open.png"
                            alt=""
                            width={50}
                            height={50}
                        />
                        <div className="mt-24">
                            <h3 className="mb-2 font-bold uppercase">
                                Registration Open
                            </h3>
                            <p>2025-08-30</p>
                        </div>
                    </div>
                    {/* Registration Close */}
                    <div className="group relative h-[273px] w-auto cursor-pointer items-center justify-start rounded-lg border-b-2 border-l-2 border-[#580110] bg-[#15151C] p-[20px] transition-all duration-500 hover:skew-y-1">
                        <div className="absolute top-0 right-0 h-full w-full rounded-lg border-t-2 border-r-2 border-[#580110] transition-opacity duration-300 group-hover:opacity-0"></div>
                        <div className="absolute top-0 right-0 h-full w-full rounded-lg border-t-2 border-r-2 border-[#580110] opacity-0 transition-opacity delay-1000 duration-300 group-hover:opacity-100"></div>{' '}
                        <Image
                            src="/images/delete_user.png"
                            alt=""
                            width={50}
                            height={50}
                        />
                        <div className="mt-24">
                            <h3 className="mb-2 font-bold uppercase">
                                Registration Close
                            </h3>
                            <p>2025-08-30</p>
                        </div>
                    </div>
                    {/* Team Draw */}
                    <div className="group relative h-[273px] w-auto cursor-pointer items-center justify-start rounded-lg border-b-2 border-l-2 border-[#580110] bg-[#15151C] p-[20px] transition-all duration-500 hover:skew-y-1">
                        <div className="absolute top-0 right-0 h-full w-full rounded-lg border-t-2 border-r-2 border-[#580110] transition-opacity duration-300 group-hover:opacity-0"></div>
                        <div className="absolute top-0 right-0 h-full w-full rounded-lg border-t-2 border-r-2 border-[#580110] opacity-0 transition-opacity delay-1000 duration-300 group-hover:opacity-100"></div>{' '}
                        <Image
                            src="/images/billboard.png"
                            alt=""
                            width={50}
                            height={50}
                        />
                        <div className="mt-24">
                            <h3 className="mb-2 font-bold uppercase">
                                Team Draw & Match Schedule
                            </h3>
                            <p>2025-08-30</p>
                        </div>
                    </div>
                    {/* Event Day */}
                    <div className="group relative h-[273px] w-auto cursor-pointer items-center justify-start rounded-lg border-b-2 border-l-2 border-[#580110] bg-[#15151C] p-[20px] transition-all duration-500 hover:skew-y-1">
                        <div className="absolute top-0 right-0 h-full w-full rounded-lg border-t-2 border-r-2 border-[#580110] transition-opacity duration-300 group-hover:opacity-0"></div>
                        <div className="absolute top-0 right-0 h-full w-full rounded-lg border-t-2 border-r-2 border-[#580110] opacity-0 transition-opacity delay-500 duration-300 group-hover:opacity-100"></div>{' '}
                        <Image
                            src="/images/calendar.png"
                            alt=""
                            width={50}
                            height={50}
                        />
                        <div className="mt-24">
                            <h3 className="mb-2 font-bold uppercase">
                                Virtual Rival Event Day
                            </h3>
                            <p>2025-08-30</p>
                        </div>
                    </div>
                </div>
            </LandingPageLayout>
        </div>
    )
}

export default PriceSection
