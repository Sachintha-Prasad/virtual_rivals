import React from 'react'
import LandingPageLayout from '../../components/layouts/landing-page-layout'
import Image from 'next/image'

const AboutUsSection = () => {
    return (
        <section
            id="about-us"
            className="bg-conic-180 from-[#A2021D] to-[#6B0113] to-50%"
        >
            <LandingPageLayout>
                <div className="flex flex-col items-center gap-12 text-[#000000]">
                    <h2 className="text-center text-[26px] font-bold">
                        Where Skill Meets Strategy
                    </h2>

                    <div className="flex w-full justify-between gap-[96px]">
                        <p className="flex max-w-[432px] flex-1 flex-col space-y-6 text-justify text-[14px] font-medium">
                            <span>
                                Virtual Rival is an electrifying inter-faculty
                                eSports competition hosted by the Society of
                                Computer Sciences, Sabaragamuwa University of
                                Sri Lanka.
                            </span>
                            <span>
                                This annual gaming showdown is more than just a
                                battle. It’s a celebration of teamwork,
                                strategy, and the competitive spirit of our
                                university. Whether you’re a casual challenger
                                or a competitive pro, Virtual Rival is your
                                chance to rise above, represent your faculty,
                                and make history.
                            </span>
                        </p>

                        <Image
                            src={'/about-us-img.svg'}
                            alt="about us image"
                            width={432}
                            height={175}
                            className="w-full max-w-[432px]"
                        />
                    </div>
                </div>
            </LandingPageLayout>
        </section>
    )
}

export default AboutUsSection
