import mongoose, { Schema, model, Document } from 'mongoose'
import Exam from './examModel'

interface Tyt {
    
    math: {
        true: number,
        false: number,
        emptyAnswers: number,
        totalNet: number,
    },
    science: {
        true: number,
        false: number,
        emptyAnswers: number,
        totalNet: number,
    },
    turkish: {
        true: number,
        false: number,
        emptyAnswers: number,
        totalNet: number,
    },
    social: {
        true: number,
        false: number,
        emptyAnswers: number,
        totalNet: number,
    }
}

interface TytDocument extends Tyt, Document {
    _id: Schema.Types.ObjectId;
}

const TytSchema: Schema<TytDocument> = new Schema({
    math: {
        true: {
            type: Number,
            required: true
        },
        false: {
            type: Number,
            required: true
        },
        emptyAnswers: {
            type: Number,
            required: true
        },
        totalNet: {
            type: Number,
            required: true
        }
    },
    science: {
        true: {
            type: Number,
            required: true
        },
        false: {
            type: Number,
            required: true
        },
        emptyAnswers: {
            type: Number,
            required: true
        },
        totalNet: {
            type: Number,
            required: true
        }
    },
    turkish: {
        true: {
            type: Number,
            required: true
        },
        false: {
            type: Number,
            required: true
        },
        emptyAnswers: {
            type: Number,
            required: true
        },
        totalNet: {
            type: Number,
            required: true
        }
    },
    social: {
        true: {
            type: Number,
            required: true
        },
        false: {
            type: Number,
            required: true
        },
        emptyAnswers: {
            type: Number,
            required: true
        },
        totalNet: {
            type: Number,
            required: true
        }
    }
})


const Tyt = Exam.discriminator<TytDocument>('tyt', TytSchema);

export default Tyt;