import { NextResponse } from "next/server";
import { hash } from "bcryptjs";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    console.log("[REGISTER_STEP2] Request received");
    
    // Get and parse the request body
    const body = await request.json();
    console.log("[REGISTER_STEP2] Request body:", body);

    const { email, firstName, lastName, username, password } = body;

    // Validate required fields
    if (!email || !firstName || !lastName || !username || !password) {
      console.log("[REGISTER_STEP2] Missing required fields");
      return new NextResponse("Missing required fields", { status: 400 });
    }

    // Check if username is already taken
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [
          { email },
          { username }
        ]
      }
    });

    if (existingUser) {
      console.log("[REGISTER_STEP2] User already exists");
      return new NextResponse(
        existingUser.email === email 
          ? "Email already registered" 
          : "Username already taken",
        { status: 400 }
      );
    }

    // Hash the password
    const hashedPassword = await hash(password, 12);

    // Create the user
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
    return new NextResponse("Failed to create account", { status: 500 });
  }
} 