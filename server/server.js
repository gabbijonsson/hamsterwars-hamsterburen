const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const { getRandomHamsters } = require('./getRandomHamsters.js')

const port = 1234;

// Middleware
app.use(
    (req, res, next) => {
        console.log('LOGGER: ');
        console.log(`Method: ${req.method}. URL: ${req.url}. Query: ${req.query}`)
        next()
    }
);
app.use(express.static(__dirname + "src"));
app.use(express.static(__dirname + "public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// TODO: ROUTES HERE

// Get # of randomized hamsters based on request query
app.get("/gethamsters/random", (req, res) => {
    let query = req.query;
    getRandomHamsters(query, (response) => {
        res.send(response)
    })
});


// START SERVER

app.listen(port, () => {
    console.log("Server is listening on port: " + port);
});