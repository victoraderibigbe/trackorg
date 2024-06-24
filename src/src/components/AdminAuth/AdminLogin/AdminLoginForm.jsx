"use client";

import { adminLoginValidation } from "@/utils/validations/validationSchema";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import Link from "next/link";
import toast from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Spinner } from "flowbite-react";

const initialValues = {
  username: "",
  password: "",
};

const AdminLoginForm = () => {
  // States to handle password show/hide
  const [type, setType] = useState("password");
  const [placeholder, setPlaceholder] = useState("••••••••••");
  const [icon, setIcon] = useState(
    <VscEyeClosed size={25} color="#6B7280" className="absolute mr-10" />
  );
  const [rememberMe, setRememberMe] = useState(false); // Remember me state
  const [isLoading, setIsLoading] = useState(false);

  // Function to toggle password show/hide
  const handleToggle = () => {
    if (type === "password") {
      setIcon(<VscEye size={25} color="#6B7280" className="absolute mr-10" />);
      setType("text");
      setPlaceholder("Enter password");
    } else {
      setIcon(
        <VscEyeClosed size={25} color="#6B7280" className="absolute mr-10" />
      );
      setType("password");
      setPlaceholder("••••••••••");
    }
  };

  const router = useRouter();

  const handleSubmit = (values) => {
    setIsLoading(true);

    const login = async () => {
      try {
        const res = await axios.post("/api/admin/login", values);
        setIsLoading(false);

        if (res.data.status !== 200) {
          toast.error(res.data.message);
          return;
        }

        toast.success(res.data.message);

        setTimeout(() => {
          router.push("/admin/dashboard");
        }, 2000);
      } catch (error) {
        setIsLoading(false);
        toast.error("Internal Server Error");
      }
    };

    login();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={adminLoginValidation}
      onSubmit={handleSubmit}
    >
      {({ handleChange, handleBlur, touched, errors }) => (
        <Form>
          <h3 className="text-light-text dark:text-dark-text">Welcome back!</h3>
          <h4 className="mb-5 text-light-accent dark:text-dark-accent">
            Sign in to your account
          </h4>
          <div className="mb-5">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <Field
              type="text"
              placeholder="Enter username"
              className={`${
                touched.username && errors.username
                  ? "invalid-input"
                  : "valid-input"
              }`}
              name="username"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <ErrorMessage
              name="username"
              component="small"
              className="text-alert"
            />
          </div>

          <div className="mb-5">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <div className="flex">
              <Field
                type={type}
                placeholder={placeholder}
                className={`${
                  touched.password && errors.password
                    ? "invalid-input"
                    : "valid-input"
                }`}
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <span
                className="flex items-center justify-around hover:cursor-pointer"
                onClick={handleToggle}
              >
                {icon}
              </span>
            </div>
            <ErrorMessage
              name="password"
              component="small"
              className="text-alert"
            />
          </div>

          <div className="flex items-center justify-between mb-5">
            <div>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="rememberMe"
                    type="checkbox"
                    className="check-box"
                    name="rememberMe"
                    checked={rememberMe}
                    onChange={() => setRememberMe(!rememberMe)}
                  />
                </div>
                <label htmlFor="rememberMe" className="check-label">
                  Remember me
                </label>
              </div>
            </div>
            <div>
              <Link
                href="#"
                className="text-sm font-medium text-light-accent dark:text-dark-accent"
              >
                Forgot Password?
              </Link>
            </div>
          </div>
          <button
            type="submit"
            className={`${isLoading ? "form-btn-disabled" : "form-btn"}`}
            disabled={isLoading}
          >
            {isLoading ? (
              <div>
                <span>
                  <Spinner size={"sm"} />
                </span>
                <span className="ml-2">Signing in...</span>
              </div>
            ) : (
              <span>Login</span>
            )}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default AdminLoginForm;
