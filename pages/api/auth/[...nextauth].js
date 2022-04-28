import NextAuth from 'next-auth';
import CredentialsProvider  from 'next-auth/providers/credentials';
import GoogleProvider from "next-auth/providers/google";
import { MongoClient } from 'mongodb';
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import { compare } from 'bcryptjs';
import clientPromise from "../../../mongo/mongodb";

export default NextAuth({
    session: {
        jwt: true,
    },
    adapter: MongoDBAdapter(clientPromise),

    providers: [
        CredentialsProvider({
            credentials: {
                email: { label: "email", type: "text" },
                password: {  label: "password", type: "password" },
                fName: {  label: "first-name", type: "text" },
                lName: {  label: "last-name", type: "text" },
                countryValue: { label: "country value", type: "text" },
                zipCode: { label: "Zip Code", type: "text" },
            },
            async authorize(credentials) {
                const client = await MongoClient.connect(
                    process.env.MONGODB_URI,
                    { useNewUrlParser: true, useUnifiedTopology: true }
                );
                const users = await client.db().collection('users');
                const result = await users.findOne({
                    email: credentials.email,
                });
                console.log('serv-res', result)
                if (!result) {
                    client.close();
                    throw new Error('No user found with the email');
                }
                const checkPassword = await compare(credentials.password, result.password);
                if (!checkPassword) {
                    client.close();
                    throw new Error('Password doesnt match');
                }
                client.close();
                return { email: result.email };
            },
        }),       
    ],
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            const isAllowedToSignIn = true
            if (isAllowedToSignIn) {
                return true
            } else {
                return false
            }
        },
        async redirect({ url, baseUrl }) {
          return baseUrl
        },
        async session({ session, user, token }) {
          return session
        },
        async jwt({ token, user, account, profile, isNewUser }) {
          return token
        },
    },
    secret: process.env.JWT_SECRET_KEY,
    pages: {
        signIn: "/signIn",
        signOut: '/signin',
    },
    verificationRequest: true,
    debug: true,
});