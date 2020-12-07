const express = require('express');
require('dotenv').config();
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const bodyParser = require('body-parser');

const userRouter = require('../user/user-router.js')
const postRouter = require('../routers/post-router.js')
const commentRouter = require('../routers/comment-router.js')
const notificationRouter = require('../routers/notification-router.js')

const server = express();

server.use(bodyParser.json())
server.use(bodyParser.urlencoded({extended: false}))

server.use(express.json());
server.use(helmet());
server.use(morgan('tiny'));
server.use(cors());

server.use('/api/auth', userRouter)
server.use('/api/post', postRouter)
server.use('/api/comment', commentRouter)
server.use('/api/notification', notificationRouter)


const PORT =  process.env.PORT || 8080;

server.get('/api', (req, res) => res.send(`<------ MATRIX SERVER PORT ${PORT} ------>`))

module.exports = server;