import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log("[REGISTER_STEP1] Received request body:", body);

    const { email, firstName, lastName } = body;

    if (!email || !firstName || !lastName) {
      console.log("[REGISTER_STEP1] Missing fields:", { email, firstName, lastName });
      return new NextResponse("Missing required fields", { status: 400 });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new NextResponse("Invalid email format", { status: 400 });
    }

    // Construct the redirect URL
    const redirectPath = `/register/password?email=${encodeURIComponent(email)}&firstName=${encodeURIComponent(firstName)}&lastName=${encodeURIComponent(lastName)}`;
    
    // Return a 303 redirect response
    return NextResponse.redirect(redirectPath, { status: 303 });

  } catch (error) {
    console.error("[REGISTER_STEP1_ERROR]", error);
    return new NextResponse("Invalid request data", { status: 400 });
  }
} 