    const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const { getRandomHamsters } = require("./getRandomHamsters.js");
const { getSelectedHamster } = require('./getSelectedHamster.js');
const { addHamster } = require('./addHamster.js');
const { addMatch } = require('./addMatch.js');
const { updateCombatant } = require('./updateCombatant.js')

const PORT = process.env.PORT || 1234;

// Middleware

app.use(cors());
app.use(
    (req, res, next) => {
        console.log('LOGGER: ');
        console.log(
            `Method: ${req.method}. URL: ${req.url}.`
            );
            next()
        }
        );
app.use(express.static(__dirname + "/../build/"));
app.use(express.static(__dirname + "/../src/assets/"));
// app.use(express.static(__dirname + "/../public/"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

    
// TODO: ROUTES HERE

// Get # of randomized hamsters based on request query
app.get("/api/gethamsters/random", (req, res) => {
	let query = req.query;
    getRandomHamsters(query, (response) => {
        res.send(response)
    })
});

// Get specified hamsters based on request query
app.get("/api/gethamster", (req, res) => {
	console.log("Query ", req.query);
	getSelectedHamster(req, (response) => {
		res.send(response);
	});
});

// Add a new hamster
app.post("/api/addhamster", (req, res) => {
	addHamster(req.body, (addedHamster) => {
		console.log("Adding hamster.");
		console.log(req.body);
		res.send(addedHamster);
	});
});

app.post("/api/addmatch", (req, res) => {
    addMatch(req.body, () => {
        console.log('Match added');
    })
    updateCombatant(req.body, () => {
        res.send({ message: "Hamsters and match updated." })
    })
})


// START SERVER

app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`);
});