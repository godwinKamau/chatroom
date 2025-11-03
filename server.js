const path = require('path')
const express = require('express')
const session = require('express-session')
const passport = require('passport')
const localStrategy = require('passport-local').Strategy
const connectToMongo = require('./db')
const MongoStore = require('connect-mongo')
const port = 3000
const formatMessage = require('./utils/messages.js')

const { createServer } = require('node:http');
const { Server } = require('socket.io')

const app = express();
app.set('viewengine','ejs')
app.use(express.static(path.join(__dirname,'public')))
const User = require('./User')
connectToMongo()
const env = require('dotenv').config()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(session({
  secret: process.env.SECRET_KEY,
  resave: false,
  saveUninitialized: true,
  store: new MongoStore({ mongoUrl: process.env.mongoURI })
}));



//============passport stuff
const strategy = new localStrategy(User.authenticate())
passport.use(strategy);
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
app.use(passport.initialize());
app.use(passport.session());

require('./routes.js')(app);

//============Chatroom stuff
const server = createServer(app);       
const io = new Server(server, {
    connectionStateRecovery: {}
})
const botName = 'Bot'

io.on('connection', (socket) => {
    // console.log('a user connection')                 //console logs a new connection 
    
    //Welcome user
    socket.emit('welcome', formatMessage(botName, 'Welcome to the chat!'))      //sends message to the client-side JS
    //Announces presence to other users
    socket.broadcast.emit('welcome', formatMessage(botName,'A user has joined the chat'))
    
    socket.on('chat message', (user, msg) => {
        // console.log('message: ' + msg)
        io.emit('chat message', formatMessage(user, msg))
    })
    socket.on('disconnect', () => {
        // console.log('user disconnected');

        //tells everyone a user has left
        io.emit('welcome', formatMessage(botName,'A user has disconnected'))
    });
})
//==================

server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
})