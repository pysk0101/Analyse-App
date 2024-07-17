import express from 'express';
const router = express.Router();

import { getHomePage ,getSignUpPage, getLoginPage } from '../controllers/pageController';

router.get('/', getHomePage).get('/signup',getSignUpPage).get('/login',getLoginPage);

export default router;