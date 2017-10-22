![logos](http://atulmy.com/atulmy.com/attachments/images/dev-logos.png)

# Fullstack GraphQL

Simple Demo Application

**API** built with Node + Express + GraphQL + Sequelize (supports MySQL, Postgres, Sqlite and MSSQL). 

**WebApp** built with React + Redux. 

Writtten in ES6 using Babel + Webpack.

## 📝 Features
- [x] List thoughts
- [x] Add thought
- [x] Delete thought

## ▶️ Running
- Clone repo `git clone git@github.com:atulmy/fullstack-graphql.git fullstack-graphql`
- Install NPM modules API `cd api` and `npm install`
- Install NPM modules Webapp `cd webapp` and `npm install`
- Modify `/api/src/config/database.json` for database credentials
- Modify `/api/src/config/config.json` for API port (optional)
- Modify `/webapp/.env` for webapp port (optional)
- Run API `cd api` and `npm start`, browse GraphiQL at http://localhost:3000/
- Run Webapp `cd webapp` and `npm start`, browse webapp at http://localhost:8000/

### Sample API logs
```
[nodemon] starting `babel-node src/index.js --presets es2015,stage-2`
SETUP - Connecting database...
SETUP - Loading modules...
SETUP - GraphQL...
SETUP - Syncing database tables...
INFO - Database connected.
INFO - Database sync complete.
SETUP - Starting server...
INFO - Server started on port 3000.
```

## 📸 Screenshots
![screenshot](http://atulmy.com/atulmy.com/attachments/images/fullstack-graphql.gif)

## 🏗 Core Structure
    fullstack-graphql
      ├── api (api.example.com)
      │   ├── src
      │   │   ├── config
      │   │   ├── models
      │   │   ├── schema
      │   │   ├── setup
      │   │   └── index.js
      │   │
      │   └── package.json
      │
      ├── webapp (example.com)
      │   ├── public
      │   ├── src
      │   │   ├── components
      │   │   ├── setup
      │   │   └── index.js
      │   │
      │   ├── .env
      │   └── package.json
      │
      ├── .gitignore
      └── README.md

## Guides
### API
- Adding new Module (Eg: Users):
  - Copy `/api/src/models/thought.js` to `/api/src/models/user.js` and modify the file for table name and respective fields
  - Add an entry to the `models` object in `/api/src/models/index.js`
  - Copy `/api/src/schema/thoughts` to `api/src/schema/users` and modify `type.js`, `resolvers.js` and `fields/mutations.js` and `fields/query.js`

### Webapp
- Adding new Module (Eg: Users):
  - Create folder `users` under `/webapp/src/components/`
  - Create your Container and Resusable components under `/webapp/src/components/users`
  - Create `api` folder under `/webapp/src/components/users`
  - Add `actions.js` where all your Redux Action Types and Actions will reside (refer `/webapp/src/components/thoughts/api/actions.js`)
  - Add `state.js` where all your respective Reducers will recide (refer `/webapp/src/components/thoughts/api/state.js`)
  - Import the module state in `/webapp/src/setup/store.js` to make it avaliable to the app
  - Encapsulate all your User related code in `/webapp/src/components/users`
- Adding new Route (Eg: `/users`):
  - Add a new entry to `routes` object in `/webapp/src/setup/routes.js` (eg `user: { list: '/list' }`)
  - Edit `/webapp/src/components/App.js` and add the route entry
  
## 🎩 Author
Atul Yadav - [GitHub](https://github.com/atulmy) &bull; [Twitter](https://twitter.com/atulmy)

## 📜 License
Copyright (c) 2017 Atul Yadav http://github.com/atulmy

The MIT License (http://www.opensource.org/licenses/mit-license.php)
