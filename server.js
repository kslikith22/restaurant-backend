import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import resRoute from './routes/resRoutes.js'

dotenv.config()

const app = express()

app.use(morgan('dev'))

app.use(bodyParser.json({limit:"30mb",extended:true}))
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}))
app.use(cors())

app.get('/',(req,res)=>{
    res.send("hello")
})

app.use('/api/v1/resturants',resRoute)

app.listen(8080,()=>{
    console.log("server running")
})