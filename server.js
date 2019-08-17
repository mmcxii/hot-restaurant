const express = require('express');
const app = express();

const PORT = process.env.port || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, () => {
    console.log(`Listening on PORT: ${PORT}`);
})
