import { parse } from "url";
import { MongoClient } from "mongodb";

let cachedDb = null;
const uri = process.env.VISITORSDB;

async function connectToDatabase()
{
    if(cachedDb){
        return cachedDb;
    }

    const client = await MongoClient.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    const db = await client.db(parse(uri).pathname.substr(1));

    cachedDb = db;
    console.log("Connected to db")
    return db;
}

export default async (req, res) => {
    try {
        console.log("Inside default log function");

        const db = await connectToDatabase();
        const collection = await db.collection("courses");
        let apos = await collection.find({}).toArray();
        //console.log(apos)
        //console.log("Fetched data")
        res.status(200).json({data:apos})
        }
        catch(error)
        {
            console.log(error);
            res.status(500).send();
        }
};