// var mongoClient = require("mongodb").MongoClient;
// mongoClient.connect("mongodb://cosmosdb-ust-todos:YOREihQXrwwvrKJjho4d9LsFHjoc8XdbwjXNAo3TPO256A4fVTiBNkfmC0teCkf32zzt0OBQEb5cp7Cn9CSdwA==@cosmosdb-ust-todos.mongo.cosmos.azure.com:10255/?ssl=true&appName=@cosmosdb-ust-todos@", function (err, db) {
//   db.close();
// });

const MongoClient = require("mongodb").MongoClient;

module.exports = async function (context, req) {
    const URL = process.env.MONGODB_URL;
    const DATABASE_NAME = process.env.MONGODB_DATABASE_NAME;
    const COLLECTION_NAME = process.env.MONGODB_COLLECTION_NAME;

    const connection = await MongoClient.connect(URL, { useUnifiedTopology: true });
    const todoCollection = connection.db(DATABASE_NAME)
        .collection(COLLECTION_NAME);
    
    const results = await todoCollection
        .find({})
        .toArray();
    
    await connection.close();
    
    return {
        body: JSON.stringify(results).replace(/_id/g, "id")
    }
}