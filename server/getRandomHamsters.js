const { MongoClient } = require("mongodb");
const { url, dbName, collectionName } = require("./database.js");


function getRandomHamsters(query, cb) {
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
				const cursor = await col.aggregate([
					{ $sample: { size: Number(query.count) } },
				]);
				const array = await cursor.toArray();
				cb(array);
			} catch (err) {
				console.log("Invalid query! " + err);
			} finally {
				client.close();
			}
		}
	);
}


module.exports = {
	getRandomHamsters
};