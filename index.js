require('dotenv').config()
const express = require('express')
const conn = require('./db/conn')
const app = express()

// routers
const productRouter = require('./routers/productRouter')

app.use(express.json())

app.use('/product',productRouter)

app.listen(5000)