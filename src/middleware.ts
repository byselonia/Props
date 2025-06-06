import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/login",
  },
});

export const config = {
  matcher: [
    "/home/:path*",
    "/market/:path*",
    "/create/:path*",
    "/social/:path*",
    "/profile/:path*",
  ],
}; 