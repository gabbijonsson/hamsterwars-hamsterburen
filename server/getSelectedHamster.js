const { MongoClient } = require("mongodb");
const { url, dbName, hamsterCollectionName } = require("./database.js");

function getSelectedHamster(req, cb) {
	MongoClient.connect(
		url,
		{ useUnifiedTopology: true },
		async (error, client) => {
			if (error) {
				cb("An error occured. Could not connect. " + error);
				return;
			}
			const col = client.db(dbName).collection(hamsterCollectionName);
			try {
				let hamsterID = Number(req.query.id);
				const hamster = await col.findOne( {id: hamsterID} );
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