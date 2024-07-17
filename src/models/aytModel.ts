import mongoose, { Schema, Document, Model } from "mongoose";
import Exam from "./examModel";

interface Ayt {
    aytField: {
        type: string,
        enum: ['say', 'ea', `soz`],
    },

    // Say ve Ea icin ortak alanlar
    math?: {
        true: number,
        false: number,
        emptyAnswers: number,
        totalNet: number,
    },

    //Say icin alanlar
    physics?: {
        true: number,
        false: number,
        emptyAnswers: number,
        totalNet: number,
    },
    chemistry?: {
        true: number,
        false: number,
        emptyAnswers: number,
        totalNet: number,
    },
    biology?: {
        true: number,
        false: number,
        emptyAnswers: number,
        totalNet: number,
    },


    //EA ve Soz icin alanlar
    literature?: {
        true: number,
        false: number,
        emptyAnswers: number,
        totalNet: number,
    },
    
    history1?: {
        true: number,
        false: number,
        emptyAnswers: number,
        totalNet: number,
    },
    geography1?: {
        true: number,
        false: number,
        emptyAnswers: number,
        totalNet: number,
    },

    //Soz icin Alanlar
    history2?: {
        true: number,
        false: number,
        emptyAnswers: number,
        totalNet: number,
    },
    geography2?: {
        true: number,
        false: number,
        emptyAnswers: number,
        totalNet: number,
    },
    philosophy?: {
        true: number,
        false: number,
        emptyAnswers: number,
        totalNet: number,
    },
    religion?: {
        true: number,
        false: number,
        emptyAnswers: number,
        totalNet: number,
    },
}

interface AytDocument extends Ayt, Document {
    _id: Schema.Types.ObjectId;
}

const AytSchema: Schema<AytDocument> = new Schema({
    aytField: {
        type: String,
        enum: ['say', 'ea', 'soz'],
        required: true
    },
    // Say ve Ea icin ortak alanlar
    math: {
        true: Number,
        false: Number,
        emptyAnswers: Number,
        totalNet: Number,
    },
    //Say icin alanlar
    physics: {
        true: Number,
        false: Number,
        emptyAnswers: Number,
        totalNet: Number,
    },
    chemistry: {
        true: Number,
        false: Number,
        emptyAnswers: Number,
        totalNet: Number,
    },
    biology: {
        true: Number,
        false: Number,
        emptyAnswers: Number,
        totalNet: Number,
    },

    //EA ve Soz icin alanlar
    literature: {
        true: Number,
        false: Number,
        emptyAnswers: Number,
        totalNet: Number,
    },
   
    history1: {
        true: Number,
        false: Number,
        emptyAnswers: Number,
        totalNet: Number,
    },
    geography1: {
        true: Number,
        false: Number,
        emptyAnswers: Number,
        totalNet: Number,
    },
    philosophy: {
        true: Number,
        false: Number,
        emptyAnswers: Number,
        totalNet: Number,
    },
    religion: {
        true: Number,
        false: Number,
        emptyAnswers: Number,
        totalNet: Number,
    }
})

const Ayt = Exam.discriminator<AytDocument>('ayt', AytSchema);

export default Ayt;