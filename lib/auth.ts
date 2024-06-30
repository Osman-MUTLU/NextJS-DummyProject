import {NextRequest} from "next/server";
//@ts-ignore
import {getToken} from "next-auth/jwt";
import {cookies} from "next/headers";

export const getJWTFromCookie = async () => {
    let cookieStore = cookies();
    let cookies_str = cookieStore.getAll();
    let request = new NextRequest("http://localhost:3000/api/auth/session", {
        headers: {
            cookie:cookies_str.map((cookie: any) => `${cookie.name}=${cookie.value}`).join("; ")
        }
    });
    return await getToken({
        req: request,
        secret: process.env.NEXTAUTH_SECRET,
        cookieName: process.env.NEXTAUTH_COOKIE_NAME,
    })
}

export const getRoles = async () => {
    const token = await getJWTFromCookie();
    if (!token) {
        return [];
    }
    return token.user.roles;
}
