import React from "react";

function Outro() {
  return (
    <div className="my-[129px] lg:my-[118px] flex flex-col justify-start items-center">
      <div className="flex flex-col justify-start items-center">
        <span className="text-center">
          <span
            className=" text-white text-center text-[40px] leading-[36px] tracking-[-0.4px] lg:text-[80px] lg:leading-[72px] lg:tracking-[-0.8px]"
            style={{
              fontWeight: "450",
            }}
          >
            Re
          </span>
          <span
            className=" text-transparent bg-clip-text bg-gradient-to-r from-white via-[#FFFF]/40 to-white text-center text-[40px] leading-[36px] tracking-[-0.4px] lg:text-[80px] lg:leading-[72px] lg:tracking-[-0.8px]"
            style={{
              fontWeight: "450",
            }}
          >
            ady to scale to
          </span>
        </span>
        <span
          className=" text-white text-center text-[40px] leading-[36px] tracking-[-0.4px] lg:text-[80px] lg:leading-[72px] lg:tracking-[-0.8px]"
          style={{
            fontWeight: "450",
          }}
        >
          the next level?
        </span>
      </div>
      <div className="mt-[64px] flex justify-center items-start">
        <div className="px-[24px] py-[10px] rounded-full bg-gradient-to-r from-[#455eb5] via-[#5643cc] to-[#673fd7]">
          <p
            className="text-white"
            style={{
              fontWeight: "500",
              lineHeight: "24.48px",
            }}
          >
            Sign up for free
          </p>
        </div>

        <div className="ml-[16px] px-[24px] py-[10px] rounded-full bg-gray-800 border border-gray-700">
          <p
            className="text-white"
            style={{
              fontWeight: "500",
              lineHeight: "24.48px",
            }}
          >
            Talk to sales
          </p>
        </div>
      </div>
    </div>
  );
}

export default Outro;
