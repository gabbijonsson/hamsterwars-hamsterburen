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
			// try {
			// 	let dbQuery = [{ $sample: { size: Number(query.count) } }];
			// 	if (query.excludeid && typeof Number(query.excludeid) === 'number') {
			// 		dbQuery.push({
			// 			$match: { id: { $ne: Number(query.excludeid)} },
			// 		});
			// 	}
			// 	const cursor = await col.aggregate(dbQuery);
			// 	const array = await cursor.toArray();
			// 	cb(array);
			try {
				let randomHamsters = [];
				let dbQuery = {};
				if(query.excludeid) {
					dbQuery = { id: { $ne: Number(query.excludeid) } };
				}
				const cursor = await col.find(dbQuery).sort({ games: 1 }).limit(10);
				let arrayOfHamsters = await cursor.toArray();
				for (let index = 0; index < Number(query.count); index++) {
					let randomHamster = arrayOfHamsters.splice(
						Math.floor(Math.random() * arrayOfHamsters.length),
						1
					);
					randomHamsters.push(randomHamster[0]);
				}
				console.log(randomHamsters);
				cb(randomHamsters);
			} catch (err) {
				console.error("Invalid query! " + err);
				cb(err)
			} finally {
				client.close();
			}
		}
	);
}


module.exports = {
	getRandomHamsters
};