import express from 'express';

const router = express.Router();

import  {registerController, authController,logoutController} from '../controllers/authController';

router.post('/signup', registerController ).post('/login', authController).get('/logout', logoutController);

export default router;