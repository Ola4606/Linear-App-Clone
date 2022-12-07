import React from "react";
import logo from "../../assets/asset0.png";

function About() {
  return (
    // ABOUT
    <div className="w-full  pt-[64px] flex flex-col items-center px-[24px] lg:px-0"
   >
      {/* section 1 */}
      <div
        className="flex flex-col items-center"
        style={{
          lineHeight: "24.48px",
        }}
      >
        <img
          src={logo}
          alt="Logo"
          className="w-[300px]"
          style={{ margin: "0px 0px -9px" }}
        />
        <span
        className="text-[18px] lg:text-[24px]"
          style={{
            color: "#b4bcd0",
            fontWeight: "450",
            lineHeight: "24.48px",
            textAlign: "center",
          }}
        >
          Linear 2022 Release
        </span>
      </div>

      <div className="flex flex-col items-center justify-center w-full lg:w-[680px]">
        <h1
          className="pt-[16px] text-transparent bg-clip-text bg-gradient-to-r from-white to-[#FFFF]/40 text-[56px] lg:text-[92px] leading-[56px] lg:leading-[92px] tracking-[-1.12px] lg:tracking-[-1.84px]"
          style={{
            fontWeight: "450",
            textAlign: "center",
          }}
        >
          Built for scale
        </h1>

        <h2
          className="pt-[24px] text-[18px] lg:text-[24px] leading-[23.4px] lg:leading-[31.2px]"
          style={{
            color: "#b4bcd0",
            fontWeight: "450",
            textAlign: "center",
          }}
        >
          The default tool among startups now also powers a wide range of large
          established companies, including Vercel, Cash App, and Retool. To
          support product teams from early stage to global stage, we’ve been
          working on a Linear built for scale.
        </h2>

        <div className="mt-[36px] w-[285px] h-[28px] bg-gray-900 rounded-full flex justify-center items-center">
          <div className="px-[8px] w-[32px] h-[20px] bg-gray-800 rounded-full flex justify-center items-center">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.28033 8.71967C6.98744 8.42678 6.51256 8.42678 6.21967 8.71967L4 11L2.75 9.75C2.33578 9.75 2 10.0858 2 10.5L2 13.25C2 13.6642 2.33578 14 2.75 14L5.5 14C5.91421 14 6.25 13.6642 6.25 13.25L5 12L7.28033 9.78033C7.57322 9.48744 7.57322 9.01256 7.28033 8.71967Z"
                fill="white"
              />
              <path
                d="M8.71967 7.28033C9.01256 7.57322 9.48744 7.57322 9.78033 7.28033L12 5L13.25 6.25C13.6642 6.25 14 5.91421 14 5.5L14 2.75C14 2.33579 13.6642 2 13.25 2L10.5 2C10.0858 2 9.75 2.33579 9.75 2.75L11 4L8.71967 6.21967C8.42678 6.51256 8.42678 6.98744 8.71967 7.28033Z"
                fill="white"
              />
            </svg>
          </div>
          <p
            className="px-[10px] ml-[8px]"
            style={{
              color: "#f7f8f8",
              fontSize: "13px",
              fontWeight: "500",
              lineHeight: "28px",
              textAlign: "center",
            }}
          >
            Learn more about our 2022 release
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
