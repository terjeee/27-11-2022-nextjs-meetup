import { MongoClient } from "mongodb";

// url = /api/new-meetup

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const data = req.data;

      const client = await MongoClient.connect(
        "mongodb+srv://admin:CSXKsONjiLxacqZJ@cluster0.rwpguft.mongodb.net/?retryWrites=true&w=majority"
      );

      const db = client.db();

      const collectionMeetups = db.collection("meetups");

      const result = await collectionMeetups.insertOne(data);
      console.log(result);

      client.close();

      res.status(201).json({ message: "Meetup Added!" });
    } catch (error) {
      console.log(error);
    }
  }
}
