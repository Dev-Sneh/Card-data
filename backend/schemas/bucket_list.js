import mongoose from 'mongoose';

export const bucket_list = new mongoose.Schema({
    bucketName: {
        type: String,
        required: true
    },
    date: { type: Date, default: Date.now },
    hidden: {
        type: Boolean,
        default: false,
    },
    cards: Array,
})
