const { dbConnection } = require("@/db/dbConfig");
import Admin from "@/models/adminModel";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

dbConnection();

export async function POST(NextRequest) {
  try {
    const reqBody = await NextRequest.json();

    const { username, password } = reqBody;

    const user = await Admin.findOne({ username: username });

    if (!user) {
      return NextResponse.json({
        status: 404,
        message: "User not found",
      });
    }

    const isPasswordValid = await bcryptjs.compare(password, user.password);

    if (!isPasswordValid) {
      return NextResponse.json({
        status: 400,
        message: "Invalid password",
      });
    }

    return NextResponse.json({
      status: 200,
      message: "Login successful",
      user,
    });
  } catch (error) {
    console.log("Error occurred: ", error);
    return NextResponse.json({
      status: 500,
      message: "Internal Server Error",
    });
  }
}
