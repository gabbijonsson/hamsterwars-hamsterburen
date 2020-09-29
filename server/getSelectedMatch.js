const { MongoClient } = require("mongodb");
const { url, dbName, matchCollectionName } = require("./database.js");

function getSelectedMatch(req, cb) {
	MongoClient.connect(
		url,
		{ useUnifiedTopology: true },
		async (error, client) => {
			if (error) {
				cb("An error occured. Could not connect. " + error);
				return;
			}
			const col = client.db(dbName).collection(matchCollectionName);
			try {
                let matchId = Number(req.query.id);
                const match = await col.findOne({ matchID: matchId });
				cb(match);
			} catch (err) {
				console.error("Invalid query! " + err);
			} finally {
				client.close();
			}
		}
	);
}

module.exports = {
	getSelectedMatch,
};
