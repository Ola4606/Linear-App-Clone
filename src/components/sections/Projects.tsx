import React from "react";
import projectBackgroundImg from "../../assets/asset1.png";
import projectImg1 from "../../assets/asset2.png";
import projectImg2 from "../../assets/asset3.png";
import projectImg3 from "../../assets/asset4.png";
import cashAppImg from "../../assets/asset5.jpeg";

function Projects() {
  return (
    <div
      style={{
        background:
          "radial-gradient(ellipse 50% 50% at center, rgba(181, 154, 255, 0.1), transparent)",
      }}
    >
      <div className="mt-[128px] min-w-full px-[24px] lg:px-0 flex flex-col justify-start items-center">
        {/* Project header */}
        <div className="w-full lg:w-[912px] h-[34px] flex justify-start items-start border-b border-b-[#8a8f98]/20">
          <div className="flex justify-start items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="#b59aff"
              className="shadow-[0 10px 15px -3px #b59aff] shadow-[#b59aff]"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5 1C2.79086 1 1 2.79086 1 5V11C1 13.2091 2.79086 15 5 15H11C13.2091 15 15 13.2091 15 11V5C15 2.79086 13.2091 1 11 1H5ZM7.72114 4.29396C7.63221 3.98271 7.35362 3.76363 7.03017 3.75061C6.70672 3.73759 6.41142 3.93356 6.29775 4.23666L4.98025 7.75H3.5C3.08579 7.75 2.75 8.08579 2.75 8.5C2.75 8.91422 3.08579 9.25 3.5 9.25H5.5C5.81263 9.25 6.09247 9.05608 6.20225 8.76335L6.90367 6.89289L8.27886 11.706C8.36382 12.0034 8.62263 12.2182 8.93059 12.2468C9.23855 12.2754 9.5325 12.1121 9.67082 11.8354L10.9635 9.25H12.5C12.9142 9.25 13.25 8.91422 13.25 8.5C13.25 8.08579 12.9142 7.75 12.5 7.75H10.5C10.2159 7.75 9.95622 7.91051 9.82918 8.16459L9.19145 9.44005L7.72114 4.29396Z"
              />
            </svg>

            <p
              className="ml-[8px]"
              style={{
                color: "#b59aff",
                fontSize: "14px",
                fontWeight: "450",
                lineHeight: "21px",
              }}
            >
              Projects
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
              Next level project planning
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
              Create multiple custom roadmaps to plan ahead and set the
              direction. Track and accelerate your progress along the journey
              with Project Updates and upgraded Cycle and Project Analytics.
            </p>
          </div>
        </div>

        {/* Div for background image and more info*/}
        <div className="min-w-full lg:h-[755px] px-[0px] lg:px-[192px] mt-[64px] lg:mt-[50px]">
          <div
            className="bg-center bg-no-repeat bg-contain w-full h-full"
            style={{ backgroundImage: `url(${projectBackgroundImg})` }}
          >
            <div className="min-w-full min-h-full flex flex-col-reverse justify-start items-center lg:flex-row lg:justify-center lg:items-end bg-[#000212] lg:bg-transparent">
              <div className="w-full lg:w-[462px] mb-[99px] text-start">
                <span>
                  <span
                    style={{
                      color: "#f7f8f8",
                      fontSize: "24px",
                      fontWeight: "500",
                      lineHeight: "31.2px",
                    }}
                  >
                    Improved Roadmaps&nbsp;
                  </span>
                  <span
                    className="inline-flex justify-center items-center"
                    style={{
                      borderColor: "#b59aff",
                      borderRadius: "4px",
                      borderStyle: "solid",
                      borderWidth: "1.5px",
                      color: "#b59aff",
                      fontSize: "14px",
                      fontWeight: "500",
                      lineHeight: "24px",
                      padding: "0px 8px",
                    }}
                  >
                    New
                  </span>
                  <span
                    style={{
                      color: "#b4bcd0",
                      fontSize: "24px",
                      fontWeight: "500",
                      lineHeight: "31.2px",
                    }}
                  >
                    &nbsp;Create multiple roadmaps, each with their own custom
                    set of projects.
                  </span>
                </span>

                <p
                  className="mt-[16px] text-start"
                  style={{
                    color: "#b4bcd0",
                    lineHeight: "24px",
                  }}
                >
                  Roll projects up into initiatives, product lines, or quarterly
                  goals.
                </p>
              </div>
              <img
                src={projectImg1}
                alt="Project Img 1"
                className="w-full lg:w-[386px] lg:h-[490px] lg:ml-[64px] backdrop-blur-sm"
                style={{WebkitMaskImage: "linear-gradient(black 50%, transparent)"}}
              />
            </div>
          </div>
        </div>

        {/* Div with 2 info images*/}
        <div className="min-w-full lg:h-[656px] lg:px-[192px] mt-[32px] flex flex-col justify-start items-center  lg:flex-row lg:justify-center lg:items-start text-start">
          <div className="lg:w-[456px] lg:h-[656px] flex flex-col justify-center items-center lg:items-start border-t border-t-[#8a8f98]/20 pt-[49px] lg:pt-0">
            <div className="w-full lg:w-[407px] lg:h-[429px]">
              <img src={projectImg2} alt="" className="w-full lg:w-[407px]"
              style={{WebkitMaskImage: "linear-gradient(black 50%, transparent)"}}/>
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
                  Cycle and Project Analytics&nbsp;
                </span>
                <span
                  className="inline-flex justify-center items-center"
                  style={{
                    borderColor: "#b59aff",
                    borderRadius: "4px",
                    borderStyle: "solid",
                    borderWidth: "1.5px",
                    color: "#b59aff",
                    fontSize: "14px",
                    fontWeight: "500",
                    lineHeight: "24px",
                    padding: "0px 8px",
                  }}
                >
                  Upgraded
                </span>
              </span>
              <span
                className="mt-[8px]"
                style={{
                  color: "#b4bcd0",
                  lineHeight: "24px",
                }}
              >
                Introducing redesigned and upgraded progress insights for Cycles
                and Projects. See exactly what’s in progress and what is done.
              </span>
            </div>
          </div>

          <div className="lg:w-[456px] lg:h-[656px] flex flex-col items-center justify-center lg:items-end border-t border-t-[#8a8f98]/20 lg:border-l lg:border-l-[#8a8f98]/20 pt-[49px] lg:pt-0">
            <div className="w-full lg:w-[407px] lg:h-[429px]">
              <img src={projectImg3} alt="" className="w-full lg:w-[407px]" 
              style={{WebkitMaskImage: "linear-gradient(black 50%, transparent)"}}/>
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
                  Project Updates&nbsp;
                </span>
                <span
                  className="inline-flex justify-center items-center"
                  style={{
                    borderColor: "#b59aff",
                    borderRadius: "4px",
                    borderStyle: "solid",
                    borderWidth: "1.5px",
                    color: "#b59aff",
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
                Write short status updates that keep everyone in your company
                up-to-date on the health and progress of your projects.
              </span>
            </div>
          </div>
        </div>

        {/* Div for cash app banner*/}
        <div className="mt-[64px] w-full lg:h-[382px] lg:w-[912px] rounded-[48px] border border-[#8a8f98]/20 flex justify-start items-center bg-red">
          <img
            src={cashAppImg}
            alt=""
            className="lg:h-[382px] lg:w-[304px] rounded-[48px] lg:rounded-l-[48px] lg:rounded-r-[0px]"
          />
          <div className="h-[382px] w-[608px] bg-[#010216] rounded-r-[48px] hidden lg:flex justify-center items-center">
            <div className="w-[417px] flex flex-col">
              <span>
                <span
                  style={{
                    color: "#6a6576",
                    fontSize: "18px",
                    fontWeight: "450",
                    letterSpacing: "-0.18px",
                    lineHeight: "27px",
                  }}
                >
                  “We run a very large platform team that manages aggressive
                  roadmaps with various points of cross-vertical intersections.
                </span>
                <span
                  style={{
                    color: "#ffffff",
                    fontSize: "18px",
                    fontWeight: "450",
                    letterSpacing: "-0.18px",
                    lineHeight: "27px",
                  }}
                >
                  These were very hard to coordinate until we used Linear.”
                </span>
              </span>
              <span
                className="mt-[21px]"
                style={{
                  color: "#b59aff",
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

export default Projects;
