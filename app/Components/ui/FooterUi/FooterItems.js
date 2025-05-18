import React from "react";

const FooterItems = () => {
  return (
    <div className="grid lg:grid-cols-3 gap-12.5 w-[525px] max-md:max-w-full md:grid-cols-1 items-center">
      <div className="grid w-full gap-7">
        <a className="font-bold">About</a>
        <a className="font-medium hover:text-[#D7FF24]" href="#">
          How it works
        </a>
        <a className="font-medium hover:text-[#D7FF24]" href="#">
          Featured
        </a>
        <a className="font-medium hover:text-[#D7FF24]" href="#">
          Partnership
        </a>
        <a className="font-medium hover:text-[#D7FF24]" href="#">
          Bussiness Relation
        </a>
      </div>

      <div className="grid w-full gap-7">
        <a className="font-bold">Community</a>
        <a className="font-medium hover:text-[#D7FF24]" href="#">
          Events
        </a>
        <a className="font-medium hover:text-[#D7FF24]" href="#">
          Blog
        </a>
        <a className="font-medium hover:text-[#D7FF24]" href="#">
          Podcast
        </a>
        <a className="font-medium hover:text-[#D7FF24]" href="#">
          Invite a friend
        </a>
      </div>

      <div className="grid w-full gap-7">
        <a className="font-bold">Socials</a>
        <a className="font-medium hover:text-[#D7FF24]" href="#">
          Discord
        </a>
        <a className="font-medium hover:text-[#D7FF24]" href="#">
          Instagram
        </a>
        <a className="font-medium hover:text-[#D7FF24]" href="#">
          Twitter
        </a>
        <a className="font-medium hover:text-[#D7FF24]" href="#">
          Facebook
        </a>
      </div>
    </div>
  );
};

export default FooterItems;
