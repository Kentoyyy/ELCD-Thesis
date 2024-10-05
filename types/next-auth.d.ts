// types/next-auth.d.ts
import NextAuth, { DefaultSession, DefaultUser } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      /** The user's unique identifier. */
      id: string;
      name?: string | null;
      email?: string | null;
      role?: string; // Add the role property
    } & DefaultSession["user"];
  }

  interface User extends DefaultUser {
    role?: string; // Add the role property
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    role?: string; // Add the role property
  }
}
