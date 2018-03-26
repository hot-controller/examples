const express = require('express');
const app = express();
const { Post } = require('./models');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

app.use(require('hot-controller/middleware')());

app.listen(3000, function() {
  console.info('listening on 3000');
});
