// pages/api/users/updateLastActive.js
import dbConnect from "../../../lib/dbConnect"; 
import User from "../../../models/User";

export default async function handler(req, res) {
  if (req.method === "PATCH") {
    const { email } = req.body;

    try {
      await dbConnect(); // Connect to your database

      const user = await User.findOneAndUpdate(
        { email },
        { lastActive: Date.now() }, // Update lastActive to the current time
        { new: true }
      );

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      return res.status(200).json(user);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  } else {
    res.setHeader("Allow", ["PATCH"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
