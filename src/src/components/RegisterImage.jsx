"use client";

import Image from "next/image";
import registerDark from "../../public/gifs/register-dark.gif";
import registerLight from "../../public/gifs/register-light.gif";

const RegisterImage = ({ isDarkMode }) => {
  return (
    <Image
      src={isDarkMode ? registerDark : registerLight}
      alt="Registration Illustration"
    />
  );
};

export default RegisterImage;
