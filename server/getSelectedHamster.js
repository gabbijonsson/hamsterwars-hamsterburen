const { MongoClient } = require("mongodb");
const { url, dbName, collectionName } = require("./database.js");

function getSelectedHamster(req, cb) {
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
				const hamster = await col.findOne(Number(req.param.id));
				console.log('Hamster is ', hamster)
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
	getSelectedHamster
};