const { MongoClient } = require("mongodb");
const { url, dbName, matchCollectionName } = require("./database.js");
const { newMatchId } = require("./newMatchId.js")

function addMatch(newMatch, cb) {
    
	MongoClient.connect(
		url,
		{ useUnifiedTopology: true },
		async (error, client) => {
			if (error) {
				throw new Error(
                    "An error occured. Could not connect. ", error
                );
			}
            newMatchId((nextId) => {
			    const col = client.db(dbName).collection(matchCollectionName);
			    try {
                    newMatch.matchID = nextId;
                    col.insertOne(newMatch).catch((err) => {
                        console.error('Could not add match ', newMatch)
                        console.error(err);
                    });
                    
                } finally {
                    cb(newMatch);
                    client.close();
                }
            });
		}
	);
}



module.exports = {
    addMatch
}