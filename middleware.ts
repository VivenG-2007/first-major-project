import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
    matcher: [
        // Ensure all routes are checked by Clerk middleware except static files
        '/((?!_next/static|_next/image|favicon.ico).*)',
    ],
};
