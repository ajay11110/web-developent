const express = require('express')
const { MongoClient } = require('mongodb');
const bodyParser = require('body-parser')
let cors = require('cors')
const app = express()
app.use(bodyParser.json())
app.use(cors())
const port = 3000

//connect to monbodb
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const dbName = 'passlock';
client.connect();

//get passwords
app.get('/', async (req, res) => {
    let db = client.db('passlock')
    const collection = db.collection("passwords")
    const findResult = await collection.find({}).toArray();
    res.json(findResult)
})

//save password
app.post('/', async (req, res) => {
    let password = req.body
    let db = client.db('passlock')
    const collection = db.collection("passwords")
    const findResult = await collection.insertOne(password);
    res.send({ success: true, result: findResult })
})

//delete password
app.delete('/', async (req, res) => {
    let password = res.body
    let db = client.db('passlock')
    const collection = db.collection("passwords")
    const findResult = await collection.deleteOne(password);
    res.send({ success: true, result: findResult })
})

app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`)
})