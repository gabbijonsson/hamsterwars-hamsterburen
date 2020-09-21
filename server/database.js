// const { MongoClient } = require("mongodb");
// const fs = require("fs");

let dbPW = "";

try {
    let { databasePW } = process.env.DATABASEPASSWORD;
    dbPW = databasePW;
} catch {
    throw new Error('Could not find .env');
};

if (!dbPW) {
    throw new Error("Please add a password to .env");
}

const url = `mongodb+srv://hamsterburen-user:${dbPW}@hamsterburen.lmwyp.mongodb.net/test?authSource=admin&replicaSet=atlas-hyrfxy-shard-0&readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=true`
const dbName = 'hamsterdata';
const collectionName = 'hamsters';


// function connectToDB() {
//     MongoClient.connect(
//         url, { useUnifiedTopology: true }, async (error, client) => {
//             if(error) {
//                 console.log('Error while connecting to DB ' + error);
//                 return;
//             }
//             const col = client.db(dbName).collection(collectionName)
//             try {
//                 console.log('Connected to ' + col);
//             } catch (err) {
//                 console.log('Error when connecting to collection')
//                 client.close()
//             }
//             client.close()
//         }
//     )
// }

module.exports = {
    url,
    dbName,
    collectionName
}