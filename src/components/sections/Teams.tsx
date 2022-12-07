import React from "react";
import teamImg1 from "../../assets/asset11.png";
import teamImg2 from "../../assets/asset12.png";
import teamImg3 from "../../assets/asset13.png";
import teamImg4 from "../../assets/asset14.png";
import rampImg from "../../assets/asset15.jpeg";

function Teams() {
  return (
    <div
      style={{
        background:
          "radial-gradient(ellipse 50% 50% at center, rgba(111, 142, 255, 0.1), transparent)",
      }}
    >
      <div className="mt-[128px] min-w-full px-[24px] lg:px-0 flex flex-col justify-start items-center">
        {/* Teams header */}
        <div className="w-full lg:w-[912px] h-[34px] flex justify-start items-start border-b border-b-[#8a8f98]/20">
          <div className="flex justify-start items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="#6f8eff"
            >
              <path d="M1 3C1 1.89543 1.89543 1 3 1H9C10.1046 1 11 1.89543 11 3V3.5H6C4.61929 3.5 3.5 4.61929 3.5 6V11H3C1.89543 11 1 10.1046 1 9V3Z" />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7 5C5.89543 5 5 5.89543 5 7V13C5 14.1046 5.89543 15 7 15H13C14.1046 15 15 14.1046 15 13V7C15 5.89543 14.1046 5 13 5H7ZM10 10C10.9665 10 11.5 9.2165 11.5 8.25C11.5 7.2835 10.9665 6.5 10 6.5C9.0335 6.5 8.5 7.2835 8.5 8.25C8.5 9.2165 9.0335 10 10 10ZM7 12.5616C7 11.5144 7.9841 10.746 9 11C9.47572 11.7136 10.5243 11.7136 11 11C12.0159 10.746 13 11.5144 13 12.5616V13.0101C13 13.2806 12.7806 13.5 12.5101 13.5H7.48995C7.21936 13.5 7 13.2806 7 13.0101V12.5616Z"
              />
            </svg>

            <p
              className="ml-[8px]"
              style={{
                color: "#6f8eff",
                fontSize: "14px",
                fontWeight: "450",
                lineHeight: "21px",
              }}
            >
              Teams
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
              Built for teams of any size
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
              Structure tasks and teams with full flexibility. Collaborate
              across teams and departments, or with external stakeholders.
            </p>
          </div>
        </div>

        {/* Div with 2 info images*/}
        <div className="min-w-full flex flex-col justify-start items-center">
          <div className="min-w-full lg:h-[656px] lg:px-[192px] mt-[64px] flex flex-col justify-start items-center  lg:flex-row lg:justify-center lg:items-start text-start">
            <div className="lg:w-[456px] lg:h-[656px] flex flex-col justify-center items-center lg:items-start border-t border-t-[#8a8f98]/20 pt-[49px] lg:pt-0 lg:border-b lg:border-b-[#8a8f98]/20">
              <div className="w-full lg:w-[407px] lg:h-[352px]">
                <img src={teamImg1} alt="" className="w-full lg:w-[407px]" />
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
                    Team management&nbsp;
                  </span>
                  <span
                    className="inline-flex justify-center items-center"
                    style={{
                      borderColor: "#6f8eff",
                      borderRadius: "4px",
                      borderStyle: "solid",
                      borderWidth: "1.5px",
                      color: "#6f8eff",
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
                  Organize collaborators in teams while keeping your own
                  workspace tailored to teams relevant to you.
                </span>
              </div>
            </div>

            <div className="lg:w-[456px] lg:h-[656px] flex flex-col items-center justify-center lg:items-end border-t border-t-[#8a8f98]/20 pt-[49px] lg:pt-0 lg:border-b lg:border-b-[#8a8f98]/20 lg:border-l lg:border-l-[#8a8f98]/20">
              <div className="w-full lg:w-[407px] lg:h-[352px]">
                <img src={teamImg2} alt="" className="w-full lg:w-[407px]" />
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
                    Label groups&nbsp;
                  </span>
                  <span
                    className="inline-flex justify-center items-center"
                    style={{
                      borderColor: "#6f8eff",
                      borderRadius: "4px",
                      borderStyle: "solid",
                      borderWidth: "1.5px",
                      color: "#6f8eff",
                      fontSize: "14px",
                      fontWeight: "500",
                      lineHeight: "24px",
                      padding: "0px 8px",
                    }}
                  >
                    Preview
                  </span>
                </span>
                <span
                  className="mt-[8px]"
                  style={{
                    color: "#b4bcd0",
                    lineHeight: "24px",
                  }}
                >
                  Create groups of single-select labels to better organize and
                  standardize work across your company.
                </span>
                <span
                  className="mt-[9px] text-gray-500"
                  style={{
                    fontSize: "14px",
                    fontWeight: "450",
                    lineHeight: "19.6px",
                  }}
                >
                  Sign up for early access.
                </span>
              </div>
            </div>
          </div>

          <div className="min-w-full lg:h-[450px] lg:px-[192px] mt-[64px] lg:mt-0 flex flex-col justify-start items-center lg:flex-row lg:justify-center lg:items-start text-start">
            <div className="lg:w-[456px] lg:h-[450px] flex flex-col justify-center items-center lg:items-start border-t border-t-[#8a8f98]/20 pt-[49px] lg:pt-0 lg:border-[0px]">
              <div className="w-full lg:w-[407px] lg:h-[240px]">
                <img src={teamImg3} alt="" className="w-full lg:w-[407px]" />
              </div>

              <div className="lg:w-[407px] h-[90px] mt-[24px] flex flex-col justify-start items-start">
                <span
                  style={{
                    color: "#f7f8f8",
                    fontSize: "18px",
                    fontWeight: "500",
                    lineHeight: "27px",
                  }}
                >
                  Guest accounts
                </span>
                <span
                  className="mt-[8px]"
                  style={{
                    color: "#b4bcd0",
                    lineHeight: "24px",
                  }}
                >
                  Invite contractors, external stakeholders, or other members
                  with limited workspace access.
                </span>
              </div>
            </div>

            <div className="lg:w-[456px] lg:h-[450px] flex flex-col items-center justify-center lg:items-end border-t border-t-[#8a8f98]/20 pt-[49px] lg:pt-0 lg:border-l lg:border-l-[#8a8f98]/20">
              <div className="w-full lg:w-[407px] lg:h-[240px]">
                <img src={teamImg4} alt="" className="w-full lg:w-[407px]" />
              </div>
              <div className="lg:w-[407px] h-[90px] mt-[24px] flex flex-col justify-start items-start">
                <span
                  style={{
                    color: "#f7f8f8",
                    fontSize: "18px",
                    fontWeight: "500",
                    lineHeight: "27px",
                  }}
                >
                  Multi-team projects
                </span>
                <span
                  className="mt-[8px]"
                  style={{
                    color: "#b4bcd0",
                    lineHeight: "24px",
                  }}
                >
                  Collaborate across functions and departments with multi-team
                  projects.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Div for cash app banner*/}
        <div className="mt-[64px] w-full lg:h-[382px] lg:w-[912px] rounded-[48px] border border-[#8a8f98]/20 flex justify-start items-center">
          <img
            src={rampImg}
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
                  “When an issue is added to Linear, it moves from the space of
                  ideas to being actionable.&nbsp;
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
                  That is aligned with engineering culture at Ramp.”
                </span>
              </span>
              <span
                className="mt-[21px]"
                style={{
                  color: "#6f8eff",
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

export default Teams;
