import React from "react";

function Workflows() {
  return (
    <div
      style={{
        background:
          "radial-gradient(ellipse 50% 50% at center, rgba(181, 154, 255, 0.1), transparent)",
      }}
    >
       <div className="mt-[128px] min-w-full px-[24px] lg:px-0 flex flex-col justify-start items-center">
        {/* Workflows header */}
        <div className="w-full lg:w-[912px] h-[34px] flex justify-start items-start border-b border-b-[#8a8f98]/20">
          <div className="flex justify-start items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="#b59aff"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.05025 12.9497C5.78392 15.6834 10.2161 15.6834 12.9497 12.9497C15.6834 10.2161 15.6834 5.78392 12.9497 3.05025C10.2161 0.316582 5.78392 0.316582 3.05025 3.05025C0.316582 5.78392 0.316583 10.2161 3.05025 12.9497ZM8.75 5.17157C8.75 4.75736 8.41421 4.42157 8 4.42157C7.58579 4.42157 7.25 4.75736 7.25 5.17157V7.25L5.17157 7.25C4.75736 7.25 4.42157 7.58579 4.42157 8C4.42157 8.41421 4.75736 8.75 5.17157 8.75L7.25 8.75L7.25 10.8284C7.25 11.2426 7.58579 11.5784 8 11.5784C8.41421 11.5784 8.75 11.2426 8.75 10.8284L8.75 8.75L10.8284 8.75C11.2426 8.75 11.5784 8.41421 11.5784 8C11.5784 7.58579 11.2426 7.25 10.8284 7.25L8.75 7.25V5.17157Z"
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
              Workflows
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
                  viewBox="0 0 24 24"
                  fill="#b59aff"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9.005 1.93c-3.422.254-6.331.476-6.464.492-.38.08-.727.318-.892.651L1.5 3.36l.033 13.786.215.429c.132.238.959 1.35 1.868 2.478 1.802 2.255 1.934 2.366 2.612 2.446.198.015 1.703-.048 3.306-.143 1.62-.096 4.232-.255 5.786-.334 6.662-.397 6.315-.365 6.712-.683.48-.381.43.254.463-8.132.016-7.1 0-7.576-.116-7.782-.116-.254-.347-.413-3.389-2.462-2.033-1.382-2.182-1.445-3.091-1.461-.38-.016-3.488.19-6.894.429Zm7.687.905c.298.127 2.397 1.525 2.695 1.795.082.08.115.159.066.19-.083.08-13.093.826-13.473.763a1.504 1.504 0 0 1-.562-.207C4.823 4.98 3.35 3.82 3.35 3.74c0-.222-.05-.222 5.737-.635 1.107-.064 2.942-.19 4.05-.286 2.397-.175 3.108-.175 3.554.016Zm4.133 3.59c.1.095.182.27.215.444.016.159.033 3.113.016 6.544-.016 5.876-.033 6.258-.148 6.416a.602.602 0 0 1-.315.254c-.28.112-13.902.858-14.183.779a.908.908 0 0 1-.397-.239l-.165-.158-.017-6.353c-.016-4.463 0-6.433.05-6.608a.779.779 0 0 1 .231-.349c.116-.08.926-.143 3.703-.302 1.95-.095 4.976-.27 6.695-.38 4.133-.24 4.117-.24 4.315-.049Z"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M17.172 8.6c-.744.048-1.406.112-1.472.16a.683.683 0 0 0-.396.507c-.017.207.05.239.793.334l.314.032v2.811c0 1.668-.016 2.763-.066 2.732-.033-.032-.992-1.461-2.149-3.145-1.157-1.715-2.116-3.113-2.133-3.113-.016-.016-.76.016-1.67.08-1.107.063-1.718.142-1.834.206-.199.095-.43.445-.43.667 0 .143.265.222.81.222h.298v8.069l-.48.143c-.347.095-.48.158-.545.301-.1.223-.1.413.016.413.033 0 .81-.031 1.703-.095 1.752-.095 1.95-.143 2.133-.492.066-.096.115-.207.115-.254 0-.016-.248-.096-.529-.16-.297-.063-.595-.142-.661-.142-.116-.032-.116-.239-.116-3.066v-3.033l2.083 3.129c2.182 3.287 2.447 3.669 2.794 3.827.413.207 1.471.064 2-.27l.166-.095.033-8.973.363-.064c.43-.08.628-.27.628-.604 0-.206-.016-.222-.215-.206-.115 0-.826.048-1.553.08Z"
                  />
                </svg>

                <p
                  className="ml-[8px]"
                  style={{
                    color: "#f7f8f8",
                    fontSize: "18px",
                    fontWeight: "500",
                    lineHeight: "27px",
                  }}
                >
                  Notion
                </p>
              </div>

              <span
                className="mt-[12px]"
                style={{
                  color: "#b4bcd0",
                  lineHeight: "24px",
                }}
              >
                Bring the magic of Linear to Notion with live previews for
                issues, projects, and views.
              </span>

              <span
                className="text-gray-500 mt-[8px]"
                style={{
                  fontSize: "14px",
                  fontWeight: "450",
                  lineHeight: "19.6px",
                }}
              >
                Learn More →
              </span>
            </div>

            <div className="lg:h-[139px] lg:w-[275px] flex flex-col justify-start items-start mt-[24px] lg:mt-0">
              <div className="flex justify-start items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 16 16"
                  fill="#b59aff"
                  role="img"
                  focusable="false"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.5127 1.96247C10.4401 1.32066 9.27013 0.999756 7.99946 0.999756C6.72987 0.999756 5.5588 1.32066 4.48573 1.96247C3.41428 2.60373 2.56465 3.4742 1.939 4.57333C1.31228 5.67358 1 6.87335 1 8.17542C1 9.73858 1.44527 11.1441 2.33528 12.393C3.22529 13.6398 4.37482 14.5063 5.78494 14.9843C5.94862 15.0156 6.0703 14.9938 6.14891 14.9189C6.22806 14.8435 6.26736 14.7512 6.26736 14.6394L6.26306 14.1334C6.25983 13.8159 6.25767 13.5391 6.25767 13.3021L6.04877 13.339C5.91524 13.3642 5.74617 13.3748 5.54265 13.3714C5.33967 13.3686 5.12807 13.3468 4.90947 13.306C4.69249 13.2658 4.4895 13.173 4.30105 13.0265C4.11261 12.88 3.97908 12.6882 3.89993 12.4518L3.8084 12.236C3.7481 12.0928 3.65226 11.9341 3.52196 11.7607C3.39112 11.5852 3.25921 11.4667 3.12568 11.4046L3.06107 11.3582C3.01908 11.3269 2.98031 11.29 2.94262 11.2464C2.90655 11.2028 2.87962 11.1592 2.86186 11.1156C2.84355 11.0708 2.85809 11.0356 2.90655 11.0077C2.955 10.9786 3.0433 10.9657 3.17037 10.9657L3.35343 10.9937C3.47404 11.0183 3.6248 11.0932 3.80409 11.2173C3.98339 11.3426 4.13091 11.5041 4.2456 11.7037C4.38559 11.9587 4.55411 12.1532 4.75171 12.2874C4.94931 12.4216 5.14853 12.4886 5.34936 12.4886C5.54857 12.4886 5.72248 12.4719 5.86839 12.4417C6.01377 12.4104 6.15107 12.3634 6.27759 12.3019C6.33359 11.8837 6.48219 11.5628 6.72448 11.3386C6.37882 11.3006 6.06761 11.2447 5.7914 11.1698C5.51465 11.0954 5.22929 10.9741 4.93531 10.8053C4.63918 10.6376 4.39528 10.4296 4.20091 10.1791C4.00708 9.93202 3.84717 9.60329 3.72333 9.20076C3.59949 8.79431 3.5365 8.32861 3.5365 7.79861C3.5365 7.04554 3.77556 6.40373 4.25583 5.87373C4.03077 5.30683 4.05123 4.67173 4.32044 3.9673C4.49542 3.91139 4.75656 3.95332 5.1033 4.09309C5.4495 4.23286 5.70256 4.35306 5.86355 4.45201C6.02507 4.55265 6.1543 4.63651 6.25121 4.70471C6.81494 4.54594 7.39751 4.46599 7.99946 4.46599C8.60142 4.46599 9.18399 4.54706 9.74933 4.70863L10.0955 4.48388C10.3324 4.33461 10.6124 4.19876 10.9344 4.07297C11.2574 3.94885 11.504 3.91475 11.6742 3.97066C11.9472 4.67508 11.9719 5.30963 11.7469 5.87708C12.2261 6.40597 12.4662 7.04778 12.4662 7.8014C12.4662 8.33029 12.4037 8.79935 12.2794 9.20747C12.1555 9.61559 11.994 9.94432 11.7959 10.1898C11.5988 10.4357 11.3533 10.6426 11.0582 10.8114C10.7637 10.9792 10.4767 11.1005 10.2021 11.1748C9.92539 11.2498 9.61526 11.3057 9.26744 11.3426C9.58349 11.6221 9.74125 12.0638 9.74125 12.6692V14.6411C9.74125 14.7529 9.77894 14.8457 9.8554 14.9206C9.93077 14.995 10.0508 15.0173 10.2151 14.986C11.6257 14.5052 12.7747 13.642 13.6647 12.3919C14.5547 11.1452 15 9.73802 15 8.17542C15 6.87391 14.6866 5.67358 14.061 4.57389C13.4348 3.47476 12.5857 2.60429 11.5143 1.96303L11.5127 1.96247Z"
                  />
                </svg>

                <p
                  className="ml-[8px]"
                  style={{
                    color: "#f7f8f8",
                    fontSize: "18px",
                    fontWeight: "500",
                    lineHeight: "27px",
                  }}
                >
                  GitHub improvements
                </p>
              </div>

              <span
                className="mt-[12px]"
                style={{
                  color: "#b4bcd0",
                  lineHeight: "24px",
                }}
              >
                Track who reviewed, commented, or requested changes on pull
                requests without leaving Linear.
              </span>
            </div>

            <div className="lg:h-[139px] lg:w-[275px] flex flex-col justify-start items-start mt-[24px] lg:mt-0">
              <div className="flex justify-start items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 16 16"
                  fill="#b59aff"
                >
                  <path d="M13.2064 3.005C12.2355 2.5355 11.1972 2.19429 10.1118 2C9.97851 2.24907 9.82277 2.58408 9.7154 2.85057C8.56156 2.67124 7.41834 2.67124 6.28572 2.85057C6.17837 2.58408 6.0191 2.24907 5.8846 2C4.798 2.19429 3.7586 2.53675 2.78762 3.00748C0.829152 6.06602 0.298243 9.04858 0.563698 11.9888C1.86266 12.9913 3.12151 13.6003 4.35911 13.9988C4.66468 13.5641 4.93721 13.1021 5.17199 12.6152C4.72485 12.4396 4.29658 12.2229 3.89192 11.9714C3.99928 11.8892 4.10429 11.8032 4.20574 11.7148C6.67387 12.9079 9.35556 12.9079 11.7942 11.7148C11.8969 11.8032 12.0018 11.8892 12.108 11.9714C11.7022 12.2242 11.2727 12.4408 10.8256 12.6165C11.0604 13.1021 11.3317 13.5654 11.6385 14C12.8773 13.6015 14.1373 12.9925 15.4362 11.9888C15.7477 8.58034 14.9042 5.62516 13.2064 3.005ZM5.50824 10.1806C4.76733 10.1806 4.15972 9.46576 4.15972 8.59528C4.15972 7.72479 4.75435 7.00873 5.50824 7.00873C6.26214 7.00873 6.86972 7.72354 6.85675 8.59528C6.85792 9.46576 6.26214 10.1806 5.50824 10.1806ZM10.4917 10.1806C9.7508 10.1806 9.1432 9.46576 9.1432 8.59528C9.1432 7.72479 9.73781 7.00873 10.4917 7.00873C11.2456 7.00873 11.8532 7.72354 11.8402 8.59528C11.8402 9.46576 11.2456 10.1806 10.4917 10.1806Z" />
                </svg>

                <p
                  className="ml-[8px]"
                  style={{
                    color: "#f7f8f8",
                    fontSize: "18px",
                    fontWeight: "500",
                    lineHeight: "27px",
                  }}
                >
                  Discord
                </p>
              </div>

              <span
                className="mt-[12px]"
                style={{
                  color: "#b4bcd0",
                  lineHeight: "24px",
                }}
              >
                Create issues and share a summary of your day’s work directly
                from your Discord server.
              </span>

              <span
                className="text-gray-500 mt-[8px]"
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
        </div>
      </div>
    </div>
  );
}

export default Workflows;