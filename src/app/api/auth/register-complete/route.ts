import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const { email, firstName, lastName, username, password } = await request.json();

    if (!email || !firstName || !lastName || !username || !password) {
      return new NextResponse("Missing required fields", { status: 400 });
    }

    // Check if username or email already exists
    const existingUser = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    
    if (existingUser) {
       return new NextResponse("Email already exists", { status: 400 });
    }

    const existingUsername = await prisma.user.findUnique({
        where: {
          username: username,
        },
      });
      
      if (existingUsername) {
         return new NextResponse("Username already exists", { status: 400 });
      }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        email,
        firstName,
        lastName,
        username,
        password: hashedPassword,
      },
    });

    return NextResponse.json({
      message: "User created successfully",
      user: { id: newUser.id, email: newUser.email },
    });
  } catch (error) {
    console.error("[REGISTER_COMPLETE_ERROR]", error);
    return new NextResponse("Something went wrong", { status: 500 });
  }
} 