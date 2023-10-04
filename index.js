const PORT = 3000;
const express = require('express');
const expressSession = require('express-session');
const memoryStore = new expressSession.MemoryStore();
const bodyParser = require('body-parser');

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

app.use(expressSession({
    resave: false, // don't save session if unmodified
    saveUninitialized: false, // don't create session until something stored
    secret: 'keyboard cat',
    store: memoryStore,
    cookie: {
        maxAge: 24 * 60 * 60 * 1000, // 24 hours in milliseconds
    }
}));

app.get("/helloWorld", (req, res) => {
    console.log("Hello world route was hit");
    res.send("Thank You for hitting hello world route 👍");
})

app.post("/login", (req, res) => {
    console.log("ExpressSessionMemoryStore", memoryStore)
    const { username, password } = req.body;
    if (username && password) {
        if (req.session.authenticated) {
            res.json({ msg: "You are already authenticated", session: req.session })
        }
        else {
            if (username === "admin" && password === "admin") {
                req.session.authenticated = true;
                req.session.user = {
                    userName: username,
                    password
                }
                res.json({ msg: "You have logged in Welcome👋", session: req.session })
            } else {
                res.status(403).json({ msg: "Incorrect Credentials, Authentication Failed" });
            }
        }
    } else {
        res.status(400).json({ msg: "Bad Request" })
    }
})

/*
* START SERVER
*/

app.listen(PORT, () => {
    console.log(`App Listening on port:${PORT}`)
})
