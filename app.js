const createError = require('http-errors');
const express = require('express');
const mongoose = require('mongoose')
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const helmet = require('helmet')
require('dotenv').config()

const indexRouter = require('./routes/index');
const authRouter = require('./routes/auth');
const limiter = require('./services/rateLimiter');

const app = express();

app.use(logger('dev'));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(limiter)
// connecting to database, mongodb 
const mongo_url = process.env.NODE_ENV !== 'PROD' ? process.env.MONGO_LOCAL : process.env.MONGO_CLOUD;

mongoose
  .connect(mongo_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(con => {
    console.log("Database Connection Established")
  })
  .catch(e => {
    console.log("Totally Fucked Up With Connecting Database , Man!" + mongo_url)
    console.log(e)
  })

// configuration of swagger ui
const options = {
  swaggerDefinition: {
    openapi: "3.0.1",
    info: {
      title: "Backend API",
      description: "THis is a simple api created by using Express framework .Swagger is used auto-documetation.",
      version: "1.0.0",
      servers: [`http://localhost:${process.env.PORT}`],
      contact: {
        name: "dude"
      }
    },
  },
  apis: [
    "*.js",
    "./models/*.js",
    "./router/*js"
  ]

};
const swaggerDocs = swaggerJsdoc(options)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))



app.use('/', indexRouter);
app.use('/auth', authRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
});

module.exports = app;
