const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');
const multer = require('multer');
const { Sequelize } = require('sequelize');
const errorHandler = require('./middleware/error_handler');

app = express();

app.use(bodyparser.json());

app.use(express.static(path.join(__dirname, "../frontend")));

const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './images');
  },
  filename: (req, file, cb) => {
    cb(null, new Date().toISOString() + '-' + file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
    if (
      file.mimetype === 'image/png' ||
      file.mimetype === 'image/jpg' ||
      file.mimetype === 'image/gif'
    ) {
      cb(null, true);
    } else {
      cb(null, false);
    }
};

//allow cross domain access
app.use((req, res, next) => {
   
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      'Access-Control-Allow-Methods',
      'OPTIONS, GET, POST, PUT, PATCH, DELETE'
    );
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });

app.use(multer({dest: './images', fileFilter: fileFilter}).single('image'));

app.post('/search', (req, res)=>{
    res.status(200).send("request received");
  }
)

app.use('*/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../frontend/static/index.html'));
});

app.use(errorHandler);

app.listen(8080, '127.0.0.1');