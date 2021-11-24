# FoundIt

## About the project
FoundIt is an app designed to reunite people with their lost possessions. Users can submit descriptions of items they have lost -or found- as well as images.

## Contributors
- [Tom Macfie](https://www.linkedin.com/in/tom-macfie/)

## Screenshots
<img width="200" alt="foundit-login" src="https://user-images.githubusercontent.com/70334875/143205402-4295b8fd-c187-4417-9c15-c5b4507678c7.png"><img width="200" alt="foundit-register" src="https://user-images.githubusercontent.com/70334875/143205416-b095d53d-49e8-4a71-8e09-9bb646c17f75.png"><img width="200" alt="foundit-home" src="https://user-images.githubusercontent.com/70334875/143205452-042a78d5-2a89-457f-834f-07b63cd1820f.png"><img width="200" alt="foundit-profile" src="https://user-images.githubusercontent.com/70334875/143205466-1547fbf7-4d99-4232-b4e7-5e1f57446ae0.png"><img width="200" alt="foundit-option" src="https://user-images.githubusercontent.com/70334875/143205486-0a4b61cd-e2ac-4f7d-9b5d-85c41d171721.png"><img width="200" alt="foundit-item-form" src="https://user-images.githubusercontent.com/70334875/143205509-2099432b-0069-43c9-825a-542f28d711d3.png"><img width="200" alt="foundit-image-submit" src="https://user-images.githubusercontent.com/70334875/143205533-0be4b4f9-2016-4c8f-a783-b53ede1358be.png"><img width="200" alt="foundit-image-preview" src="https://user-images.githubusercontent.com/70334875/143205546-497f41fe-ada3-437c-a99c-9a70d19e76ba.png"><img width="382" alt="foundit-item-confirm" src="https://user-images.githubusercontent.com/70334875/143205557-94367112-a647-4cfa-8402-083fdd6630ae.png"><img width="200" alt="foundit-post-submit" src="https://user-images.githubusercontent.com/70334875/143205572-0bc45576-75f0-43f1-8860-42f997a896d6.png">















## Technologies
The technologies I used to build this app:

### Frontend
[React](https://reactjs.org/), [Cloudinary](http://cloudinary.com/)

### Backend
[NodeJs](https://nodejs.org/en/), [Express](http://expressjs.com/), [JWT](https://jwt.io/)

## Getting Started

There's a few things you need to do to get started:

### Prerequsites

- install 'Node Package Manager' (npm)

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


