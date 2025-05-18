// Navbar.jsx
import React from "react";
import Logo from "./ui/NavbarUi/Logo";
import MainMenu from "./ui/NavbarUi/MainMenu";
import MobileMenu from "./ui/NavbarUi/MobileMenu";

export default function Navbar() {
  return (
    <div className="w-full px-4 sm:px-6 md:px-8 lg:px-[120px]">
      {/* Container that respects max width but avoids horizontal overflow */}
      <div className="max-w-[1440px] w-full mx-auto flex justify-between items-center gap-6">
        <Logo />
        <div className="hidden md:flex">
          <MainMenu />
        </div>
        <div className="md:hidden">
          <MobileMenu />
        </div>
      </div>
    </div>
  );
}