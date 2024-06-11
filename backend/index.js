const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');

const app = express();

require('dotenv').config()
const port = process.env.PORT || 5000;

// app.use(cors());
// app.use(express.json());

//mongodb connection


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@mie-tutor.buuokt2.mongodb.net/?retryWrites=true&w=majority&appName=MiE-Tutor`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    //create a database and collections for each others

    const database = client.db("MiE-Tutor");
    const userCollection = database.collection("users");
    const classesCollection = database.collection("classes");
    const cartCollection = database.collection("cart");
    const paymentCollection = database.collection("payment");
    const enrolledCollection = database.collection("enrolled");
    const appliedCollection = database.collection("applied");
 
    //classes routes here

    app.post('/new-class', async (req,res) => {
        const newClass = req.body;
        //newClass.avilableseats = parseInt(newClass.availableSeats);
        const result = await classesCollection.insertOne(newClass);
        res.send(result);
    });




    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);




app.get('/', (req,res) => {
    res.send('Hello Developers 2024');
});

app.listen(port, ()=>{
    console.log(`App listening on port ${port}`);
});