import React from "react";

function Security() {
  return (
    <div
      style={{
        background:
          "radial-gradient(ellipse 50% 50% at center, rgba(148, 151, 183, 0.1), transparent)",
      }}
    >
      <div className="mt-[128px] min-w-full px-[24px] lg:px-0 flex flex-col justify-start items-center">
        {/* Security header */}
        <div className="w-full lg:w-[912px] h-[34px] flex justify-start items-start border-b border-b-[#8a8f98]/20">
          <div className="flex justify-start items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="#9497b7"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11 7C12.1046 7 13 7.89543 13 9V13C13 14.1046 12.1046 15 11 15H5C3.89543 15 3 14.1046 3 13V9C3 7.89543 3.89543 7 5 7H6.5H11ZM8 9C7.17157 9 6.5 9.67157 6.5 10.5C6.5 11.3284 7.17157 12 8 12C8.82843 12 9.5 11.3284 9.5 10.5C9.5 9.67157 8.82843 9 8 9ZM8 1C9.65685 1 11 2.34315 11 4V6H9.5V4C9.5 3.17157 8.82843 2.5 8 2.5C7.17157 2.5 6.5 3.17157 6.5 4V6H5V4C5 2.34315 6.34315 1 8 1Z"
              />
            </svg>

            <p
              className="ml-[8px]"
              style={{
                color: "#9497b7",
                fontSize: "14px",
                fontWeight: "450",
                lineHeight: "21px",
              }}
            >
              Enterprise-grade security
            </p>
          </div>
        </div>

        {/* Div with 3 info sections*/}
        <div className="w-full lg:w-[912px] mt-[49px] flex justify-center items-start">
          <div className="min-w-full lg:h-[139px] flex flex-col justify-start lg:flex-row lg:justify-between items-start">
            <div className="lg:h-[139px] lg:w-[275px] flex flex-col justify-start items-start">
              <div className="flex justify-start items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 16 16"
                  fill="#9497b7"
                >
                  <path d="M10.2857 5.44444C10.2857 6.79447 9.26237 7.88889 8 7.88889C6.73764 7.88889 5.71429 6.79447 5.71429 5.44444C5.71429 4.09441 6.73764 3 8 3C9.26237 3 10.2857 4.09441 10.2857 5.44444Z" />
                  <path d="M3.42857 11.9603C3.42857 10.9748 3.98128 10.081 4.85831 9.7786C5.79546 9.45545 7.02325 9.11111 8 9.11111C8.97675 9.11111 10.2045 9.45545 11.1417 9.77859C12.0187 10.081 12.5714 10.9748 12.5714 11.9603V12.7778C12.5714 13.4528 12.0598 14 11.4286 14H4.57143C3.94025 14 3.42857 13.4528 3.42857 12.7778V11.9603Z" />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.63272 4.75066C4.59249 4.97531 4.57143 5.20725 4.57143 5.44444C4.57143 6.00206 4.68782 6.5306 4.89604 7.00381C4.59565 7.53433 4.05083 7.88889 3.42857 7.88889C2.4818 7.88889 1.71429 7.06808 1.71429 6.05556C1.71429 5.04303 2.4818 4.22222 3.42857 4.22222C3.89788 4.22222 4.32315 4.42391 4.63272 4.75066Z"
                  />
                  <path d="M2.28571 12.7778V11.9603C2.28571 10.8522 2.76028 9.77952 3.59669 9.11537C3.5397 9.11257 3.48361 9.11111 3.42857 9.11111C2.69601 9.11111 1.77516 9.36937 1.0723 9.61172C0.414531 9.83853 0 10.5089 0 11.248V11.8611C0 12.3674 0.383756 12.7778 0.857143 12.7778H2.28571Z" />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.3716 4.75066C11.4118 4.97531 11.4329 5.20725 11.4329 5.44444C11.4329 6.00206 11.3166 6.5306 11.1086 7.00381C11.4087 7.53433 11.953 7.88889 12.5747 7.88889C13.5205 7.88889 14.2873 7.06808 14.2873 6.05556C14.2873 5.04303 13.5205 4.22222 12.5747 4.22222C12.1058 4.22222 11.6809 4.42391 11.3716 4.75066Z"
                  />
                  <path d="M13.7164 12.7778V11.9603C13.7164 10.8522 13.2423 9.77952 12.4067 9.11537C12.4636 9.11257 12.5197 9.11111 12.5747 9.11111C13.3065 9.11111 14.2265 9.36937 14.9287 9.61172C15.5859 9.83853 16 10.5089 16 11.248V11.8611C16 12.3674 15.6166 12.7778 15.1437 12.7778H13.7164Z" />
                </svg>

                <span className="ml-[8px]">
                  <span
                    style={{
                      color: "#f7f8f8",
                      fontSize: "18px",
                      fontWeight: "500",
                      lineHeight: "27px",
                    }}
                  >
                    SCIM&nbsp;&nbsp;&nbsp;
                  </span>
                  <span
                    className="inline-flex justify-center items-center"
                    style={{
                      borderColor: "#9497b7",
                      borderRadius: "4px",
                      borderStyle: "solid",
                      borderWidth: "1.5px",
                      color: "#9497b7",
                      fontSize: "12px",
                      fontWeight: "500",
                      lineHeight: "20px",
                      padding: "0px 8px",
                    }}
                  >
                    Enterprise
                  </span>
                </span>
              </div>

              <span
                className="mt-[12px]"
                style={{
                  color: "#b4bcd0",
                  lineHeight: "24px",
                }}
              >
                SCIM allows large organizations to provision and deprovision
                users in Linear from their identity providers.
              </span>
            </div>

            <div className="lg:h-[139px] lg:w-[275px] flex flex-col justify-start items-start mt-[24px] lg:mt-0">
              <div className="flex justify-start items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 16 16"
                  fill="#9497b7"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1.254 7.387a.867.867 0 0 0 0 1.226l1.542 1.543v2.18c0 .48.389.868.868.868h2.18l1.543 1.542a.867.867 0 0 0 1.226 0l1.543-1.542h2.18a.867.867 0 0 0 .868-.868v-2.18l1.542-1.543a.867.867 0 0 0 0-1.226l-1.542-1.542V3.664a.867.867 0 0 0-.868-.868h-2.18L8.613 1.254a.867.867 0 0 0-1.226 0L5.845 2.796H3.664a.867.867 0 0 0-.868.868v2.18L1.254 7.388Zm9.556-1.234a.543.543 0 0 1 .028.8L8.104 9.702c-.37.373-.989.4-1.394.06L5.201 8.497a.543.543 0 0 1-.05-.798c.22-.234.6-.255.848-.047l1.363 1.142 2.6-2.615a.626.626 0 0 1 .848-.026Z"
                  />
                </svg>

                <span className="ml-[8px]">
                  <span
                    style={{
                      color: "#f7f8f8",
                      fontSize: "18px",
                      fontWeight: "500",
                      lineHeight: "27px",
                    }}
                  >
                    Domain claiming&nbsp;&nbsp;&nbsp;
                  </span>
                  <span
                    className="inline-flex justify-center items-center"
                    style={{
                      borderColor: "#9497b7",
                      borderRadius: "4px",
                      borderStyle: "solid",
                      borderWidth: "1.5px",
                      color: "#9497b7",
                      fontSize: "12px",
                      fontWeight: "500",
                      lineHeight: "20px",
                      padding: "0px 8px",
                    }}
                  >
                    Plus
                  </span>
                </span>
              </div>

              <span
                className="mt-[12px]"
                style={{
                  color: "#b4bcd0",
                  lineHeight: "24px",
                }}
              >
                Add an extra layer of security and keep your teammates in the
                right workspace by claiming a domain.
              </span>
            </div>

            <div className="lg:h-[139px] lg:w-[275px] flex flex-col justify-start items-start mt-[24px] lg:mt-0">
              <div className="flex justify-start items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 16 16"
                  fill="#9497b7"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.88988 8.41959C8.85635 8.19776 8.96598 7.9475 9.17655 8.009L9.9596 8.24531C10.2634 8.33403 10.571 8.1547 10.6468 7.84478L10.6343 7.15935C10.7101 6.84943 11.0178 6.67011 11.3215 6.75882L11.9033 7.11244C12.2071 7.20116 12.5148 7.02184 12.5905 6.71192L12.5781 6.02649C12.6538 5.71657 12.9615 5.53724 13.2653 5.62596L13.847 5.97958C14.1508 6.0683 14.4585 5.88897 14.5342 5.57905L14.9828 3.74436C15.0765 3.36133 14.7748 2.98345 14.389 3.00056L12.7791 3.07195C12.6913 3.07584 12.6064 3.10076 12.5309 3.14473L8.37023 5.56972C7.94026 5.82032 7.39892 5.7287 6.96521 5.45409C5.75524 4.68801 4.20962 4.59206 2.92533 5.34059C1.04673 6.4355 0.438645 8.92267 1.56714 10.8958C2.69563 12.869 5.13335 13.581 7.01195 12.4861C8.43802 11.6549 9.13195 10.0215 8.88988 8.41959ZM5.1402 11.7371C4.12988 11.8226 3.09688 11.3049 2.53904 10.3295C1.9812 9.35414 2.0536 8.1922 2.63206 7.35165C2.98815 6.83422 3.7149 7.04615 4.03733 7.60991L5.62128 10.3795C5.94371 10.9432 5.76213 11.6845 5.1402 11.7371Z"
                  />
                </svg>

                <span className="ml-[8px]">
                  <span
                    style={{
                      color: "#f7f8f8",
                      fontSize: "18px",
                      fontWeight: "500",
                      lineHeight: "27px",
                    }}
                  >
                    App Approvals&nbsp;&nbsp;&nbsp;
                  </span>
                  <span
                    className="inline-flex justify-center items-center"
                    style={{
                      borderColor: "#9497b7",
                      borderRadius: "4px",
                      borderStyle: "solid",
                      borderWidth: "1.5px",
                      color: "#9497b7",
                      fontSize: "12px",
                      fontWeight: "500",
                      lineHeight: "20px",
                      padding: "0px 8px",
                    }}
                  >
                    Plus
                  </span>
                </span>
              </div>

              <span
                className="mt-[12px]"
                style={{
                  color: "#b4bcd0",
                  lineHeight: "24px",
                }}
              >
                Control which applications have access to your Linear workspace
                and workspace information.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Security;
