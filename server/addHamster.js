const { MongoClient } = require("mongodb");
const { url, dbName, hamsterCollectionName } = require("./database.js");
const { newHamsterId } = require("./newHamsterId.js")

function addHamster(newHamster, cb) {
    
	MongoClient.connect(
		url,
		{ useUnifiedTopology: true },
		async (error, client) => {
			if (error) {
				cb("An error occured. Could not connect. " + error);
				return;
			}
            newHamsterId((nextId) => {
			    const col = client.db(dbName).collection(hamsterCollectionName);
			    try {
                    newHamster.id = nextId;
                    newHamster.wins = 0;
                    newHamster.defeats = 0;
                    newHamster.games = 0;
                    col.insertOne(newHamster).catch((err) => {
                        console.log('Could not add hamster ', newHamster)
                        console.log(err);
                    });
                    
                    cb(newHamster);
                } finally {
                    client.close();
                }
            });
		}
	);
}

module.exports = {
	addHamster,
};
