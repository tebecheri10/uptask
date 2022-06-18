import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import usuarioRoutes from './routes/usuariosRoutes.js' 

const app = express()

dotenv.config()
connectDB()

//Rouring

app.use('/api/usuarios',usuarioRoutes )


const PORT = process.env.PORT || 3200  

app.listen(PORT,()=>{console.log(`working on port ${PORT}`)})