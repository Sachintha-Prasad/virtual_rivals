'use client'

import GradientInput from '@/components/common/gradient-input'
import PrimaryButton from '@/components/common/primary-button'
import SectionHeader from '@/components/common/section-header'
import GameDropdown from '@/components/landing/registration-section/game-dropdown'
import LandingPageLayout from '@/components/layouts/landing-page-layout'
import React, { useState } from 'react'

const TeamRegistrationSection = () => {
    const [selectedGame, setSelectedGame] = useState<string>('')
    const [playerCount, setPlayerCount] = useState<number>(0)

    const handleGameSelect = (game: string) => {
        setSelectedGame(game)

        if (game === 'cod4') setPlayerCount(5)
        else if (game === 'pubg') setPlayerCount(4)
        else setPlayerCount(0)
    }

    return (
        <section
            id="register"
            className="relative bg-[url('/images/countdown-bg.svg')] bg-cover bg-no-repeat"
        >
            <div className="absolute inset-0 -z-10 bg-[url('/images/registration-bg.svg')] bg-size-[100%] bg-top bg-no-repeat py-12 sm:py-32 lg:bg-bottom"></div>

            <LandingPageLayout>
                <div className="flex flex-col items-center gap-12">
                    <SectionHeader
                        title="Enter the arena"
                        description="Gather your squad, choose your game, and represent your faculty in the ultimate rivalry. This is your chance to play with pride and fight for glory."
                    />

                    <form className="flex w-full max-w-[900px] flex-col gap-6">
                        {/* Game Selection */}
                        <div className="flex flex-col gap-2">
                            <GameDropdown
                                selected={selectedGame}
                                onSelect={handleGameSelect}
                            />
                        </div>

                        {/* Team Details */}
                        <div className="flex w-full flex-col gap-4">
                            <p className="text-xl font-semibold tracking-widest uppercase">
                                Team&apos;s details
                            </p>
                            <GradientInput
                                placeholder="Enter Team Name*"
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
                        </div>

                        {/* Players Details */}
                        {playerCount > 0 && (
                            <div className="flex w-full flex-col gap-4">
                                <p className="text-xl font-semibold tracking-widest uppercase">
                                    Players&apos; details
                                </p>
                                {Array.from({ length: playerCount }).map(
                                    (_, i) => (
                                        <GradientInput
                                            key={i}
                                            placeholder={`Enter Player ${String(
                                                i + 1
                                            ).padStart(2, '0')}*`}
                                            iconSrc={'/icons/user-icon.svg'}
                                        />
                                    )
                                )}
                            </div>
                        )}

                        {/* Submit Button */}
                        <div className="mt-6 ml-6">
                            <PrimaryButton
                                text="register & rival"
                                iconSrc={'/icons/fire-icon.svg'}
                            />
                        </div>
                    </form>
                </div>
            </LandingPageLayout>
        </section>
    )
}

export default TeamRegistrationSection
