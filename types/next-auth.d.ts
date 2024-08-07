import { getServerSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    token?: string;
    error?: string;
    user?: {};
    expires?: string;
  }

  interface AuthOptions {}

  function getServerSession(): Promise<Session | null>;
}

declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
    expires: string;
    refresh_token: string;
    token: string;
    user: {};
    exp?: number;
    iat?: number;
  }
}
