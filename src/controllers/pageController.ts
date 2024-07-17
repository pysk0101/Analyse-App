import { Request, Response } from "express";
import User from "../models/userModel";

const getHomePage = (req: Request, res: Response) => {
    const features = [
        {
            icon: 'fa-calculator',
            title: 'Kolay Net Hesaplama',
            description: 'Sınavlarınızdaki netlerinizi hızlı ve doğru şekilde hesaplayın.'
        },
        {
            icon: 'fa-chart-line',
            title: 'Detaylı Analiz',
            description: 'Performansınızı grafiklerle görselleştirin ve gelişim alanlarınızı belirleyin.'
        },
        {
            icon: 'fa-user-graduate',
            title: 'Kişiselleştirilmiş Öneriler',
            description: 'Analiz sonuçlarına göre size özel çalışma tavsiyeleri alın.'
        }
    ]
    res.render('homepage', { features });
}

const getSignUpPage = (req: Request, res: Response) => {
    res.render('signuppage');
}

const getLoginPage = (req: Request, res: Response) => {
    res.render('loginpage');
}

const getDashboard = async (req: Request, res: Response) => {
    try {
        const userId = req.cookies.userId;
        if (!userId) {
            return res.redirect('/login');
        }
        const user = await User.findById(userId)
        res.render('dashboard', { user });
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

const getProfilePage = async (req: Request, res: Response) => {
    try {
        const userId = req.cookies.userId;
        if (!userId) {
            return res.redirect('/dashboard');
        }
        const user = await User.findById(userId)

        res.render('profilepage', { user });
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

const getCalculationPage = async (req: Request, res: Response) => {
    res.render('calculation');
}

const getTytForm = async (req: Request, res: Response) => {
    const userId = req.cookies.userId;
    const user = await User.findById(userId);
    res.render('tytForm', { user });
}

const getSayForm = async (req: Request, res: Response) => {
    const userId = req.cookies.userId;
    const user = await User.findById(userId);
    res.render('sayForm', { user });
}

const getEaForm = async (req: Request, res: Response) => {
    const userId = req.cookies.userId;
    const user = await User.findById(userId);
    res.render('eaForm', { user });
}
const getSozForm = async (req: Request, res: Response) => {
    const userId = req.cookies.userId;
    const user = await User.findById(userId);
    res.render('sozForm', { user });
}
const getlgsForm = async (req: Request, res: Response) => {
    const userId = req.cookies.userId;
    const user = await User.findById(userId);
    res.render('lgsForm', { user });
}

const getKpssForm = async (req: Request, res: Response) => {
    const userId = req.cookies.userId;
    const user = await User.findById(userId);
    res.render('kpssForm', { user });
}
const getStatisticsPage = async (req: Request, res: Response) => {
    try {
        const userId = req.cookies.userId;
        const user = await User.findById(userId);
        
       
        res.render('statisticpage', { user });
    } catch (error) {
        res.send(error)
    }
}

export { getHomePage, getSignUpPage, getLoginPage, getDashboard, getProfilePage, getCalculationPage, getStatisticsPage, getTytForm, getSayForm, getEaForm, getSozForm, getlgsForm, getKpssForm };