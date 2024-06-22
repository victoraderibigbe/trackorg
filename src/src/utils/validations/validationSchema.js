import * as Yup from "yup";

export const adminFormValidation = [
  Yup.object({
    organizationName: Yup.string().required("Name of organization is required"),
    subdomain: Yup.string().required("Subdomain is required"),
  }),
  Yup.object({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    phoneNumber: Yup.string().required("Phone number is required"),
    role: Yup.string().required("Role is required"),
    email: Yup.string().required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters"),
    confirmPassword: Yup.string()
      .required("Confirm password is required")
      .oneOf([Yup.ref("password"), null], "Passwords do not match"),
  }),
  Yup.object(),
];
