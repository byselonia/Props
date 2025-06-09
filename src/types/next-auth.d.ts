import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      email: string;
      firstName: string;
      username: string;
      image?: string;
    }
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    firstName: string;
    username: string;
  }
} 