import React from "react";
import FooterLogo from "./ui/FooterUi/FooterLogo";
import FooterItems from "./ui/FooterUi/FooterItems";

export default function Footer() {
  return (
    <footer className="w-full max-w-auto px-4 py-10 md:py-12 lg:px-[120px] lg:py-14 xl:py-16 mx-auto">
      {/* Main Footer Content */}
      <div className="flex flex-col gap-8 lg:flex-row lg:justify-between lg:items-center">
        <FooterLogo />

        <div className="flex flex-col gap-6 sm:flex-row sm:gap-12">
          <FooterItems />
        </div>
      </div>

      {/* Divider */}
      <div className="my-8 border-t border-gray-300 dark:border-gray-700"></div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm dark:text-white">
          ©2025 Auto Fast. All rights reserved
        </p>

        <div className="flex space-x-8 text-sm font-medium">
          <a
            className="hover:text-lime-300 transition-colors duration-300"
            href="#"
          >
            Privacy & Policy
          </a>
          <a
            className="hover:text-lime-300 transition-colors duration-300"
            href="#"
          >
            Terms & Condition
          </a>
        </div>
      </div>
    </footer>
  );
}