const { MongoClient } = require("mongodb");
const { url, dbName, hamsterCollectionName } = require("./database.js");

function newHamsterId(cb) {
	MongoClient.connect(
		url,
		{ useUnifiedTopology: true },
		async (error, client) => {
			if (error) {
                throw new Error(
					"An error occured. Could not connect. " + error
				);
			}
			const col = client.db(dbName).collection(hamsterCollectionName);
			try {
				const cursor = await col.find().sort({ id: -1 }).limit(1);
				let response = await cursor.toArray();
				let currentId = response[0].id;
				cb(currentId + 1);
			} catch (err) {
				console.error("Invalid query in newHamsterId! " + err);
			} finally {
				client.close();
			}
		}
	);
}

module.exports = {
	newHamsterId,
};
