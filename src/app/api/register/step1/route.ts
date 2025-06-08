import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    console.log("[REGISTER_STEP1] Request received");
    
    // Log request headers
    const headers = Object.fromEntries(request.headers.entries());
    console.log("[REGISTER_STEP1] Request headers:", headers);

    // Get and parse the request body
    const body = await request.json();
    console.log("[REGISTER_STEP1] Raw request body:", body);

    const { email, firstName, lastName } = body;
    console.log("[REGISTER_STEP1] Parsed data:", { email, firstName, lastName });

    // Validate required fields
    if (!email || !firstName || !lastName) {
      console.log("[REGISTER_STEP1] Missing fields:", { 
        hasEmail: !!email, 
        hasFirstName: !!firstName, 
        hasLastName: !!lastName 
      });
      return new NextResponse("Missing required fields", { status: 400 });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.log("[REGISTER_STEP1] Invalid email format:", email);
      return new NextResponse("Invalid email format", { status: 400 });
    }

    // Construct the redirect URL
    const redirectPath = `/register/password?email=${encodeURIComponent(email)}&firstName=${encodeURIComponent(firstName)}&lastName=${encodeURIComponent(lastName)}`;
    console.log("[REGISTER_STEP1] Redirecting to:", redirectPath);
    
    // Return a 303 redirect response
    return NextResponse.redirect(redirectPath, { status: 303 });

  } catch (error) {
    console.error("[REGISTER_STEP1_ERROR]", error);
    if (error instanceof SyntaxError) {
      return new NextResponse("Invalid JSON data", { status: 400 });
    }
    return new NextResponse("Invalid request data", { status: 400 });
  }
} 