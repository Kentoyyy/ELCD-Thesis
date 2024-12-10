import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcryptjs";
import User from "@/models/User";
import dbConnect from "@/utils/db";

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    // Google Sign-in
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
    // Credentials Sign-in
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials) {
          throw new Error("Missing credentials");
        }

        const { email, password } = credentials;

        // Hardcoded admin credentials
        const adminEmail = "admin@earlychild.com";
        const adminPassword = "adminpass";

        if (email === adminEmail && password === adminPassword) {
          return {
            id: "admin",
            name: "Admin",
            email: adminEmail,
            role: "admin",
          };
        }

        // Connect to the database
        await dbConnect();

        try {
          const user = await User.findOne({ email });
          if (!user) {
            throw new Error("User not found");
          }

          const isPasswordCorrect = await bcrypt.compare(password, user.password);
          if (!isPasswordCorrect) {
            throw new Error("Invalid password");
          }

          return {
            id: user._id.toString(), // Ensure the ID is a string
            name: user.name,
            email: user.email,
            role: "user",
            parentName: user.parentName,
            childName: user.childName,
            childAge: user.childAge,
            image: user.image || null,
          };
        } catch (error) {
          console.error("Error during authentication:", error);
          throw new Error("Authentication failed");
        }
      },
    }),
  ],
  callbacks: {
    async session({ session, token }: { session: any; token: any }) {
      if (token) {
        session.user = {
          id: token.id,
          name: token.name,
          email: token.email,
          role: token.role,
          parentName: token.parentName || null,
          childName: token.childName || null,
          childAge: token.childAge || null,
          image: token.image || null,
        };
      }
      return session;
    },
    async jwt({ token, user }: { token: any; user?: any }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
        token.role = user.role;
        token.parentName = user.parentName || null;
        token.childName = user.childName || null;
        token.childAge = user.childAge || null;
        token.image = user.image || null;
      }
      return token;
    },
    async signIn({ user, account }: { user: any; account: any }) {
      if (account?.provider === "credentials" || account?.provider === "google") {
        try {
          await dbConnect();
          const updateResult = await User.findOneAndUpdate(
            { email: user.email },
            { lastActive: new Date() }
          );

          if (!updateResult) {
            console.warn("User not found to update lastActive timestamp");
          }
          return true;
        } catch (error) {
          console.error("Error updating lastActive timestamp:", error);
          return false;
        }
      }
      return false;
    },
  },
  pages: {
    signIn: "/login",
    error: "/login",
  },
};

export const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
