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

    // Check if admin with matching information exists
    const user = await Admin.findOne({
      $or: [{ email }, { subdomain }, { username }, { phoneNumber }],
    });

    if (user) {
      // Check if the email exists
      if (user.email === email) {
        return NextResponse.json({
          status: 400,
          message: "Email already exists",
        });
      }
      // Check if the subdomain exists
      if (user.subdomain === subdomain) {
        return NextResponse.json({
          status: 400,
          message: "Subdomain already exists",
        });
      }
      // Check if the username exists
      if (user.username === username) {
        return NextResponse.json({
          status: 400,
          message: "Username already exists",
        });
      }
      // Check if the phone number exists
      if (user.phoneNumber === phoneNumber) {
        return NextResponse.json({
          status: 400,
          message: "Phone number already exists",
        });
      }

      return NextResponse.json({ status: 400, message: "User already exists" });
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

    const saveUser = await newUser.save();

    return NextResponse.json({
      status: 200,
      message: "Registration successful",
      saveUser,
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
