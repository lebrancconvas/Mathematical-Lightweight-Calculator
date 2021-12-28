const express = require('express');
const app = express();

const port = process.env.port || 3002;

app.get('/', (req, res) => {
    res.send("Server is working.");
})

app.listen(port, () => {
    console.log(`Server is listening to the port: ${port}`);
})