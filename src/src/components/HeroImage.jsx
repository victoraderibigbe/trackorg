"use client";

import Image from "next/image";
import heroLight from "../../public/gifs/hero-light.gif";
import heroDark from "../../public/gifs/hero-dark.gif";

const HeroImage = ({ isDarkMode }) => {
  return (
    <Image
      src={isDarkMode ? heroDark : heroLight}
      alt="Biometrics Illustration"
    />
  );
};

export default HeroImage;
