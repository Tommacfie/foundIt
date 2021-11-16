# FoundIt

## About the project
FoundIt is an app designed to reunite people with their lost possessions. Users can submit descriptions of items they have lost -or found- as well as images.

## Contributors
- [Tom Macfie](https://www.linkedin.com/in/tom-macfie/)

## Screenshots
<img width="375" alt="Screenshot 2021-10-23 at 17 23 31" src="https://user-images.githubusercontent.com/70334875/138652106-14cb2ff2-e23a-41fc-9342-c04fb4018e8e.png">
<img width="373" alt="Screenshot 2021-10-25 at 09 26 22" src="https://user-images.githubusercontent.com/70334875/138652524-b32b444c-d2c9-429f-b2c7-ad5b7b1e1c31.png">


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

- There is a script for populating the database with mock users and mock items

- There is another script for dropping the entire database and data

1. Start the backend server (using ``` foundIt/server % npx nodemon ```)

2. Populate the server using ```npm run populate```

3. Drop the database and data using ```npm run drop```

### FrontEnd

- This will start the frontend server.

```
foundIt/client % npm start
```


