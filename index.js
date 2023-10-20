const bodyParser = require('body-parser');
const PORT = 5000;
const express = require('express');
const appRoutes = require('./routes/index.routes');

const app = express();
app.use(bodyParser.urlencoded({ extended: false })); // PARSE application/x-www-form-urlencoded
app.use(bodyParser.json()); // PARSE application/json

// CORS
app.all('/*', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin,X-Requested-With,Content-Type,Accept');
    next();
})

//Attach All Routes
appRoutes(app);

/*
* START SERVER
*/

app.listen(PORT, () => {
    console.log(`App Listening on port:${PORT}`)
})
