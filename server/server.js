const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const { getRandomHamsters } = require("./getRandomHamsters.js");
const { getSelectedHamster } = require('./getSelectedHamster.js');
const { addHamster } = require('./addHamster.js');
const { addMatch } = require('./addMatch.js');
const { updateCombatant } = require('./updateCombatant.js')
const { getMatchCount } = require('./getMatchCount.js')
const { getStats } = require('./getStats.js');
const { getSelectedMatch } = require('./getSelectedMatch.js');

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
    if(!isNaN(Number(query.count))) {
        getRandomHamsters(query, (response) => {
            res.send(response)
        })
    } else {
        res.send('Invalid query. Count has to be a number.')
    }
});

// Get specified hamsters based on request query
app.get("/api/gethamster", (req, res) => {
    if(!isNaN(Number(req.query.id))) {
        getSelectedHamster(req, (response) => {
            res.send(response);
        })
    } else {
        res.send('Invalid query. ID has to be a number.')
    }
});

// Add a new hamster
app.post("/api/addhamster", (req, res) => {
	let invalidKey;
	if (typeof req.body.name !== "string") {
		invalidKey = "Invalid request. Name has to be a string.";
	} else if (isNaN(Number(req.body.age))) {
		invalidKey = "Invalid request. Age has to be a number.";
	} else if (typeof req.body.favFood !== "string") {
		invalidKey = "Invalid request. Favourite food has to be a string.";
	} else if (typeof req.body.loves !== "string") {
		invalidKey = "Invalid request. Loves has to be a string.";
	} else if (typeof req.body.imgName !== "string") {
		invalidKey = "Invalid request. Imagename has to be a string.";
    }
    if (!invalidKey) {
        addHamster(req.body, (addedHamster) => {
            res.send(addedHamster);
        });
    } else {
        res.send(invalidKey);
    }
});

// Add a new matchresult and update the winner / loser hamsters
app.post("/api/addmatch", (req, res) => {
    addMatch(req.body, () => {
    })
    updateCombatant(req.body, () => {
        res.send({ message: "Hamsters and match updated." })
    })
})

// Returns the highest MatchID, which is also the number of matches in the database
app.get("/api/getmatchcount", (req, res) => {
    getMatchCount((matchCount) => {
        res.send(matchCount + '')
    })
})

// Returns the match specified in reqeust query
app.get("/api/getmatch", (req, res) => {
    getSelectedMatch(req, (response) => {
        res.send(response);
    });
});

// Get statistics from the database based on order param
app.get("/api/getstats", (req, res) => {
    getStats(req.query, (response) => {
        res.send(response);
    })
})


// START SERVER

app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`);
});