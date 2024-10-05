// models/User.js
import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    parentName: {
      type: String,
      required: true,
    },
    childName: {
      type: String,
      required: true,
    },
    childAge: {
      type: Number,
      required: true,
    },
    role: {
      type: String,
      enum: ["admin", "user"], // Define roles
      default: "user",
      required: true,
    },
    resetToken: String,
    resetTokenExpiry: Date,
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", userSchema);
