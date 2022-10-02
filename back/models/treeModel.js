import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const TreeSchema = new Schema({
    species: {
        type: String,
        required: true
    },
    height: {
        type: Number,
        required: true
    },
    yearPlanted: {
        type: Number,
        default: 2022,
        required: true
    },
    circumference: {
        type: Number,
        required: true
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});
