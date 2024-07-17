import { Request, Response } from 'express';
import User from '../models/userModel';
import Tyt from '../models/tytModel';
import Ayt from '../models/aytModel';



const createTyt = async (req: Request, res: Response) => {
    try {


        const { userId, examField, examName,
            correctAnswers, wrongAnswers, emptyAnswers,
            totalNet, solvingSpan, math,
            science, turkish, social
        } = req.body

        const newExam = new Tyt({
            userId,
            examField, examName, correctAnswers, wrongAnswers, emptyAnswers, totalNet, solvingSpan, math, science, turkish, social
        });

        await newExam.save()

        const user = await User.findById(userId);

        if (user && user.exams && user.exams.tyt) {
            user.exams.tyt.push(newExam._id as any);
        }
        await user?.save();
        res.json({ success: true, redirectUrl: '/dashboard/calculation/tyt' });
    } catch (error) {
        res.send(error)
    }

}
const createAytSay = async (req: Request, res: Response) => {
    try {

        const { userId, examField, examName, aytField,
            correctAnswers, wrongAnswers, emptyAnswers,
            totalNet, solvingSpan, math,
            chemistry, physics, biology
        } = req.body

        const newExam = new Ayt({
            userId, aytField,
            examField, examName, correctAnswers, wrongAnswers, emptyAnswers, totalNet, solvingSpan, math, chemistry, physics, biology
        });

        await newExam.save()

        const user = await User.findById(userId);

        user?.exams?.ayt?.say?.push(newExam._id as any);
        await user?.save();

        res.json({ success: true, redirectUrl: '/dashboard/calculation/say' });
    } catch (error) {
        res.send(error)
    }
}
const createAytEa = async (req: Request, res: Response) => {
    try {
        const { userId, examField, aytField, examName,
            correctAnswers, wrongAnswers, emptyAnswers,
            totalNet, solvingSpan, math,
            history, geography, literature
        } = req.body

        const newExam = new Ayt({
            userId, aytField,
            examField, examName, correctAnswers, wrongAnswers,
            emptyAnswers, totalNet, solvingSpan, math,
            geography, history, literature
        });

        await newExam.save()

        const user = await User.findById(userId);

        user?.exams?.ayt?.esitAgirlik?.push(newExam._id as any);
        await user?.save();

        res.json({ success: true, redirectUrl: '/dashboard/calculation/ea' });
    } catch (error) {
        res.send(error)
    }
}
const createAytSoz = async (req: Request, res: Response) => { }




export { createTyt, createAytSay, createAytEa, createAytSoz }