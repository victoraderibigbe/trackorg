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
    { label: "About", path: "/pages/about" },
    { label: "Services", path: "/pages/services" },
    { label: "FAQs", path: "/pages/faqs" },
  ];

  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="/">
        <Image src={logo} alt="Trackorg logo" className="w-24" />
      </Navbar.Brand>
      <div className="flex items-center md:order-2">
        <ThemeToggle />
        <button className="h-8 px-2 ml-2 rounded-lg bg-light-accent dark:bg-dark-accent text-dark-text">
          Get Started
        </button>
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
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
