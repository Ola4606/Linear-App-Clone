import React from "react";

const navBarTextStyle = {
  fontSize: "14px",
  fontWeight: "500",
  lineHeight: "48px",
};

function NavBarOptions() {
  return (
    <div className="w-full flex flex-col justify-start items-start px-[24px]">
      <div className="w-full h-[48px] flex justify-start items-center border-b border-b-[#8a8f98]/20">
        <p className="text-white" style={navBarTextStyle}>
          Features
        </p>
      </div>
      <div className="w-full h-[48px] flex justify-start items-center border-b border-b-[#8a8f98]/20">
        <p className="text-white" style={navBarTextStyle}>
          Methods
        </p>
      </div>
      <div className="w-full h-[48px] flex justify-start items-center border-b border-b-[#8a8f98]/20">
        <p className="text-white" style={navBarTextStyle}>
          Customers
        </p>
      </div>
      <div className="w-full h-[48px] flex justify-start items-center border-b border-b-[#8a8f98]/20">
        <p
          className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#FFFF]/40"
          style={navBarTextStyle}
        >
          Changelog
        </p>
      </div>
      <div className="w-full h-[48px] flex justify-start items-center border-b border-b-[#8a8f98]/20">
        <p className="text-white" style={navBarTextStyle}>
          Integrations
        </p>
      </div>
      <div className="w-full h-[48px] flex justify-start items-center border-b border-b-[#8a8f98]/20">
        <p className="text-white" style={navBarTextStyle}>
          Pricing
        </p>
      </div>
      <div className="w-full h-[48px] flex justify-start items-center border-b border-b-[#8a8f98]/20">
        <p className="text-white" style={navBarTextStyle}>
          About
        </p>
      </div>
      <div className="w-full h-[48px] flex justify-start items-center border-b border-b-[#8a8f98]/20">
        <p className="text-white" style={navBarTextStyle}>
          Blog
        </p>
      </div>
      <div className="w-full h-[48px] flex justify-start items-center border-b border-b-[#8a8f98]/20">
        <p className="text-white" style={navBarTextStyle}>
          Careers
        </p>
      </div>
    </div>
  );
}

export default NavBarOptions;
