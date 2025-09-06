/* eslint-disable @typescript-eslint/no-explicit-any */
import dbConnect from '@/lib/mongodb'
import registration from '@/models/registration'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
    try {
        await dbConnect()
        const body = await req.json()

        const { game, teamName, email, contactNumber, players } = body

        if (!game || !teamName || !email || !contactNumber || !players) {
            return NextResponse.json(
                { success: false, message: 'Missing required fields' },
                { status: 400 }
            )
        }

        // Save to MongoDB
        const newRegistration = await registration.create({
            game,
            teamName,
            email,
            contactNumber,
            players,
        })

        // Update Google Sheet
        // await appendToSheet([
        //     new Date().toISOString(),
        //     game,
        //     teamName,
        //     email,
        //     contactNumber,
        //     ...players.map((p: any) => p.name),
        // ])

        return NextResponse.json({ success: true, data: newRegistration })
    } catch (error: any) {
        console.error(error)
        return NextResponse.json(
            { success: false, message: 'Server error' },
            { status: 500 }
        )
    }
}
