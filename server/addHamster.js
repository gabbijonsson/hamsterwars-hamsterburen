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
                col.findOne({
                    $or: [
                        { name: newHamster.name },
                        { imgName: newHamster.imgName }
                    ]
                }).then((alreadyExist) => {
                    if(alreadyExist) {
                        cb(alreadyExist);
                    } else {
                        try {
                            newHamster.id = nextId;
                            newHamster.wins = 0;
                            newHamster.defeats = 0;
                            newHamster.games = 0;
                            col.insertOne(newHamster).catch((err) => {
                                console.error('Could not add hamster ', newHamster)
                                console.error(err);
                            });
                            
                            cb(newHamster);
                        } finally {
                            client.close();
                        }
                    }
                })
            });
		}
	);
}

module.exports = {
	addHamster,
};
