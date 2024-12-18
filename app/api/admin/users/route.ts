import User from "@/models/User";
import connect from "@/utils/db";
import { NextResponse } from "next/server";
import { MongoClient, ObjectId } from "mongodb";

const MONGO_URI = "mongodb://localhost:27017";
const client = new MongoClient(MONGO_URI);

export const GET = async () => {
  await connect();

  try {

    await client.connect();
    const db = client.db("phonological_test");
    const testResultsCollection = db.collection("test_results");

    const users = await User.find();

    const testResults = await testResultsCollection.find().toArray();


    const usersWithResults = users.map((user) => {
      const testResult = testResults.find(
        (result) => result.user_id.toString() === user._id.toString()
      );
      return {
        ...user.toObject(),
        dyslexiaRisk: testResult ? testResult.risk_category : "No test result",
      };
    });

    return NextResponse.json(usersWithResults);
  } catch (error) {
    console.error("Error fetching users with test results:", error);
    return new NextResponse("Failed to fetch users", { status: 500 });
  } finally {
    await client.close();
  }
};
