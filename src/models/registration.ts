import { Schema, model, models } from 'mongoose'

const playerSchema = new Schema({
    name: { type: String, required: true },
})

const registrationSchema = new Schema(
    {
        game: { type: String, required: true },
        teamName: { type: String, required: true },
        email: { type: String, required: true },
        contactNumber: { type: String, required: true },
        players: [playerSchema],
    },
    { timestamps: true }
)

export default models.Registration || model('Registration', registrationSchema)
