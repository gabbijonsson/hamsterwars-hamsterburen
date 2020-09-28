const { MongoClient } = require("mongodb");
const { url, dbName, matchCollectionName } = require("./database.js");

function getMatchCount(cb) {
    MongoClient.connect(
        url,
        { useUnifiedTopology: true },
        async (error, client) => {
            if (error) {
                throw new Error(
                    "An error occured. Could not connect. ", error
                );
            }
            const col = client.db(dbName).collection(matchCollectionName);
            try {
                const cursor = await col.find().sort({ matchID: -1 }).limit(1);
				let response = await cursor.toArray();
                let currentId = response[0].matchID;
				cb(currentId);
            } catch (err) {
				console.error("Invalid query in getMatchCount! " + err);
			} finally {
				client.close();
			}
        }
    )
}


module.exports = {
    getMatchCount
}