import express from 'express';
import { MongoClient } from 'mongodb';
import { createInterface } from 'readline';
//import pkg from 'body-parser';
//const { json } = pkg;

//const MongoClient = require('mongodb').MongoClient;
//const readline = require('readline');
const app = express();

// Use body-parser middleware to parse JSON requests
app.use(express.json());

const url = 'mongodb://127.0.0.1:27017/wool_processing';
const dbName = 'wool_processing'; // Replace with your actual database name
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
})
const rl = createInterface({
  input: process.stdin,
  output: process.stdout
}); // Replace with user input


app.post('/search', (req, res) => {
  const userLocation = req.body.location;
  MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
    if (err) throw err;

  const db = client.db(dbName);

  // List of table names
  const tableNames = ['shearing', 'scouring', 'sorting', 'combing', 'carding', 'dyeing', 'spinning']; // Add more if needed

  tableNames.forEach((tableName) => {
    const collection = db.collection(tableName);

    collection.find({ location: userLocation }).toArray((err, result) => {
      if (err) throw err;

      if (result.length > 0) {
        console.log(`Found matching location in table ${tableName}:`);
        result.forEach((doc) => {
          console.log(doc);
        });n
      }
    });
  });

  // Close the connection
  client.close();
  rl.close();
});

});
