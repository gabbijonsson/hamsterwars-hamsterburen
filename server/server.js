const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const { getRandomHamsters } = require("./getRandomHamsters.js");
const { getSelectedHamster } = require('./getSelectedHamster.js');
const { addHamster } = require('./addHamster.js');

const port = process.env.PORT || 1234;

// Middleware
app.use(
    (req, res, next) => {
        console.log('LOGGER: ');
        console.log(
            `Method: ${req.method}. URL: ${req.url}.`
            );
            next()
        }
        );
app.use(express.static(__dirname + "src"));
app.use(express.static(__dirname + "public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
        
// TODO: ROUTES HERE

// Get # of randomized hamsters based on request query
app.get("/gethamsters/random", (req, res) => {
	let query = req.query;
    getRandomHamsters(query, (response) => {
        res.send(response)
    })
});

// Get specified hamsters based on request query
app.get("/gethamster", (req, res) => {
    console.log('Query ', req.query);
    getSelectedHamster(req, (response) => {
        res.send(response)
    })
});

// Add a new hamster
app.post("/addhamster", (req, res) => {
    addHamster(req.body, (response) => {
        console.log('Adding hamster. Req. body is: ');
        console.log(req.body);
        res.send(response)
    })
})


// START SERVER

app.listen(port, () => {
    console.log("Server is listening on port: " + port);
});