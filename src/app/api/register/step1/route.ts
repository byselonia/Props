import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email, firstName, lastName } = await request.json();

    if (!email || !firstName || !lastName) {
      return new NextResponse("Missing required fields", { status: 400 });
    }

    // Construct the base URL using headers to get the correct host and protocol
    const protocol = request.headers.get('x-forwarded-proto') || (request.url.startsWith('https') ? 'https' : 'http');
    const host = request.headers.get('host');

    if (!host) {
      // Fallback or error if host header is missing (shouldn't happen in most environments)
      return new NextResponse("Host header missing", { status: 500 });
    }

    const baseUrl = `${protocol}://${host}`;

    // Redirect to the second registration page with data as query parameters
    const redirectPath = `/register/password?email=${encodeURIComponent(email)}&firstName=${encodeURIComponent(firstName)}&lastName=${encodeURIComponent(lastName)}`;

    return NextResponse.redirect(new URL(redirectPath, baseUrl));

  } catch (error) {
    console.error("[REGISTER_STEP1_ERROR]", error);
    return new NextResponse("Something went wrong", { status: 500 });
  }
} 