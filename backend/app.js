const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');
const { Sequelize } = require('sequelize');
const errorHandler = require('./middleware/error_handler');

app = express();

app.use(bodyparser.json());

app.use(express.static(path.join(__dirname, "../frontend")));

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

app.use('*/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../frontend/static/index.html'));
});

app.use(errorHandler);

app.listen(3000, '127.0.0.1');