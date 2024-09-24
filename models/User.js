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
        resetToken: {
            type: String,   // This will store the reset token for password reset
        },
        resetTokenExpiry: {
            type: Date,   // This will store the expiry time of the reset token
        },
    },
    { timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", userSchema);
