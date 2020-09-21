const { MongoClient } = require("mongodb");
const { url, dbName, collectionName } = require("./database.js");

function getSelectedHamster(query, cb) {
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
				const hamster = await col.findOne(query.id);
				cb(hamster);
			} catch (err) {
				console.log("Invalid query! " + err);
			} finally {
				client.close();
			}
		}
	);
}

module.exports = {
	getSelectedHamster,
};