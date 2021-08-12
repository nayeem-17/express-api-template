# This is a template for my backend projects
****
### Here, This is the serverless version of this template.   

To use this template, you don't have to change the way you make nodejs API. You just have to write the new endpoints in `serverless.yml` file.
For example, for a simple crud api, you can write the following code in `serverless.yml`:
```yml
functions:
  app:
    handler: app.handler
    events:
      - http: ANY /
  getUser:
    handler: app.handler
    events:
      - http: "GET /user/get/{proxy+}"
  createUser:
    handler: app.handler
    events:
      - http: "POST /user/create"
  updateUser:
    handler: app.handler
    events:
      - http: "PUT /user/update/{proxy+}"
  deleteUser:
    handler: app.handler
    events:
      - http: "DELETE /user/delete/{proxy+}"

```

For the get, update, delete operation, you have to pass the `userId` as a parameter. `/{proxy+}` will take the userId as a parameter.
 ### For SQL (postgres) without ORM , check this  [branch](https://github.com/nayeem-17/express-mongo-api-template/tree/sql-without-ORM) 
  

****
## Running this on your machine

### Using npm 

To use this template, first, you have to create a `.env` file and add the environment variables. Here's the example `.env` file.
```bash
MONGO_CLOUD="The mongo atlas url"
NODE_ENV=PROD
```
Then run this command in your terminal or cmd, `npm start` to start the app. Or you can run `npm run dev` to start the app in development mode. Every time you save any file, the server will restart.

### Adding Project Name 

Replace `express-template` with your project name in [package.json](package.json) file .

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



## Useful links:
- [OpenAPI Specification](https://swagger.io/specification/)
- [Style Guide for NodeJS](https://github.com/felixge/node-style-guide)
- [Structuring Express Applications](https://softwareontheroad.com/ideal-nodejs-project-structure/?utm_source=github&utm_medium=readme#configs)
- [Express Service Oriented Architecture](https://www.codementor.io/@evanbechtol/node-service-oriented-architecture-12vjt9zs9i)
    

