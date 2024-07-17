import { Request, Response } from 'express';
import User from '../models/userModel';
import fs from 'fs';
import path from 'path';
import bcrypt from "bcrypt";


const changePicture = async (req: Request, res: Response) => {
    try {
        const userId = req.cookies.userId;
        if (!req.file) {
            return res.status(400).send('No file uploaded.');
        }

        const user = await User.findById(userId)
        if (!user) {
            return res.status(404).send('User not found');
        }

        if (typeof user.pictures.profilePicture === 'undefined') return res.status(404).send('User not found');

        if (user.pictures.profilePicture !== "default-avatar.jpg") {
            fs.unlink(path.join(__dirname, '../public/Images', user.pictures.profilePicture), (err) => {
                if (err) {
                    console.error(err);
                }
            });
        }

        user.pictures.profilePicture = req.file.filename
        await user.save()

        res.redirect('/dashboard/profile' )


    } catch (error) {
        res.status(500).send("Bir hata oluştu")
    }
}

export {changePicture};
