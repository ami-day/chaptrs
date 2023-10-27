# Chaptrs 📚

Group Project created during our final two weeks at Makers Academy Bootcamp.

## 🤝 Our Team
- [David Ade](https://github.com/D6link)
- [Emily Cowan](https://github.com/Emily-RC)
- [Ami Day](https://github.com/ami-day)
- [Ellie Priestley](https://github.com/elliepriestley)
- [Cloud Spotter](https://github.com/cloud-spotter)

## 📖 About Our Project

Welcome to Chaptrs, an app for bookworms! Plan and track your bookclubs with fellow book lovers right here. Discover Dickens with mates, find new friends with Fitzgerald, and review your favourites with Rowling. Read on to explore your very first Chaptr!

## 🚀 Tech Stack 

**Frontend:**
![Javascript](https://img.shields.io/badge/Javascript-yellow?logo=javascript)
![HTML](https://img.shields.io/badge/HTML-orange?logo=HTML)
![CSS](https://img.shields.io/badge/CSS-blue?logo=CSS)
![React](https://img.shields.io/badge/React-grey?logo=React)

**Backend:**
![MongoDB](https://img.shields.io/badge/MongoDB-green?logo=MongoDB) ![Express](https://img.shields.io/badge/Express-black?logo=Express) ![Node](https://img.shields.io/badge/Node-darkgreen?logo=Node)

## 🔮 Future Scope

## 📋 Card wall

Trello ticket [tracker][tracker-link]

[tracker-link]: https://your-trello-ticket-tracker-link.com

## 🏁 Quickstart

### Install Node.js

1. Install Node Version Manager (NVM)
   ```
   brew install nvm
   ```
   Then follow the instructions to update your `~/.bash_profile`.

2. Open a new terminal

3. Install the latest version of [Node.js](https://nodejs.org/en/), currently `18.1.0`.
   ```
   nvm install 18
   ```

### Set up your project

1. Fork this repository

2. Rename your fork to `acebook-<team name>`

3. Clone your fork to your local machine

4. Install Node.js dependencies for both the `frontend` and `api` directories.
   ```
   ; cd api
   ; npm install
   ; cd ../frontend
   ; npm install
   ```

> You might get warning messages about the installed dependencies at this point. You can ignore them, as long as the installation process doesn't fail. If the setup fails at this point, don't wait for too long and reach out to your coach.

5. Install an ESLint plugin for your editor. For example: [`linter-eslint`](https://github.com/AtomLinter/linter-eslint) for Atom.

6. Install MongoDB
   ```
   brew tap mongodb/brew
   brew install mongodb-community@5.0
   ```
   *Note:* If you see a message that says `If you need to have mongodb-community@5.0 first in your PATH, run:`, follow the instruction. Restart your terminal after this.
7. Start MongoDB
   ```
   brew services start mongodb-community@5.0
   ```

### How to run the server and use the app (as a human)

1. Start the server application (in the `api` directory)

  **Note the use of an environment variable for the JWT secret**

   ```
   ; cd api
   ; JWT_SECRET=f6d278bb34e1d0e146a80b16ec254c05 npm start
   ```
2. Start the front end application (in the `frontend` directory)

  In a new terminal session...

  ```
  ; cd frontend
  ; npm start
  ```

You should now be able to open your browser and go to `http://localhost:3000/signup` to create a new user.

Then, after signing up, you should be able to log in by going to `http://localhost:3000/login`.

After logging in, you won't see much but you can create posts using PostMan and they should then show up in the browser if you refresh the page.

## 🔍 Showcase Graphics
