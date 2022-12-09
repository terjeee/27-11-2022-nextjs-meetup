import { MongoClient } from "mongodb";

// url = /api/new-meetup

export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.data;

    const client = await MongoClient.connect(
      "mongodb+srv://admin:123@cluster0.rwpguft.mongodb.net/?retryWrites=true&w=majority"
    );

    const database = client.db();

    const collectionMeetups = database.collection("meetups");

    const result = await collectionMeetups.insertOne(data);

    client.close();

    res.status(201).json({ message: "Meetup Added!" });
  }
}
