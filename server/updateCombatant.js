const { MongoClient } = require("mongodb");
const { url, dbName, hamsterCollectionName } = require("./database.js");

function updateCombatant(newStats, cb) {
    MongoClient.connect(
        url,
        { useUnifiedTopology: true },
        async (error, client) => {
            if (error) {
                throw new Error(
                    "An error occured. Could not connect. ", error
                );
            }
            const col = client.db(dbName).collection(hamsterCollectionName);
            try {
                let winner = Number(newStats.winner)
                let loser = Number(newStats.loser)
                const winnerDoc = await col.updateOne(
                    { "id": winner },
                    { $inc: {"wins": 1, "games": 1 } }
                )
                const loserDoc = await col.updateOne(
                    { "id": loser },
                    { $inc: {"defeats": 1, "games": 1 } }
                )
            } catch (err) {
                console.log("Could not update hamsters");
            } finally {
                cb();
                client.close();
            }
        }
    )
}

module.exports = {
    updateCombatant
}