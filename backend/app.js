const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');
const multer = require('multer');
const errorHandler = require('./middleware/error_handler');

const {searchController} = require('./controllers/controller');
const {keywordController} = require('./controllers/controller');

app = express();

app.use(bodyparser.json());

app.use(express.static(path.join(__dirname, "../frontend")));

const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './backend/images');
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
      cb(new Error("file type is not correct"), false);
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

//app.use(multer({storage: fileStorage, fileFilter: fileFilter}).single('image'));

//shoppers
app.post('/search', searchController);

//retailers
app.post('/keywords', keywordController);

app.use('*/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../frontend/static/index.html'));
});

app.use(errorHandler);

app.listen(3000, '127.0.0.1');