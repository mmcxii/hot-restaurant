const express = require('express');
const app = express();
const tableRoute = require('./app/routes/api/tables');


const PORT = process.env.port || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api/', tableRoute);

app.listen(PORT, () => {
    console.log(`Listening on PORT: ${PORT}`);
});