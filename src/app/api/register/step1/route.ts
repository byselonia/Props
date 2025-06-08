import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log("[REGISTER_STEP1] Received request body:", body);

    const { email, firstName, lastName } = body;

    if (!email || !firstName || !lastName) {
      console.log("[REGISTER_STEP1] Missing fields:", { email, firstName, lastName });
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
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

    // Use 303 See Other to force the browser to use GET for the redirect
    return NextResponse.redirect(new URL(redirectPath, baseUrl), { status: 303 });

  } catch (error) {
    console.error("[REGISTER_STEP1_ERROR]", error);
    return NextResponse.json(
      { error: "Invalid request data" },
      { status: 400 }
    );
  }
} 