import { dbConnection } from "@/db/dbConfig";
import Admin from "@/models/adminModel";
import { NextResponse } from "next/server";

dbConnection();

export async function POST(NextRequest) {
  try {
    const reqBody = await NextRequest.json();

    const {
      organizationName,
      subdomain,
      firstName,
      lastName,
      phoneNumber,
      role,
      username,
      email,
      password,
    } = reqBody;

    // Validate the input
    if (
      !organizationName ||
      !subdomain ||
      !firstName ||
      !lastName ||
      !phoneNumber ||
      !role ||
      !username ||
      !email ||
      !password
    ) {
      return NextResponse.json({
        status: 400,
        message: "All fields are required",
      });
    }

    // Check if admin with matching information exists
    const existingUser = await Admin.findOne({
      $or: [{ email }, { subdomain }, { username }, { phoneNumber }],
    });

    if (existingUser) {
      // Determine which field already exists and return the appropriate message
      let message = "User already exists";
      if (existingUser.email === email) {
        message = "Email already exists";
      } else if (existingUser.subdomain === subdomain) {
        message = "Subdomain already exists";
      } else if (existingUser.username === username) {
        message = "Username already exists";
      } else if (existingUser.phoneNumber === phoneNumber) {
        message = "Phone number already exists";
      }

      return NextResponse.json({
        status: 400,
        message,
      });
    }

    const newUser = new Admin({
      organizationName,
      subdomain,
      firstName,
      lastName,
      phoneNumber,
      role,
      username,
      email,
      password,
    });

    const savedUser = await newUser.save();

    return NextResponse.json({
      status: 200,
      message: "Registration successful",
      user: savedUser,
    });
  } catch (error) {
    console.log("Error occurred: ", error);
    return NextResponse.json({
      status: 500,
      message: "Internal Server Error",
      error: error.message,
    });
  }
}
