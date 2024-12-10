import connect from "@/utils/db";
import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

const MONGO_URI = "mongodb://localhost:27017";
const client = new MongoClient(MONGO_URI);

export const GET = async () => {
  try {
    await client.connect();
    const db = client.db("phonological_test");
    const collection = db.collection("test_results");
    const results = await collection.find().toArray();
    return NextResponse.json(results);
  } catch (error) {
    return new NextResponse("Failed to fetch results", { status: 500 });
  }
};
