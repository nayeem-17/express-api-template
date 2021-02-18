const createError = require('http-errors');
const express = require('express');
const mongoose = require('mongoose')
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');
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

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/', indexRouter);
app.use('/auth', authRouter);

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
