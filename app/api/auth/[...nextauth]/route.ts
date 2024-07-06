import NextAuth, { AuthOptions, Session } from "next-auth";
import { JWT } from "next-auth/jwt";

//TODO: import the correct provider and edit callbacks

import Credentials from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import { pages } from "next/dist/build/templates/app-page";

const cookies = {
  sessionToken: {
    name: `next-auth.session-token`,
    options: {
      httpOnly: true,
      sameSite: "none",
      path: "/",
      domain: process.env.NEXT_PUBLIC_DOMAIN,
      secure: true,
    },
  },
};

export const authOptions: AuthOptions = {
  providers: [
    Credentials({
      name: "credentials",
      id: "credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials, req) {
        const response = await fetch(
          `${process.env.NEXT_API_URL}/api/auth/login`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: credentials?.email,
              password: credentials?.password,
            }),
          }
        );

        const data = await response.json();
        if (response.ok && data?.token) {
          return data;
        }
        return Promise.reject(new Error(data?.detail));
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID ?? "",
      clientSecret: process.env.GITHUB_CLIENT_SECRET ?? ""
    }),
    
  ],
  session: {
    strategy: "jwt",
    maxAge: 30 * 60,
  },
  cookies: cookies,
  //TODO: create own sign in page
  pages: {
    signIn: "/sign-in",
  },
  callbacks: {
    async signIn(params: {
      user: any;
      account: any;
      profile?: any;
      email?: any;
      credentials?: any;
    }) {
      const { account, profile } = params;
      //console.log("signIn", params);
      if (account.provider === "google") {
        return profile.email_verified === true;
      }
      return true; // Do different verification for other providers that don't have `email_verified`
    },
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },

    async jwt({ token, user }: { token: JWT; user?: {} }) {
      //@ts-ignore
      if (user?.email) {
        return { ...token, ...user };
      }
      return { ...token, ...user };
    },
    async session({
      session,
      token,
    }: {
      session: Session;
      token: JWT;
    }): Promise<Session> {
      session.user = token;
      return Promise.resolve(session);
    },
  },
};

//@ts-ignore
export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
