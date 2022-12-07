import React from "react";

function UnderTheHood() {
  return (
    <div
      style={{
        background:
          "radial-gradient(ellipse 50% 50% at center, rgba(64, 200, 224, 0.1), transparent)",
      }}
    >
      <div className="mt-[128px] min-w-full px-[24px] lg:px-0 flex flex-col justify-start items-center">
        {/* Under the hood header */}
        <div className="w-full lg:w-[912px] h-[34px] flex justify-start items-start border-b border-b-[#8a8f98]/20">
          <div className="flex justify-start items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="#40c8e0"
            >
              <path d="M9.64409 1.74899L9.66238 6.999L12.1653 6.99998C12.8375 6.99998 13.233 7.67956 12.8503 8.17697L7.85106 14.675C7.38603 15.2795 6.33285 14.9832 6.33285 14.248L6.33174 9.004L3.83465 9.00439C3.16343 9.00439 2.76771 8.32653 3.14846 7.82896L8.12469 1.32594C8.58786 0.720669 9.64148 1.01403 9.64409 1.74899Z" />
            </svg>

            <p
              className="ml-[8px]"
              style={{
                color: "#40c8e0",
                fontSize: "14px",
                fontWeight: "450",
                lineHeight: "21px",
              }}
            >
              Under the hood
            </p>
          </div>
        </div>

        {/* Project header text and description*/}
        <div className="mt-[40px] w-full lg:w-[912px] flex flex-col justify-start items-start lg:flex-row lg:justify-between lg:items-center">
          <div className="lg:w-[460px]">
            <div className="flex flex-col justify-start items-start">
              <h2
                className="text-[48px] lg:text-[56px] leading-[52.8px] lg:leading-[61.6px] tracking-[-0.96px] lg:tracking-[-1.12px] text-start"
                style={{
                  color: "#f7f8f8",
                  fontWeight: "500",
                }}
              >
                Supercharged by
              </h2>
              <div className="flex justify-start items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="46"
                  height="46"
                  viewBox="0 0 64 64"
                  fill="#40c8e0"
                  color="#40c8e0"
                >
                  <path d="M0.403013 37.3991L26.6009 63.597C13.2225 61.3356 2.66442 50.7775 0.403013 37.3991Z" />
                  <path d="M0 30.2868L33.7132 64C35.7182 63.8929 37.6742 63.6013 39.5645 63.142L0.85799 24.4355C0.398679 26.3259 0.10713 28.2818 0 30.2868Z" />
                  <path d="M2.53593 19.4042L44.5958 61.4641C46.1277 60.8066 47.598 60.0331 48.9956 59.1546L4.84543 15.0044C3.96691 16.402 3.19339 17.8723 2.53593 19.4042Z" />
                  <path d="M7.69501 11.1447C13.5677 4.32093 22.2677 0 31.9769 0C49.6628 0 64 14.3372 64 32.0231C64 41.7323 59.6791 50.4323 52.8553 56.305L7.69501 11.1447Z" />
                </svg>
                <h2
                  className="text-[48px] lg:text-[56px] leading-[52.8px] lg:leading-[61.6px] tracking-[-0.96px] lg:tracking-[-1.12px] text-start"
                  style={{
                    color: "#f7f8f8",
                    fontWeight: "500",
                  }}
                >
                  &nbsp;Sync Engine
                </h2>
              </div>
            </div>
          </div>

          <div className="lg:w-[420px] mt-[16px] lg:mt-0 text-start">
            <p
              style={{
                color: "#b4bcd0",
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: "24px",
              }}
            >
              Meet the fastest, most reliable syncing we have ever created.
              Synchronizing information in real-time across all users, it keeps
              everyone on the same page. No spinners. No loading. No worries.
            </p>
          </div>
        </div>

        {/* Div with 3 info sections*/}
        <div className="w-full lg:w-[912px] mt-[65px] flex justify-start lg:justify-center items-start">
          <div className="min-w-full lg:h-[75px] flex flex-col justify-start lg:flex-row lg:justify-between items-start">
            <div className="h-[75px] flex flex-col justify-start items-start">
              <span
                style={{
                  color: "#f7f8f8",
                  fontSize: "36px",
                  fontWeight: "450",
                  letterSpacing: "-0.72px",
                  lineHeight: "39.6px",
                }}
              >
                50ms
              </span>

              <span
                className="text-gray-500 mt-[12px]"
                style={{
                  fontSize: "14px",
                  fontWeight: "450",
                  lineHeight: "19.6px",
                }}
              >
                instant interactions
              </span>
            </div>

            <div className="h-[75px] flex flex-col justify-start items-start mt-[24px] lg:mt-0">
              <span
                style={{
                  color: "#f7f8f8",
                  fontSize: "36px",
                  fontWeight: "450",
                  letterSpacing: "-0.72px",
                  lineHeight: "39.6px",
                }}
              >
                10x faster
              </span>

              <span
                className="text-gray-500 mt-[12px]"
                style={{
                  fontSize: "14px",
                  fontWeight: "450",
                  lineHeight: "19.6px",
                }}
              >
                initial load times
              </span>
            </div>

            <div className="h-[75px] flex flex-col justify-start items-start mt-[24px] lg:mt-0">
              <span
                style={{
                  color: "#f7f8f8",
                  fontSize: "36px",
                  fontWeight: "450",
                  letterSpacing: "-0.72px",
                  lineHeight: "39.6px",
                }}
              >
                Reliability upgrade
              </span>

              <span
                className="text-gray-500 mt-[12px]"
                style={{
                  fontSize: "14px",
                  fontWeight: "450",
                  lineHeight: "19.6px",
                }}
              >
                optimized for large workspaces that need ultimate performance
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UnderTheHood;
