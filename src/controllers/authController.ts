import { Request, Response } from 'express';
import User from '../models/userModel';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


const registerController = async (req: Request, res: Response) => {
    try {
        const { name, email, password, studyField } = req.body;
        if (!name || !email || !password || !studyField) return res.status(400).send("Tüm alanları doldurunuz");

        const duplicate = await User.findOne({ email: email });
        if (duplicate) return res.status(409).send("Bu email zaten kayıtlı");


        const hashedPwd = await bcrypt.hash(password, 10);

        const newUser = new User({
            name,
            email,
            studyField,
            password: hashedPwd

        })
        await newUser.save()
        res.json({ success: true, redirectUrl: "/login" })
    } catch (error) {
        res.status(500).redirect("/register")
    }
}

const authController = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) return res.status(400).send("Tüm alanları doldurunuz");

        const newUser = await User.findOne({ email: email });
        if (!newUser) return res.status(404).send("Kullanıcı bulunamadı");


        const matchPwd = await bcrypt.compare(password, newUser.password) // ilk önce loginde girilen password, sonraki bizim db'deki hashlenmiş password

        if (!matchPwd) return res.status(400).send("Hatalı şifre");


        if (matchPwd) {
            //email yerine userID koymayi dene  .
            const token = jwt.sign({}, process.env.ACCESS_TOKEN_SECRET as string, { expiresIn: '10m' });
            const refreshToken = jwt.sign({}, process.env.REFRESH_TOKEN_SECRET as string, { expiresIn: '1d' });


            res.cookie('at', token, {
                httpOnly: true,
                secure: true,
                sameSite: 'none'
            });
            res.cookie('rt', refreshToken, {
                httpOnly: true,
                secure: true,
                sameSite: 'none'
            });
            res.cookie('userId', newUser._id.toString(), {
                httpOnly: true,
                secure: true,
                sameSite: 'none'
            })

            res.json({ success: true, redirectUrl: "/dashboard" })
        } else {
            res.status(401).send("Hatalı şifre");
        }
    } catch (error: any) {
        res.status(500).json({ 'message': error.message })

    }
}

const logoutController = (req: Request, res: Response) => {
    res.clearCookie('at')
    res.clearCookie('rt')
    res.clearCookie('userId')
    res.redirect("/")
}


export { registerController, authController, logoutController }