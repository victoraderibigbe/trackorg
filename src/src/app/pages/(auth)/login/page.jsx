"use client";

import Image from "next/image";
import logo from "../../../../../public/trackorg.svg";
import ThemeToggle from "@/components/ThemeToggle";
import DarkModeWrapper from "@/components/DarkModeWrapper";
import RegisterImage from "@/components/RegisterImage";
import Link from "next/link";
import Footer from "@/components/Footer";

const page = () => {
  return (
    <div>
      <nav className="flex items-center justify-between p-5 bg-light-secondary dark:bg-dark-secondary">
        <Image src={logo} alt="TrackOrg Logo" width={100} />
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
          <form class="w-full mx-auto">
            <h4 className="mb-5 text-light-accent dark:text-dark-accent">
              Sign in to your account
            </h4>
            <div class="mb-5">
              <label for="email" class="form-label">
                Your Username
              </label>
              <input type="email" id="email" class="form-input" required />
            </div>
            <div class="mb-5">
              <label for="password" class="form-label">
                Your password
              </label>
              <input
                type="password"
                id="password"
                class="form-input"
                required
              />
            </div>
            <div class="flex items-center justify-between mb-5">
              <div>
                <div className="flex items-start">
                  <div class="flex items-center h-5">
                    <input
                      id="remember"
                      type="checkbox"
                      value=""
                      class="check-box"
                      required
                    />
                  </div>
                  <label for="remember" class="check-label">
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
              <Link href="/register" className="text-sm font-medium">
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
