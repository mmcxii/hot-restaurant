const express = require('express');
const path = require('path');

const index = express.static(path.join(__dirname, '../public'));

module.exports = index;