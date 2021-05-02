# This is a template for my backend projects
****
### Here, I used Mongodb as a database. Mongodb is a NoSQL database.  
### For SQL (postgres) without ORM , check this  [branch](https://github.com/nayeem-17/express-mongo-api-template/tree/sql-without-ORM) 
****
## Running this on your machine

### Using npm 

To use this template, first, you have to create a `.env` file and add the environment variables. Here's the example `.env` file.
```bash
PORT=8080
MONGO_CLOUD="The mongo atlas url"
NODE_ENV=PROD
MONGO_LOCAL="The local mongo database url"
```
Then run this command in your terminal or cmd, `npm start` to start the app. Or you can run `npm run dev` to start the app in development mode. Every time you save any file, the server will restart.

### Adding Project Name 

Replace `express-template` with your project name in [package.json](package.json) file & [bin/www](bin/www) file .

###  Using Docker-compose

At first, you have to create a `.env` file as explained [here](#using-npm)      
Then,   
To run this template using docker-compose. Just run this command.   
```bash
docker-compose up
```
To know more about docker, see [this](https://github.com/nayeem-17/DevOps-writeups/blob/master/Docker/README.md)
****
## The architecture of this template
* authentication
* controllers
* routes
* services
* models 

**Authentication** :  Here I used json-web-token to authenticate the user. User logs in using their credentials and a json-web-token are returned. Then the user has to add that that token in headers for every request.   

**Controllers**: Here, all of the controller files will be stored.   

**Routes**: Here, the router files will be stored. In a router file, a single express router will be declared. Then the express app will use the router in `app.js` file.  

**Services**: Here, various service file is stored. The [cache.js](services/cache.js) is for handling caching. The [rateLimiter.js](services/rateLimiter.js) is for limiting a request rate for a user. Other services, such as sending email, logging data can be stored here.      
- `Sending email` : To send email just call `sendMail = (RECEIVER_EMAIL, subject, body, links)` function. This function use [nodemailer](https://www.npmjs.com/package/nodemailer) to send the function. You can use your gmail account to send an email. First, you have to enable `Less secure app access` of your google account from settings. Then you've to add your account credentials in `.env` file.
    ```bash
    EMAIL_ID=YOUR_GMAIL_ACCOUNT
    EMAIL_PASS=PASSWORD
    ```
    if You have a custom domain, then just change the `mailconfig` in this [file](./services/email/email.js). Now you are good to go.

**Models**: Here, all the database models will be stored.

## Documentation


[swagger](https://swagger.io/) is a great tool for creating documentation for your api. You can either write swagger config file in `YAML` or `JSON`. Then `swagger-ui-express` will generate a beautiful user interface for your api. I've deployed this template on Heroku. You will find the UI of this api documentation [here](https://express-mongo-api-template.herokuapp.com/api-docs/). This UI if for this [swagger.yaml](swagger.yaml) config file.

Here, I wrote a demo config file in `YAML` (YAML Ain't Markup Language). To load this file.
```javascript
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');
```
Then server the swaggerDocument in a route.

```javascript
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
```
Now you can find your documentation UI in,  

`http://localhost:{PORT}/api-docs` if you're running your server at localhost.  
`https://your_server/api-docs`, if you've deployed else-where.

## Useful links:
- [OpenAPI Specification](https://swagger.io/specification/)
- [Style Guide for NodeJS](https://github.com/felixge/node-style-guide)
- [Structuring Express Applications](https://softwareontheroad.com/ideal-nodejs-project-structure/?utm_source=github&utm_medium=readme#configs)
- [Express Service Oriented Architecture](https://www.codementor.io/@evanbechtol/node-service-oriented-architecture-12vjt9zs9i)
    

