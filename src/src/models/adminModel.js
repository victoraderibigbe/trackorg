import mongoose from "mongoose";
import bcryptjs from "bcryptjs";

const adminSchema = mongoose.Schema({
  organizationName: {
    type: String,
    required: [true, "Organization name is required"],
  },
  subdomain: {
    type: String,
    required: [true, "Subdomain is required"],
    unique: [true, "Subdomain already exists"],
  },
  firstName: {
    type: String,
    required: [true, "First name is required"],
  },
  lastName: {
    type: String,
    required: [true, "Last name is required"],
  },
  phoneNumber: {
    type: String,
    required: [true, "Phone number is required"],
    unique: [true, "Phone number already exists"],
  },
  role: {
    type: String,
    required: [true, "Role is required"],
  },
  username: {
    type: String,
    required: [true, "Username is required"],
    unique: [true, "Username already exists"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: [true, "Email already exists"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
});

let saltRound = 10;

adminSchema.pre("save", async function (next) {
  try {
    const hash = await bcryptjs.hash(this.password, saltRound);
    this.password = hash;
    next();
  } catch (error) {
    console.log(error);
    next(error);
  }
});

const Admin = mongoose.models.admin || mongoose.model("admin", adminSchema);

export default Admin;
