const express = require('express');
const app = express();
const tableRoute = require('./app/routes/api/tables');

const index= require('./app/routes/htmlroutes.js');

const PORT = process.env.port || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', tableRoute);
app.use(index);

app.listen(PORT, () => {
    console.log(`Listening on PORT: ${PORT}`);
});