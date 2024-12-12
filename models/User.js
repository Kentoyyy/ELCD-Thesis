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
      enum: ["admin", "user"],
      default: "user",
      required: true,
    },
    resetToken: String,
    resetTokenExpiry: Date,
    lastActive: {
      type: Date,
      default: Date.now, // Default to current time when created
    },
    dyslexiaRisk: {
      type: String,
      enum: ["No risk", "Low risk", "Medium risk", "High risk"],
      default: "No risk",
    },
  },
  { timestamps: true } // This automatically adds createdAt and updatedAt fields
);

export default mongoose.models.User || mongoose.model("User", userSchema);
