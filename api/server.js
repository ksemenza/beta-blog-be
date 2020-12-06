const express = require('express');
require('dotenv').config();
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const bodyParser = require('body-parser');

const UserRouter = require('../user/user-router.js')
const restricted = require('../user/auth-middleware.js')

/*
const AccountRouter = require('../routers/account-router.js');
const PostRouter = require('../routers/post-router')
const CommentRouter = require('../routers/comment-router')
const NotificationRouter = require('../routers/notify-router')
*/
const server = express();

server.use(bodyParser.json())
server.use(bodyParser.urlencoded({extended: false}))

server.use(express.json());
server.use(helmet());
server.use(morgan('tiny'));
server.use(cors());

server.use('/api/user', UserRouter)

/*
server.use('/api/account', restricted, AccountRouter);

server.use('/api/post', restricted, PostRouter)
server.use('/api/comment', restricted, CommentRouter)
server.use('/api/notification', restricted, NotificationRouter)
*/

const PORT =  process.env.PORT || 8080;

server.get('/api', (req, res) => res.send(`<------ BLOG MATRIX SERVER PORT ${PORT} ------>`))

module.exports = server;