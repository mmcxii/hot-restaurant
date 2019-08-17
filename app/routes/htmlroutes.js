const express = require('express');
const path = require('path');

const app = express();

const index = express.static(path.join(__dirname, '../public'));

module.exports = index;