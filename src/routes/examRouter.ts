import express from 'express';
const router = express.Router();

import { createTyt, createAytSay, createAytEa , createAytSoz} from '../controllers/examController';

//Create Routes

router.post('/tyt', createTyt).post('/aytSay', createAytSay).post('/aytEa', createAytEa).post('/aytSoz', createAytSoz);

export default router;