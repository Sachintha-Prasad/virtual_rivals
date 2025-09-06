import GradientInput from '@/components/common/gradient-input'
import GradientTextarea from '@/components/common/gradient-textarea'
import PrimaryButton from '@/components/common/primary-button'
import LandingPageLayout from '@/components/layouts/landing-page-layout'
import Image from 'next/image'
import React from 'react'

const ContactSection = () => {
    return (
        <section id="contact">
            <LandingPageLayout>
                <div className="grid grid-cols-1 gap-12 sm:grid-cols-2">
                    <div className="w-full">
                        <Image
                            src={'/images/contact-img.svg'}
                            alt="contact image"
                            width={600}
                            height={400}
                            className="w-full"
                        />
                    </div>

                    <div className="flex w-full flex-1 flex-col gap-6">
                        <div>
                            <h2 className="text-4xl font-bold tracking-widest uppercase">
                                Got Questions?
                            </h2>
                            <p>
                                We’re here to help you with registrations,
                                rules, or event details. Reach out and we’ll get
                                back to you soon.
                            </p>
                        </div>

                        <form
                            action=""
                            className="flex h-full w-full flex-col justify-between gap-4"
                        >
                            <div className="flex w-full flex-col gap-4">
                                <GradientInput
                                    placeholder="Name*"
                                    iconSrc={'/icons/user-group-icon.svg'}
                                />
                                <GradientInput
                                    placeholder="Email Address*"
                                    iconSrc={'/icons/envelope-icon.svg'}
                                />
                                <GradientInput
                                    placeholder="Contact Number*"
                                    iconSrc={'/icons/phone-icon.svg'}
                                />
                                <GradientTextarea
                                    placeholder="Note*"
                                    iconSrc={'/icons/pen-icon.svg'}
                                />
                            </div>

                            <div className="mt-3 ml-6">
                                <PrimaryButton
                                    text="submit now"
                                    iconSrc={'/icons/send-icon.svg'}
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </LandingPageLayout>
        </section>
    )
}

export default ContactSection
