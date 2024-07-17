import mongoose, { Schema, Document, Model } from "mongoose";




interface User {
    name: string;
    email: string;
    password: string;
    studyField: {
        type: string,
        enum: 'lgs' | 'yks' | 'kpss'
    };
    exams?: {
        lgs?: [{ type: Schema.Types.ObjectId, ref: 'lgs' }],
        tyt?: [{ type: Schema.Types.ObjectId, ref: 'tyt' }],
        kpss?: [{ type: Schema.Types.ObjectId, ref: 'kpss' }],
        ayt?: {
            say?: [{ type: Schema.Types.ObjectId, ref: 'aytSay' }],
            esitAgirlik?: [{ type: Schema.Types.ObjectId, ref: 'aytEsitAgirlik' }],
            sozel?: [{ type: Schema.Types.ObjectId, ref: 'aytSozel' }] ,
        }
    }
    ;
    createdAt: Date;
    updatedAt: Date;
    pictures: {
        profilePicture: string;
        coverPicture: string;
    }
}

interface UserDocument extends User, Document {
    _id: Schema.Types.ObjectId;
}

interface UserModel extends Model<UserDocument> { }

const userSchema = new mongoose.Schema<UserDocument, UserModel>({
    name: {
        type: String,
        required: [true, 'Please provide a name']
    },
    email: {
        type: String,
        required: [true, 'Please provide an email']
    },
    password: String,
    studyField: {
        type: String,
        enum: ['lgs', 'yks', 'kpss']
    },
    exams: {
        lgs: [{ type: Schema.Types.ObjectId, ref: 'lgs' }],
        tyt: [{ type: Schema.Types.ObjectId, ref: 'tyt' }],
        kpss: [{ type: Schema.Types.ObjectId, ref: 'kpss' }],
        ayt: {
            say: [{ type: Schema.Types.ObjectId, ref: 'aytSay' }],
            esitAgirlik: [{ type: Schema.Types.ObjectId, ref: 'aytEsitAgirlik' }],
            sozel: [{ type: Schema.Types.ObjectId, ref: 'aytSozel' }],
            _id: false
        },
        _id: false
    }
    ,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    pictures: {
        type: {
            profilePicture: { type: String, default: 'default-avatar.png' },
            coverPicture: { type: String, default: 'default-cover.jpg' },
        },
        _id: false,
        default: {
            profilePicture: 'default-avatar.jpg',
            coverPicture: 'default-cover.jpg'
        }
    }
})



const User = mongoose.model<UserDocument, UserModel>('User', userSchema);

export default User;
