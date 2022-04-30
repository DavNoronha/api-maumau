import mongoose from "mongoose";

const playerSchema = mongoose.Schema(
    {
        id: {type: String},
        name: {type: String, required: true},
        points: {type: Number, required: true},
        rounds: {type: Array}
    }
)

const players = mongoose.model('player', playerSchema)

export default players