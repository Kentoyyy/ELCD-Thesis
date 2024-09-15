// app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth";
import { Account, User as AuthUser } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import User from "@/models/User";
import connect from "@/utils/db";

export const authOptions: any = {
    // Configure one or more authentication providers
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
                await connect();
                try {
                    const user = await User.findOne({ email: credentials.email });
                    if (user) {
                        const isPasswordCorrect = await bcrypt.compare(
                            credentials.password,
                            user.password
                        );
                        if (isPasswordCorrect) {
                            // Return the user object with additional fields
                            return {
                                id: user._id,
                                name: user.name,
                                email: user.email,
                                parentName: user.parentName,
                                childName: user.childName,
                                childAge: user.childAge,
                                image: user.image || null, // Add image if applicable
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
        async session({ session, user }: { session: any; user: any }) {
            // Attach user data to the session
            if (user) {
                session.user = {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    parentName: user.parentName,
                    childName: user.childName,
                    childAge: user.childAge,
                    image: user.image || null,
                };
            }
            return session;
        },
        async signIn({ user, account }: { user: AuthUser; account: Account }) {
            if (account?.provider === "credentials") {
                return true;
            }
            return false;
        },
    },
};

export const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
