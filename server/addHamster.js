const { MongoClient } = require("mongodb");
const { url, dbName, collectionName } = require("./database.js");

function addHamster(newHamster, cb) {
	MongoClient.connect(
		url,
		{ useUnifiedTopology: true },
		async (error, client) => {
			if (error) {
				cb("An error occured. Could not connect. " + error);
				return;
			}
			const col = client.db(dbName).collection(collectionName);
			try {
				const response = await col.insertOne(newHamster);
				cb(response.result);
			} catch (err) {
				console.log("Invalid query! " + err);
			} finally {
				client.close();
			}
		}
	);
}

module.exports = {
	addHamster,
};
