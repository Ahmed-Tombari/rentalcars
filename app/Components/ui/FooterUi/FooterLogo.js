import React from "react";
import Logo from "../NavbarUi/Logo";
import FooterIcons from "./FooterIcons";


const FooterLogo = () => {
  return (
     <div className="grid grid-cols-1 gap-5.5 items-start">
      <Logo />
      <p className="font-medium w-[300px]">
        Our vision is to provide convenience and help increase your sales
        business.
      </p>
      <FooterIcons />
    </div>
  );
};

export default FooterLogo;
