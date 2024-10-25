import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import dotenv from 'dotenv';
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import client from "@/lib/db";

dotenv.config();

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    }),
  ],
  adapter: MongoDBAdapter(client),
})