const { MongoClient } = require("mongodb");
const { url, dbName, collectionName } = require("./database.js");

function newHamsterId(cb, newId) {
	
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
                const cursor = await col.find().sort({"id":-1}).limit(1);
                let response = await cursor.toArray();
                console.log('Response is: ')
                console.log(response);
                let currentId = response[0].id;
                console.log('Current ID = ', currentId);
				newId(currentId + 1);
			} catch (err) {
				console.log("Invalid query in newHamsterId! " + err);
			} finally {
				client.close();
			}
		}
	);
}

module.exports = {
	newHamsterId,
};
