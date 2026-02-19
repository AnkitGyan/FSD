const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const dbName = 'TestDB';

async function updateUser() {
    const client = new MongoClient(url);

    try {
        await client.connect();
        console.log("Connected to MongoDB");

        const db = client.db(dbName);
        const result = await db.collection('Test').updateOne(
            { name: 'John' },
            { $set: { age: 30 } }
        );

        console.log(result);
    } catch (err) {
        console.log(err);
    } finally {
        await client.close();
    }
}

updateUser();
