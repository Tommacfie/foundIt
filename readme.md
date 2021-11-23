# FoundIt

## About the project
FoundIt is an app designed to reunite people with their lost possessions. Users can submit descriptions of items they have lost -or found- as well as images.

## Contributors
- [Tom Macfie](https://www.linkedin.com/in/tom-macfie/)

## Screenshots
<img width="200" alt="foundit-login" src="https://user-images.githubusercontent.com/70334875/143062935-712fdc43-ac62-4c63-bf88-5773c7bdb853.png"> <img width="200" alt="foundit-register" src="https://user-images.githubusercontent.com/70334875/143062944-839cd4e4-2d4b-44de-bf2d-559b710bf7e5.png">



## Technologies
The technologies I used to build this app:

### Frontend
[React](https://reactjs.org/), [Cloudinary](http://cloudinary.com/)

### Backend
[NodeJs](https://nodejs.org/en/), [Express](http://expressjs.com/), [JWT](https://jwt.io/)

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
foundIt/server % npx nodemon
```

- There is a script for populating the database with mock data (users and items), as well as clearing the database and data

1. Make sure that the backend server is running using ``` foundIt/server % npx nodemon ```

2. Populate the database with mock data using ```npm run populate```

3. Drop the database and mock data using ```npm run drop```

### FrontEnd

- This will start the frontend server.

```
foundIt/client % npm start
```


