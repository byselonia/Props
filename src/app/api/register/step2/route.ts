import { NextResponse } from "next/server";
import { hash } from "bcryptjs";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    console.log("[REGISTER_STEP2] Request received");
    
    // Get and parse the request body
    const body = await request.json();
    console.log("[REGISTER_STEP2] Request body:", JSON.stringify(body, null, 2));

    const { email, firstName, lastName, username, password } = body;

    // Validate required fields
    if (!email || !firstName || !lastName || !username || !password) {
      console.log("[REGISTER_STEP2] Missing required fields:", {
        email: !!email,
        firstName: !!firstName,
        lastName: !!lastName,
        username: !!username,
        password: !!password
      });
      return new NextResponse("Missing required fields", { status: 400 });
    }

    // Check if username is already taken
    console.log("[REGISTER_STEP2] Checking for existing user...");
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [
          { email },
          { username }
        ]
      }
    });

    if (existingUser) {
      console.log("[REGISTER_STEP2] User already exists:", {
        existingEmail: existingUser.email === email,
        existingUsername: existingUser.username === username
      });
      return new NextResponse(
        existingUser.email === email 
          ? "Email already registered" 
          : "Username already taken",
        { status: 400 }
      );
    }

    // Hash the password
    console.log("[REGISTER_STEP2] Hashing password...");
    const hashedPassword = await hash(password, 12);

    // Create the user
    console.log("[REGISTER_STEP2] Creating user...");
    const user = await prisma.user.create({
      data: {
        email,
        firstName,
        lastName,
        username,
        password: hashedPassword,
      },
    });

    console.log("[REGISTER_STEP2] User created successfully:", user.id);

    // Return success response
    return NextResponse.json({ 
      message: "Account created successfully",
      userId: user.id 
    });

  } catch (error) {
    console.error("[REGISTER_STEP2_ERROR]", error);
    // Log more details about the error
    if (error instanceof Error) {
      console.error("[REGISTER_STEP2_ERROR_DETAILS]", {
        name: error.name,
        message: error.message,
        stack: error.stack
      });
    }
    return new NextResponse("Failed to create account", { status: 500 });
  }
} 