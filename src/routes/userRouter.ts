import express from 'express';
const router = express.Router();

import { changePicture } from '../controllers/userController';
import upload from '../middlewares/multer'


router.post('/changePicture', upload.single('profilePicture'), changePicture);

export default router;