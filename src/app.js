const express = require('express' )
const mongoose = require('mongoose' )
const cookieParser = require('cookie-parser' )

const usersRouter = require('./routes/users.router.js' )
const petsRouter = require('./routes/pets.router.js' )
const adoptionsRouter = require('./routes/adoption.router.js' )
const sessionsRouter = require('./routes/sessions.router.js')

const cors = require('cors')
require('dotenv').config()

// logger
const { logger } = require('./config/logger.config.js')
const { addLogger } = require('./middlewars/logger.middleware.js')
// swagger 
const swaggerJdDoc = require('swagger-jsdoc')
const swaggerUiExpress = require('swagger-ui-express')
const { swaggerOpotion } = require('./config/swagger.config.js')

const app = express() 
const PORT = process.env.PORT||8080 
const connection = mongoose.connect(process.env.MONGO_URL)

app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use(addLogger)

app.use(express.static(__dirname+'/public'))

const spec = swaggerJdDoc(swaggerOpotion)
app.use('/apidocs', swaggerUiExpress.serve, swaggerUiExpress.setup(spec))
app.use('/api/users',usersRouter) 
app.use('/api/pets',petsRouter) 
app.use('/api/adoptions',adoptionsRouter) 
app.use('/api/sessions',sessionsRouter) 

app.listen(PORT,()=> logger.info(`Listening on ${PORT}`) )

