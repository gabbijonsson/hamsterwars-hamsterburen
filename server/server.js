const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const { getRandomHamsters } = require('./database.js')

const port = 1234;

app.use(express.static(__dirname + "src"));
app.use(express.static(__dirname + "public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// TODO: ROUTES HERE

// Get # of randomized hamsters based on request query
app.get("/gethamsters/random", (req, res) => {
    let query = req.query;
    getRandomHamsters(query, (response) => {
        console.log("Response from get random hamsters: ")
        console.log(response);
        res.send(response)
    })
});


// START SERVER

app.listen(port, () => {
    console.log("Server is listening on port: " + port);
});