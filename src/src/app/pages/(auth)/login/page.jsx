"use client";

import Image from "next/image";
import logo from "../../../../../public/trackorg.svg";
import ThemeToggle from "@/components/ThemeToggle";
import DarkModeWrapper from "@/components/DarkModeWrapper";
import RegisterImage from "@/components/RegisterImage";
import Link from "next/link";
import Footer from "@/components/Footer";
import { VscEye } from "react-icons/vsc";
import { VscEyeClosed } from "react-icons/vsc";
import { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import toast from "react-hot-toast";

const page = () => {
  // States to handle password show/hide
  const [type, setType] = useState("password");
  const [placeholder, setPlaceholder] = useState("••••••••••");
  const [icon, setIcon] = useState(
    <VscEyeClosed size={25} color="#6B7280" className="absolute mr-10" />
  );
  const [rememberMe, setRememberMe] = useState(false); // Remember me state

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

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: yup.object({
      username: yup
        .string("Enter your username")
        .required("Username is required"),
      password: yup
        .string("Enter your password")
        .required("Password is required"),
    }),
    onSubmit: (values) => {
      console.log(values);
      toast.success(`Hello ${values.username}`);
    },
  });

  return (
    <div>
      <nav className="flex items-center justify-between p-5 bg-light-secondary dark:bg-dark-secondary">
        <Link href="/">
          <Image src={logo} alt="TrackOrg Logo" width={100} />
        </Link>
        <ThemeToggle />
      </nav>

      <main className="grid grid-cols-2 p-2 md:p-12">
        <div className="items-center justify-center hidden col-span-2 md:col-span-1 md:flex">
          <DarkModeWrapper>
            {(isDarkMode) => (
              <div>
                <RegisterImage isDarkMode={isDarkMode} />
              </div>
            )}
          </DarkModeWrapper>
        </div>

        <div className="flex items-center justify-center w-full col-span-2 p-5 md:p-10 rounded-xl bg-light-secondary dark:bg-dark-secondary md:col-span-1 md:w-3/4">
          <form onSubmit={formik.handleSubmit} class="w-full mx-auto">
            <h3 className="text-light-text dark:text-dark-text">
              Welcome back!
            </h3>
            <h4 className="mb-5 text-light-accent dark:text-dark-accent">
              Sign in to your account
            </h4>
            <div class="mb-5">
              <label for="email" class="form-label">
                Your Username
              </label>
              <input
                type="text"
                placeholder="Enter username"
                className={`${
                  formik.touched.username && formik.errors.username
                    ? "invalid-input"
                    : "valid-input"
                }`}
                name="username"
                value={formik.values.username}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.username && formik.errors.username ? (
                <small className="text-alert">{formik.errors.username}</small>
              ) : null}
            </div>

            <div class="mb-5">
              <label for="password" class="form-label">
                Your password
              </label>
              <div className="flex">
                <input
                  type={type}
                  placeholder={placeholder}
                  className={`${
                    formik.touched.password && formik.errors.password
                      ? "invalid-input"
                      : "valid-input"
                  }`}
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <span
                  className="flex items-center justify-around hover:cursor-pointer"
                  onClick={handleToggle}
                >
                  {icon}
                </span>
              </div>
              {formik.touched.password && formik.errors.password ? (
                <small className="text-alert">{formik.errors.password}</small>
              ) : null}
            </div>

            <div class="flex items-center justify-between mb-5">
              <div>
                <div className="flex items-start">
                  <div class="flex items-center h-5">
                    <input
                      id="rememberMe"
                      type="checkbox"
                      class="check-box"
                      name="rememberMe"
                      checked={rememberMe}
                      onChange={() => setRememberMe(!rememberMe)}
                    />
                  </div>
                  <label for="rememberMe" class="check-label">
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
            <button type="submit" class="form-btn">
              Login
            </button>

            <div className="mt-3">
              <Link href="/pages/register" className="text-sm font-medium">
                Don't have an account?{" "}
                <span className="text-light-accent dark:text-dark-accent">
                  Register
                </span>
              </Link>
            </div>
          </form>
        </div>
      </main>

      <footer className="absolute bottom-0 w-full text-center bg-light-secondary dark:bg-dark-primary">
        <Footer />
      </footer>
    </div>
  );
};

export default page;
