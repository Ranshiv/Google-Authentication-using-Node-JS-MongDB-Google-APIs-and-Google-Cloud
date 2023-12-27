const { MongoClient } = require('mongodb');

// Connection URI
const uri = 'mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.1.1';

// Create a new MongoClient
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Connect to the MongoDB server
async function connectToMongoDB() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');

    // You can perform database operations here

    // Example: Print all documents in a collection
    const database = client.db('mydb');
    const collection = database.collection('dbs');
    const documents = await collection.find().toArray();
    console.log('Documents:', documents);
  } finally {
    // Ensure the client is closed when you finish
    await client.close();
    console.log('Disconnected from MongoDB');
  }
}

// Call the connect function
connectToMongoDB();
