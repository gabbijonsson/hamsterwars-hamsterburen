const { MongoClient } = require("mongodb");
const { url, dbName, hamsterCollectionName } = require("./database.js");

function getStats(query, cb) {
	MongoClient.connect(
		url,
		{ useUnifiedTopology: true },
		async (error, client) => {
			if (error) {
				throw new Error("An error occured. Could not connect. ", error);
			}
            const col = client.db(dbName).collection(hamsterCollectionName);
			try {
                let cursor;
                switch (query.category) {
                    case "winners":
                        cursor = await col
							.find()
							.sort({ wins: -1 })
							.limit(5);
                        break;
                    case "losers":
                        cursor = await col
							.find()
							.sort({ defeats: -1 })
                            .limit(5);
                        break;
                    case "oldest":
                        cursor = await col
							.find()
							.sort({ age: -1 })
                            .limit(5);
                        break;
                    case "youngest":
                        cursor = await col
                            .find()
                            .sort({ age: 1 })
                            .limit(5);
                        break;
                    default:
                        break;
                }
				let response = await cursor.toArray();
				cb(response);
			} catch (err) {
				console.log("Invalid query in getStats! " + err);
			} finally {
				client.close();
			}
		}
	);
}

module.exports = {
	getStats,
};