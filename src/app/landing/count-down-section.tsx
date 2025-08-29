'use client'

import LandingPageLayout from '@/components/layouts/landing-page-layout'
import React, { useCallback, useEffect, useState } from 'react'

type CountdownProps = {
    targetDate: string | Date
}

const CountDownSection = ({ targetDate }: CountdownProps) => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    })
    const [mounted, setMounted] = useState(false)

    const calculateTimeLeft = useCallback(() => {
        const difference = +new Date(targetDate) - +new Date()
        return {
            days: Math.max(Math.floor(difference / (1000 * 60 * 60 * 24)), 0),
            hours: Math.max(
                Math.floor((difference / (1000 * 60 * 60)) % 24),
                0
            ),
            minutes: Math.max(Math.floor((difference / 1000 / 60) % 60), 0),
            seconds: Math.max(Math.floor((difference / 1000) % 60), 0),
        }
    }, [targetDate])

    useEffect(() => {
        setMounted(true) // ensure we only render countdown on client
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft())
        }, 1000)
        return () => clearInterval(timer)
    }, [calculateTimeLeft])

    const formatNumber = (num: number) => num.toString().padStart(2, '0')

    if (!mounted) return null

    return (
        <section
            id="countdown"
            className="relative bg-[url('/images/countdown-bg.svg')] bg-cover bg-no-repeat"
        >
            <div className="absolute top-1/2 left-1/2 -z-10 h-full w-full max-w-[400px] -translate-x-1/2 -translate-y-1/2 bg-[url('/images/countdown-skull.svg')] bg-contain bg-center bg-no-repeat"></div>

            <LandingPageLayout>
                <div className="flex flex-col items-center gap-12 px-4 md:gap-16">
                    {/* Header */}
                    <div className="flex flex-col items-center gap-4 text-center md:gap-8">
                        <h2 className="text-4xl font-bold uppercase">
                            Countdown to Rivalry
                        </h2>
                        <p className="max-w-[900px] text-xl font-medium">
                            The wait is almost over. The ultimate inter-faculty
                            gaming battle begins soon. Stay sharp, gather your
                            squad, and get ready to enter the arena.
                        </p>
                    </div>

                    {/* Countdown */}
                    <div className="flex flex-col items-center gap-6 text-center md:gap-8">
                        <h2 className="text-4xl font-bold uppercase">
                            Time left until the battle begins
                        </h2>

                        <div className="flex flex-wrap justify-center gap-6 md:gap-16">
                            {['days', 'hours', 'minutes', 'seconds'].map(
                                (unit) => (
                                    <div
                                        key={unit}
                                        className="flex flex-col items-center"
                                    >
                                        <p className="text-primary-red text-[120px] font-bold">
                                            {formatNumber(
                                                timeLeft[
                                                    unit as keyof typeof timeLeft
                                                ]
                                            )}
                                        </p>
                                        <p className="text-primary-red text-2xl font-bold uppercase">
                                            {unit}
                                        </p>
                                    </div>
                                )
                            )}
                        </div>
                    </div>

                    {/* Competition Date */}
                    <p className="max-w-[820px] text-center text-2xl font-medium">
                        Competition Starts:{' '}
                        {new Date(targetDate).toLocaleDateString(undefined, {
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric',
                        })}
                    </p>
                </div>
            </LandingPageLayout>
        </section>
    )
}

export default CountDownSection
