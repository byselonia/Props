import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email, firstName, lastName } = await request.json();

    if (!email || !firstName || !lastName) {
      return new NextResponse("Missing required fields", { status: 400 });
    }

    // Redirect to the second registration page with data as query parameters
    const redirectUrl = `/register/password?email=${encodeURIComponent(email)}&firstName=${encodeURIComponent(firstName)}&lastName=${encodeURIComponent(lastName)}`;

    return NextResponse.redirect(new URL(redirectUrl, request.url));

  } catch (error) {
    console.error("[REGISTER_STEP1_ERROR]", error);
    return new NextResponse("Something went wrong", { status: 500 });
  }
} 