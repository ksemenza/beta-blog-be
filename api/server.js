const express = require('express');
require('dotenv').config();
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const path = require('path')

const multer = require('multer');


const server = express();

server.use(bodyParser.json())
server.use(bodyParser.urlencoded({extended: false}))

server.use(express.json());
server.use(helmet());
server.use(morgan('tiny'));
server.use(cors());

server.use('/upload' , express.static(path.join(__dirname, './uploads')))

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        console.log(file)
        cb(null, file.originalname);
        // cb(null, Date.now() + path.extname(file.originalname));
    }
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype == 'image/jpeg' || file.mimetype == 'image/png') {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

const upload = multer({ storage: storage, fileFilter: fileFilter })
server.post('/api/uploads', upload.single('image', (req, res, next) => {
    try {
         res.status(201).json({
            message: 'File uploaded successfully'
         });
        res.send(req.file, { message: 'File uploaded' })
    } catch (error) {
        console.error(error);
    }
}))

server.post('/api/uploads/bulk', upload.array('image', 4), (req, res) => {
    try {
        res.send(req.files)
    } catch (error) {
        console.log(error)
        res.send(400)
    }
})

const userRouter = require('../user/user-router.js')
const postRouter = require('../routers/post-router.js')
const commentRouter = require('../routers/comment-router.js')
const notificationRouter = require('../routers/notification-router.js')


server.use('/api/auth', userRouter)
server.use('/api/post', postRouter)
server.use('/api/comment', commentRouter)
server.use('/api/notification', notificationRouter)



const PORT =  process.env.PORT || 8080;

server.get('/api', (req, res) => res.send(`<------ MATRIX SERVER PORT ${PORT} ------>`))

module.exports = server;