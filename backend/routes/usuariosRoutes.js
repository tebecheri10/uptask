import express from 'express'
import { registrar } from '../controllers/usuarioController.js'
const router = express.Router();

//Autenticación , registro y confirmación de usuarios
router.post('/', registrar)

export default router