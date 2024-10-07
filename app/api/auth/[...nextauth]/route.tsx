// pages/api/auth/[...nextauth].ts

import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import User from "@/models/User";
import connect from "@/utils/db";

export const authOptions: any = {
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        CredentialsProvider({
            id: "credentials",
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials: any) {
                // Hardcoded admin credentials
                const adminEmail = "admin@earlychild.com";  // Set your admin email
                const adminPassword = "adminpass";       // Set your admin password

                // Check for admin login
                if (credentials.email === adminEmail && credentials.password === adminPassword) {
                    // Return an admin user object
                    return {
                        id: "admin",
                        name: "Admin",
                        email: adminEmail,
                        role: "admin",
                    };
                }

                // Regular user login
                await connect();
                try {
                    const user = await User.findOne({ email: credentials.email });
                    if (user) {
                        const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);
                        if (isPasswordCorrect) {
                            // Return the user object with additional fields
                            return {
                                id: user._id,
                                name: user.name,
                                email: user.email,
                                parentName: user.parentName,
                                childName: user.childName,
                                childAge: user.childAge,
                                image: user.image || null,
                                role: "user",  // Mark them as a regular user
                            };
                        }
                    }
                } catch (err: any) {
                    throw new Error(err);
                }
                return null;
            },
        }),
    ],
    callbacks: {
        async session({ session, token }: { session: any; token: any }) {
            // Attach user/admin data to the session
            if (token) {
                session.user = {
                    id: token.id,
                    name: token.name,
                    email: token.email,
                    role: token.role,  // Role will either be 'admin' or 'user'
                    parentName: token.parentName || null,
                    childName: token.childName || null,
                    childAge: token.childAge || null,
                    image: token.image || null,
                };
            }
            return session;
        },
        async jwt({ token, user }: { token: any; user: any }) {
            if (user) {
                token.id = user.id;
                token.name = user.name;
                token.email = user.email;
                token.role = user.role;  // Ensure role is saved to token
                token.parentName = user.parentName || null;
                token.childName = user.childName || null;
                token.childAge = user.childAge || null;
                token.image = user.image || null;
            }
            return token;
        },
        async signIn({ user, account }: { user: any; account: any }) {
            if (account?.provider === "credentials") {
                return true;
            }
            return false;
        },
    },
    pages: {
        signIn: '/login',
        error: '/login',  // Redirect to login page on error
    },
};

export const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
