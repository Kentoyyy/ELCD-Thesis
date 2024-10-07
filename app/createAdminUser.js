import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import User from "@/models/User"; // Ensure the correct path
import connect from "@/utils/db"; // Ensure the correct path

const createAdminUser = async () => {
    await connect();

    const adminEmail = 'admin@example.com'; // Set your admin email
    const adminPassword = 'admin123'; // Set your admin password

    const existingAdmin = await User.findOne({ email: adminEmail });

    if (existingAdmin) {
        console.log('Admin user already exists!');
        return;
    }

    const hashedPassword = await bcrypt.hash(adminPassword, 10);
    const adminUser = new User({
        name: 'Admin User', // Admin's name
        email: adminEmail,
        password: hashedPassword,
        parentName: 'Parent Name', // Required field
        childName: 'Child Name', // Required field
        childAge: 5, // Set a default age
        role: 'admin', // Set user role to admin
    });

    await adminUser.save();
    console.log('Admin user created!');
    mongoose.connection.close();
};

createAdminUser().catch((error) => {
    console.error(error);
    mongoose.connection.close();
});
