import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const CitizenSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    trees: [{
        type: Schema.Types.ObjectId,
        ref: 'Tree'
    }]
});