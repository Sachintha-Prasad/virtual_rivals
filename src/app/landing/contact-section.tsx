'use client'

import GradientInput from '@/components/common/gradient-input'
import GradientTextarea from '@/components/common/gradient-textarea'
import PrimaryButton from '@/components/common/primary-button'
import LandingPageLayout from '@/components/layouts/landing-page-layout'
import Image from 'next/image'
import React, { useRef, useState } from 'react'
import emailjs from 'emailjs-com'
import toast from 'react-hot-toast'

const ContactSection = () => {
    const formRef = useRef<HTMLFormElement>(null)
    const [loading, setLoading] = useState(false)

    // simple validation
    const validateForm = () => {
        if (!formRef.current) return false
        const formData = new FormData(formRef.current)

        const name = formData.get('name')?.toString().trim()
        const email = formData.get('email')?.toString().trim()
        const phone = formData.get('phone')?.toString().trim()
        const message = formData.get('message')?.toString().trim()

        if (!name || !email || !phone || !message) {
            toast.error('Please fill in all required fields.')
            return false
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(email)) {
            toast.error('Please enter a valid email address.')
            return false
        }

        const phoneRegex = /^[0-9+\-\s]{7,15}$/
        if (!phoneRegex.test(phone)) {
            toast.error('Please enter a valid phone number.')
            return false
        }

        return true
    }

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!validateForm()) return
        if (!formRef.current) return

        setLoading(true)

        emailjs
            .sendForm(
                'YOUR_SERVICE_ID',
                'YOUR_TEMPLATE_ID',
                formRef.current,
                'YOUR_PUBLIC_KEY'
            )
            .then(
                () => {
                    toast.success('Message sent successfully')
                    setLoading(false)
                    formRef.current?.reset()
                },
                (error) => {
                    console.error(error.text)
                    toast.error('Failed to send message')
                    setLoading(false)
                }
            )
    }

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
                            ref={formRef}
                            onSubmit={sendEmail}
                            className="flex h-full w-full flex-col justify-between gap-4"
                        >
                            <div className="flex w-full flex-col gap-4">
                                <GradientInput
                                    name="name"
                                    placeholder="Name*"
                                    iconSrc={'/icons/user-group-icon.svg'}
                                />
                                <GradientInput
                                    name="email"
                                    placeholder="Email Address*"
                                    iconSrc={'/icons/envelope-icon.svg'}
                                />
                                <GradientInput
                                    name="phone"
                                    placeholder="Contact Number*"
                                    iconSrc={'/icons/phone-icon.svg'}
                                />
                                <GradientTextarea
                                    name="message"
                                    placeholder="Note*"
                                    iconSrc={'/icons/pen-icon.svg'}
                                />
                            </div>

                            <div className="mt-3 ml-6">
                                <PrimaryButton
                                    text="Submit Now"
                                    loadingText="Submiting..."
                                    iconSrc="/icons/send-icon.svg"
                                    loading={loading}
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
