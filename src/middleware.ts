import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
    publicRoutes: [
        "/",
        "/female",
        "/kids",
        "/male",
        "/products",
    ]
});

export const config = {
    matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"]
};