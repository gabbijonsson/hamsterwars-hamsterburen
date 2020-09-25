const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const cors = require('cors');
const { getRandomHamsters } = require("./getRandomHamsters.js");
const { getSelectedHamster } = require('./getSelectedHamster.js');
const { addHamster } = require('./addHamster.js');
const fileUpload = require('express-fileupload');
const path = require('path');

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
app.use(express.static(path.join(__dirname, "../assets")));
app.use(express.static(path.join(__dirname, "/assets")));
// app.use(express.static(__dirname + "/../public/"));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(bodyParser.json({ limit: '50mb'}));
app.use(fileUpload());

    
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
    console.log('req before writefile is ', req);
    try {
		const fileStr = req.body.data;
		console.log('file in server.js' ,fileStr);
	} catch (error) {
		console.error(error)
	}
	addHamster(req.body, (addedHamster) => {
		console.log("Adding hamster.");
		console.log(req.body);
		res.send(addedHamster);
	});
});



// START SERVER

app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`);
});