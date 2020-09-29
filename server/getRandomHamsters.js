const { MongoClient } = require("mongodb");
const { url, dbName, hamsterCollectionName } = require("./database.js");


function getRandomHamsters(query, cb) {
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
				let dbQuery = [{ $sample: { size: Number(query.count) } }];
				if (query.excludeid && typeof Number(query.excludeid) === 'number') {
					dbQuery.push({
						$match: { id: { $ne: Number(query.excludeid)} },
					});
				}
				const cursor = await col.aggregate(dbQuery);
				const array = await cursor.toArray();
				cb(array);
			} catch (err) {
				console.error("Invalid query! " + err);
			} finally {
				client.close();
			}
		}
	);
}


module.exports = {
	getRandomHamsters
};