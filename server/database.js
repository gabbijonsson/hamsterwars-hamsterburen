// const { MongoClient } = require("mongodb");
// const fs = require("fs");
require("dotenv").config();

let dbPW = "";

try {
    dbPW = process.env.DB_PASS;
} catch {
    throw new Error('Could not find .env');
};

if (!dbPW) {
    throw new Error("Please add a password to .env");
}

const url = `mongodb+srv://hamsterburen-user:${dbPW}@hamsterburen.lmwyp.mongodb.net/test?authSource=admin&replicaSet=atlas-hyrfxy-shard-0&readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=true`
const dbName = 'hamsterdata';
const hamsterCollectionName = 'hamsters';
const matchCollectionName = 'matches';

module.exports = {
    url,
    dbName,
    hamsterCollectionName,
    matchCollectionName
}