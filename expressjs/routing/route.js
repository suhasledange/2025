import express from 'express'
import { userLogin, userSingup } from './controller.js'

const router = express.Router()

router.get('/login',userLogin)
router.get('/signup',userSingup)

export default router