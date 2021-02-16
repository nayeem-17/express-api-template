# This is a template for my backend projects
To use this template, first, you have to create a `.env` file and adding the enviourment variables. Here's the example `.env` file.
```bash
PORT=8080
MONGO_CLOUD="The mongo atlas url"
NODE_ENV=PROD
MONGO_LOCAL="The local mongo database url"
```
Then run this command in your terminal or cmd, `npm start` to start the app. Or you can run `npm run dev` to start the app in development mode. Every time you save any file, the server will restart.
****
Here, I used Mongodb as database. Mongodb is a NoSQL database.   
****
## The architecture of this template
* authentication
* controllers
* routes
* services
* models 

**Authentication** :  Here i used json-web-token to authenticate the user. User logs in using their credentials and a json-web-token is returned. Then the user has to add that that token in headers for every request.   

**Controllers**: Here, all of the controllers files will be stored.   

**Routes**: Here, the router files will be stored. In a router file, a single express router will be declared. Then the express app will use the router in `app.js` file.  

**Services**: Here , various service file is stored. The [cache.js](services/cache.js) is for handelling caching. The [rateLimiter.js](services/rateLimiter.js) is for limiting a request rate for a user. Other services ,such as sending email, logging data can be stored here.      

**Models**: Here, all the database models will be stored.

## Useful links:
- [Style Guide for NodeJS](https://github.com/felixge/node-style-guide)
- [Structuring Express Applications](https://softwareontheroad.com/ideal-nodejs-project-structure/?utm_source=github&utm_medium=readme#configs)
- [Express Service Oriented Architecture](https://www.codementor.io/@evanbechtol/node-service-oriented-architecture-12vjt9zs9i)
    

