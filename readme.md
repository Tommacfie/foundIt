# FoundIt

## About the project
FoundIt is an app designed to reunite people with their lost possessions. Users can submit descriptions of items they have lost -or found- as well as images.

## Contributors
- [Tom Macfie] (https://www.linkedin.com/in/tom-macfie/)

## Technologies
The technologies I used to build this app:

### Frontend
[React](https://reactjs.org/)

### Backend
[NodeJs](https://nodejs.org/en/), [Express](http://expressjs.com/), [JWT](https://jwt.io/), [Cloudinary](http://cloudinary.com/)

## Getting Started

There's a few things you need to do to get started:

### Prerequsites

- npm

```
npm install npm@latest -g
```

- API Keys

  - Cloudinary

- Database

You will need to create a MongoDb database. You can set the database's URL by following the example provided in the .env.example file, providing a database name in place of '*NAME OF DATABASE*'.

1. Clone this repo

2. `foundIt/client % npm install`

3. `foundIt/server % npm install`

4. Create `server/.env` using `server/.env.example` as a template

5. Create `client/.env` using `client/.env.example` as a template

### BackEnd

- This will start the server and the database.

```
foundIt/server npx nodemon
```

### FrontEnd

- This will start the frontend server.

```
foundIt/client % npm start
```