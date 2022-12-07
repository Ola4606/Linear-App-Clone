import React from "react";
import reportingBackgroundImg from "../../assets/asset6.png";
import reportingImg1 from "../../assets/asset7.png";
import reportingImg2 from "../../assets/asset8.png";
import reportingImg3 from "../../assets/asset9.png";
import retoolImg from "../../assets/asset10.jpeg";

function Reporting() {
  return (
    <div
      style={{
        background:
          "radial-gradient(ellipse 50% 50% at center,rgba(51,255,182,0.1), transparent)",
      }}
    >
      <div className="mt-[128px] min-w-full px-[24px] lg:px-0 flex flex-col justify-start items-center">
        {/* Reporting header */}
        <div className="w-full lg:w-[912px] h-[34px] flex justify-start items-start border-b border-b-[#8a8f98]/20">
          <div className="flex justify-start items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="#33ffb6"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3 10C3.55228 10 4 10.4477 4 11V14C4 14.5523 3.55228 15 3 15H2C1.44772 15 1 14.5523 1 14V11C1 10.4477 1.44772 10 2 10H3ZM14 1C14.5523 1 15 1.44772 15 2V14C15 14.5523 14.5523 15 14 15H13C12.4477 15 12 14.5523 12 14V2C12 1.44772 12.4477 1 13 1H14ZM8.5 5C9.05229 5 9.5 5.44772 9.5 6V14C9.5 14.5523 9.05229 15 8.5 15H7.5C6.94772 15 6.5 14.5523 6.5 14V6C6.5 5.44772 6.94772 5 7.5 5H8.5Z"
              />
            </svg>

            <p
              className="ml-[8px]"
              style={{
                color: "#33ffb6",
                fontSize: "14px",
                fontWeight: "450",
                lineHeight: "21px",
              }}
            >
              Reporting
            </p>
          </div>
        </div>

        {/* Project header text and description*/}
        <div className="mt-[40px] w-full lg:w-[912px] flex flex-col justify-start items-start lg:flex-row lg:justify-between lg:items-center">
          <div className="lg:w-[432px]">
            <h2
              className="text-[48px] lg:text-[56px] leading-[52.8px] lg:leading-[61.6px] tracking-[-0.96px] lg:tracking-[-1.12px] text-start"
              style={{
                color: "#f7f8f8",
                fontWeight: "500",
              }}
            >
              Data to enhance your intuition
            </h2>
          </div>

          <div className="lg:w-[432px] mt-[16px] lg:mt-0 text-start">
            <p
              style={{
                color: "#b4bcd0",
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: "24px",
              }}
            >
              Building truly great products is both art and science. It’s part
              intuition and part data. To help with the data part, we are
              introducing a variety of advanced reporting and analytics
              features.
            </p>
          </div>
        </div>

        {/* Div for background image and more info*/}
        <div className="min-w-full h-[557px] lg:h-[734px] px-[0px] lg:px-[192px] mt-[64px] lg:mt-[50px]">
          <div
            className="bg-right-top bg-no-repeat bg-contain w-full h-full"
            style={{ backgroundImage: `url(${reportingBackgroundImg})` }}
          >
            <div className="min-w-full min-h-full flex justify-center items-end">
              <img
                src={reportingImg1}
                alt="Reporting Img 1"
                className="w-full lg:w-[432px] lg:h-[454px] mb-[60px] hidden lg:flex backdrop-blur-md"
                style={{WebkitMaskImage: "linear-gradient(black 50%, transparent)"}}
              />

              <div className="w-full lg:w-[462px] lg:ml-[64px] text-start">
                <span>
                  <span
                    style={{
                      color: "#f7f8f8",
                      fontSize: "24px",
                      fontWeight: "500",
                      lineHeight: "31.2px",
                    }}
                  >
                    Analytical Reporting&nbsp;
                  </span>
                  <span
                    className="inline-flex justify-center items-center"
                    style={{
                      borderColor: "#33ffb6",
                      borderRadius: "4px",
                      borderStyle: "solid",
                      borderWidth: "1.5px",
                      color: "#33ffb6",
                      fontSize: "14px",
                      fontWeight: "500",
                      lineHeight: "24px",
                      padding: "0px 8px",
                    }}
                  >
                    Preview
                  </span>
                  <span
                    style={{
                      color: "#b4bcd0",
                      fontSize: "24px",
                      fontWeight: "500",
                      lineHeight: "31.2px",
                    }}
                  >
                    &nbsp;Take the guesswork out of product planning.
                  </span>
                </span>

                <p
                  className="mt-[16px]"
                  style={{
                    color: "#b4bcd0",
                    lineHeight: "24px",
                  }}
                >
                  View deep, real-time insights into your workspace performance.
                  Identify areas that need your attention and make informed
                  decisions.
                </p>
                <p
                  className="mt-[27px] text-gray-500"
                  style={{
                    fontSize: "14px",
                    fontWeight: "450",
                    lineHeight: "19.6px",
                  }}
                >
                  Available to Plus workspaces in early 2023.
                </p>
                <p
                  className=""
                  style={{
                    color: "#d0d6e0",
                    fontSize: "14px",
                    fontWeight: "450",
                    lineHeight: "19.6px",
                  }}
                >
                  Sign up for early access.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Div with 2 info images*/}
        <div className="min-w-full lg:h-[656px] lg:px-[192px] mt-[64px] lg:mt-[32px] flex flex-col justify-start items-center  lg:flex-row lg:justify-center lg:items-start text-start">
          <div className="lg:w-[456px] lg:h-[656px] flex flex-col justify-center items-center lg:items-start border-t border-t-[#8a8f98]/20 pt-[49px] lg:pt-0">
            <div className="w-full lg:w-[407px] lg:h-[352px]">
              <img src={reportingImg2} alt="" className="w-full lg:w-[407px]" />
            </div>

            <div className="lg:w-[407px] h-[140px] mt-[24px] flex flex-col justify-start items-start">
              <span>
                <span
                  style={{
                    color: "#f7f8f8",
                    fontSize: "18px",
                    fontWeight: "500",
                    lineHeight: "27px",
                  }}
                >
                  Airbyte Integration&nbsp;
                </span>
                <span
                  className="inline-flex justify-center items-center"
                  style={{
                    borderColor: "#33ffb6",
                    borderRadius: "4px",
                    borderStyle: "solid",
                    borderWidth: "1.5px",
                    color: "#33ffb6",
                    fontSize: "14px",
                    fontWeight: "500",
                    lineHeight: "24px",
                    padding: "0px 8px",
                  }}
                >
                  Plus
                </span>
              </span>
              <span
                className="mt-[8px]"
                style={{
                  color: "#b4bcd0",
                  lineHeight: "24px",
                }}
              >
                Connect Linear to Airbyte and consolidate your data in data
                warehouses, lakes, and databases.
              </span>

              <span
                className="mt-[12px] text-gray-500"
                style={{
                  fontSize: "14px",
                  fontWeight: "450",
                  lineHeight: "19.6px",
                }}
              >
                Learn More →
              </span>
            </div>
          </div>

          <div className="lg:w-[456px] lg:h-[656px] flex flex-col items-center justify-center lg:items-end border-t border-t-[#8a8f98]/20 lg:border-l lg:border-l-[#8a8f98]/20 pt-[49px] lg:pt-0">
            <div className="w-full lg:w-[407px] lg:h-[352px]">
              <img src={reportingImg3} alt="" className="w-full lg:w-[407px]" />
            </div>
            <div className="lg:w-[407px] h-[140px] mt-[24px] flex flex-col justify-start items-start">
              <span>
                <span
                  style={{
                    color: "#f7f8f8",
                    fontSize: "18px",
                    fontWeight: "500",
                    lineHeight: "27px",
                  }}
                >
                  CSV Export&nbsp;
                </span>
                <span
                  className="inline-flex justify-center items-center"
                  style={{
                    borderColor: "#33ffb6",
                    borderRadius: "4px",
                    borderStyle: "solid",
                    borderWidth: "1.5px",
                    color: "#33ffb6",
                    fontSize: "14px",
                    fontWeight: "500",
                    lineHeight: "24px",
                    padding: "0px 8px",
                  }}
                >
                  New
                </span>
              </span>
              <span
                className="mt-[8px]"
                style={{
                  color: "#b4bcd0",
                  lineHeight: "24px",
                }}
              >
                Export your work as CSV reports from any view, project, or issue
                list.
              </span>
            </div>
          </div>
        </div>

        {/* Div for cash app banner*/}
        <div className="mt-[64px] w-full lg:h-[382px] lg:w-[912px] rounded-[48px] border border-[#8a8f98]/20 flex justify-start items-center">
          <img
            src={retoolImg}
            alt=""
            className="lg:h-[382px] lg:w-[304px] rounded-[48px] lg:rounded-l-[48px] lg:rounded-r-[0px]"
          />
          <div className="h-[382px] w-[608px] bg-[#010216] rounded-r-[48px] hidden lg:flex justify-center items-center">
            <div className="w-[417px] flex flex-col">
              <span>
                <span
                  style={{
                    color: "#ffffff",
                    fontSize: "18px",
                    fontWeight: "450",
                    letterSpacing: "-0.18px",
                    lineHeight: "27px",
                  }}
                >
                  “Linear was the first tool that we successfully adopted as a
                  company around organizing projects and tasks.&nbsp;
                </span>
                <span
                  style={{
                    color: "#6a6576",
                    fontSize: "18px",
                    fontWeight: "450",
                    letterSpacing: "-0.18px",
                    lineHeight: "27px",
                  }}
                >
                  It’s used across different teams from engineering to marketing
                  to infrastructure and support.”
                </span>
              </span>
              <span
                className="mt-[21px]"
                style={{
                  color: "#33ffb6",
                  fontSize: "18px",
                  fontWeight: "450",
                  letterSpacing: "-0.18px",
                  lineHeight: "27px",
                }}
              >
                Read Story ↗
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reporting;
