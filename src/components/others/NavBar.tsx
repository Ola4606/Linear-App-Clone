import React from "react";

const navBarTextStyle = {
  fontSize: "14px",
  fontWeight: "500",
  lineHeight: "48px",
  padding: "0px 0px 0px 24px",
};

function NavBar({navState, setNavFun}: any) {
  return (
    <nav className="sticky top-0 w-full lg:w-[1000px] xl:w-[1200px] h-[48px] px-[32px] backdrop-blur-lg">
      <div className=" flex justify-between items-center border-b border-b-[#8a8f98]/20">
        <div className="flex justify-start items-center">
          <div className="flex justify-start items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 64 64"
              fill="#f7f8f8"
              color="#f7f8f8"
            >
              <path d="M0.403013 37.3991L26.6009 63.597C13.2225 61.3356 2.66442 50.7775 0.403013 37.3991Z" />
              <path d="M0 30.2868L33.7132 64C35.7182 63.8929 37.6742 63.6013 39.5645 63.142L0.85799 24.4355C0.398679 26.3259 0.10713 28.2818 0 30.2868Z" />
              <path d="M2.53593 19.4042L44.5958 61.4641C46.1277 60.8066 47.598 60.0331 48.9956 59.1546L4.84543 15.0044C3.96691 16.402 3.19339 17.8723 2.53593 19.4042Z" />
              <path d="M7.69501 11.1447C13.5677 4.32093 22.2677 0 31.9769 0C49.6628 0 64 14.3372 64 32.0231C64 41.7323 59.6791 50.4323 52.8553 56.305L7.69501 11.1447Z" />
            </svg>

            <p
              className="ml-[8px]"
              style={{
                color: "#ffffff",
                fontWeight: "550",
                letterSpacing: "-0.16px",
                lineHeight: "24.48px",
                textAlign: "left",
              }}
            >
              Linear
            </p>

            <div className="hidden lg:flex">
              <p className="text-white" style={navBarTextStyle}>
                Features
              </p>
              <p className="text-white" style={navBarTextStyle}>
                Method
              </p>
              <p className="text-white" style={navBarTextStyle}>
                Customers
              </p>
              <p
                className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#FFFF]/40"
                style={navBarTextStyle}
              >
                Changelog
              </p>
              <p className="text-white" style={navBarTextStyle}>
                Integrations
              </p>
              <p className="text-white" style={navBarTextStyle}>
                Pricing
              </p>
            </div>

            
          </div>
        </div>

        <div className="flex justify-start items-center">
          <p className="text-white" style={navBarTextStyle}>
            Log in
          </p>
          <div className="px-[16px] py-[6px] ml-[24px] rounded-full bg-gradient-to-r from-[#455eb5] via-[#5643cc] to-[#673fd7]">
            <p
              style={{
                color: "#f7f8f8",
                fontSize: "14px",
                fontWeight: "500",
              }}
            >
              Sign up
            </p>
          </div>
          <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#ffffff"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 ml-[24px] flex lg:hidden text-white"
              onClick={() => setNavFun(!navState)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 9h16.5m-16.5 6.75h16.5"
              />
            </svg>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
