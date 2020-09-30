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
				let dbQuery = {};
				if(!isNaN(Number(req.query.id))) {
					let hamsterID = Number(req.query.id);
					dbQuery = { id: hamsterID };
				} else {
					let hamsterID = (req.query.id);
					dbQuery = { name: hamsterID }
				}
				const hamster = await col.findOne( dbQuery );
				cb(hamster);
			} catch (err) {
				console.error("Invalid query! " + err);
			} finally {
				client.close();
			}
		}
	);
}

module.exports = {
	getSelectedHamster
};