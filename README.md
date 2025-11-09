# House Chat

A full stack app that uses socket.io, passport authentication and MongoDB to create chatrooms.

[Made to explore concepts in demo-day project.]

<hr>

<img src="./Screenshot 2025-11-09 at 1.24.28 PM.png">

<hr>

## Sources: 

Tutorial from the socket.io documentation: https://socket.io/docs/v4/tutorial/introduction

<br>

Traversy video about socket.io: https://www.youtube.com/watch?v=jD7FnbI76Hg#

<hr>

## Tech Stack

| Category  | Tools                               |
| --------- | ----------------------------------- |
| Backend   | Node.js, Express, Mongoose, MongoDB |
| Frontend  | EJS, HTML, CSS, JavaScript          |
| Dev Tools | Nodemon, dotenv                     |
| Other     | Socket, Figlet                      |

<hr>

## Live Demo

https://chatroom-4dq0.onrender.com

<hr>

### Installation & Setup

Make sure you have Node.js and MongoDB (or MongoDB Atlas) set up.

```
git clone <your-repo-url>
cd <project-folder>
npm install
```



### Environment Variables

Create a .env file:

```
MONGODB_URL=your_mongo_connection_string
```
<hr>

## Run the App

```
npm run dev
```

This runs the server using nodemon for automatic reload during development.

<hr>

## Features

- Chatroom
- MongoDB-backed storage
- Full-stack Express + EJS templating
- Passport Strategies to hold user authentication and sessions

<hr>

## Future Improvements

- UI to see who is online

- A save state to recover messages when a user loses connection

- Text commands with backslash to change settings in the chatroom.


<hr>

## License

ISC