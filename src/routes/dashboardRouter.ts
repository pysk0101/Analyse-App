import express from 'express';
const router = express.Router();

import { getDashboard, getProfilePage,getCalculationPage, getStatisticsPage} from '../controllers/pageController';
import {getTytForm, getSayForm, getEaForm, getSozForm, getlgsForm, getKpssForm} from '../controllers/pageController'; 

//Main Dashboard Pages
router.get('/', getDashboard).get('/profile', getProfilePage).get('/calculation', getCalculationPage).get('/statistics', getStatisticsPage);

//Calculations
router.get('/calculation/tyt', getTytForm).get('/calculation/say', getSayForm).get('/calculation/ea', getEaForm).get('/calculation/soz', getSozForm).get('/calculation/lgs', getlgsForm).get('/calculation/kpss', getKpssForm);

export default router;  