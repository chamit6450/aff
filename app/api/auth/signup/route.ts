import { NextResponse } from "next/server";
import prisma from "@/prisma/lib/prisma"; 
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json({ message: "All fields are required" }, { status: 400 });
    }

    // Check if user exists
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return NextResponse.json({ message: "User already exists" }, { status: 409 });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = await prisma.user.create({
      data: { email, password: hashedPassword },
    });

    // Check if JWT_SECRET is defined
    if (!process.env.JWT_SECRET) {
      throw new Error("JWT_SECRET is not set in environment variables");
    }

    // Generate JWT Token
    const token = jwt.sign({ id: user.id, email }, process.env.JWT_SECRET, { expiresIn: "1h" });

    return NextResponse.json({ message: "User created successfully", token }, { status: 201 });
  } catch (error: any) {
    console.error("Signup Error:", error);
    return NextResponse.json({ message: "Internal Server Error", error: error.message }, { status: 500 });
  }
}
