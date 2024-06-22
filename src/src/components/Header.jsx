"use client";

import { Navbar } from "flowbite-react";
import logo from "../../public/trackorg.svg";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "FAQs", path: "/faqs" },
  ];

  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="/">
        <Image src={logo} alt="Trackorg logo" className="w-24" />
      </Navbar.Brand>
      <div className="flex items-center md:order-2">
        <ThemeToggle />
        <Link href="/admin/login" className="hidden md:flex nav-btn">
          Login
        </Link>
        <Link href="/admin/app-setup" className="nav-btn">
          Get Started
        </Link>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        {navLinks.map((link, i) => (
          <Link
            key={i}
            href={link.path}
            className={`${
              pathname === link.path
                ? "text-light-accent dark:text-dark-accent"
                : ""
            }`}
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/admin/login"
          className={`flex md:hidden ${
            pathname === "/admin/login"
              ? "text-light-accent dark:text-dark-accent"
              : ""
          }`}
        >
          Login
        </Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
