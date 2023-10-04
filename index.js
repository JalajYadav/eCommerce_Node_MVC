const PORT = 3000;
const express = require('express');

const app = express();

// CORS
app.all('/*', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers','Origin,X-Requested-With,Content-Type,Accept');
    next();
})

/*
* START SERVER
*/

app.listen(PORT, () => {
    console.log(`App Listening on port:${PORT}`)
})
