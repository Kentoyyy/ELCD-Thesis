import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcryptjs";
import User from "@/models/User";
import dbConnect from "@/utils/db";

export const authOptions: any = {
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
      async authorize(credentials: any) {
        // Hardcoded admin credentials
        const adminEmail = "admin@earlychild.com";
        const adminPassword = "adminpass";

        if (credentials.email === adminEmail && credentials.password === adminPassword) {
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
          const user = await User.findOne({ email: credentials.email });
          if (user) {
            const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);
            if (isPasswordCorrect) {
              return {
                id: user._id,
                name: user.name,
                email: user.email,
                parentName: user.parentName,
                childName: user.childName,
                childAge: user.childAge,
                image: user.image || null,
                role: "user",
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
    async jwt({ token, user }: { token: any; user: any }) {
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
          await User.findOneAndUpdate(
            { email: user.email },
            { lastActive: Date.now() }
          );
          return true;
        } catch (err) {
          console.error("Error updating lastActive:", err);
          return false;
        }
      }
      return false;
    },
  },
  pages: {
    signIn: '/login',
    error: '/login',
  },
};

export const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
