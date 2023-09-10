const express = require('express');
const app = new express(); 
const router = require('./src/routes/api'); 


//security middleware import

const ratelimit = require('express-rate-limit')
const helmet = require('helmet')
const  mongo_sanitize  = require('express-mongo-sanitize')
const xss_clean  = require('xss-clean')
const hpp  = require('hpp')
const cors = require('cors')


//security middleware implement

app.use(cors())
app.use(helmet())
app.use(mongo_sanitize())
app.use(xss_clean())
app.use(hpp())





//request rate limiting 


const limiter = ratelimit({

    windowMs: 15*60*1000,
    max:100
})

app.use(limiter)






app.use('/api/v1', router);


app.use('*',(req,res)=>{

    res.status(404).json({status:"fail",data:"Not Found"})
})

module.exports = app;
