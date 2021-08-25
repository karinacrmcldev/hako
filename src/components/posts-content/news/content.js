import React, { useState } from "react";
// import ReactPlayer from "react-player";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

import { FacebookShareButton } from "react-share";

export default function Content({ object }) {
  let n =
    object.media.length == 1
      ? "auto"
      : object.media.length == 2
      ? 2
      : object.media.length == 3
      ? 3
      : null;

  let srcLinkLine = object.srcLink.split("").slice(0, 30).join("");

  const [fbIsHovered, setfbIsHovered] = useState(false);
  const [msIsHovered, setmsIsHovered] = useState(false);
  const [twIsHovered, settwIsHovered] = useState(false);

  return (
    <div className="font-fontbasic text-primary  flex flex-col w-full px-4">
      <h2 className="font-semibold text-xl mt-4 text-contentbreaks lptpXS:text-base">
        {object.newsTitle}
      </h2>
      <span className="text-sm font-medium lptpXS:text-xs">
        {object.updated}
      </span>
      <span className="text-xs mt-1 italic">{object.author}</span>
      <hr className="mt-4 bg-gray-light border-transparent h-0.5 bg-gradient-to-r from-gradient-from to-gradient-to " />
      <p className="text-sm font-regular mt-4 text-contentbreaks lptpXS:text-xs">
        {object.text}
      </p>
      <div className="relative flex justify-center w-full mt-4 mb-4">
        <div className={`grid grid-cols-${n} w-full gap-2 `}>
          {object.media.map((img) => {
            return (
              <Zoom transitionDuration={200} key={img.data.id}>
                <img
                  className="w-full object-cover h-60 lptpXS:h-52"
                  src={img.data.url}
                />
              </Zoom>
            );
          })}
        </div>
      </div>
      <div className="flex justify-between items-center w-full">
        <div className="flex text-sm">
          <p className="mr-2 lptpXS:text-xs">From the source: </p>
          <a className="font-semibold lptpXS:text-xs" href={object.srcLink}>
            {srcLinkLine}...
          </a>
        </div>
        <div className="flex w-20 justify-between mb-2 mt-2">
          <a
            onMouseEnter={() => {
              setfbIsHovered(true);
            }}
            onMouseLeave={() => {
              setfbIsHovered(false);
            }}
            href={`https://www.facebook.com/sharer/sharer.php?u=${object.srcLink}`}
            target="_blank"
          >
            {fbIsHovered ? (
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="10.6829"
                  cy="10.6829"
                  r="10.6829"
                  fill="url(#paint0_linear_626_28)"
                />
                <g clipPath="url(#clip0_626_28)">
                  <path
                    d="M13.2126 12.0107L13.5291 9.75508H11.5503V8.29136C11.5503 7.67428 11.8268 7.07277 12.713 7.07277H13.6126V5.15238C13.6126 5.15238 12.7962 5 12.0157 5C10.3861 5 9.32095 6.08032 9.32095 8.03601V9.75508H7.50952V12.0107H9.32095V17.4634H11.5503V12.0107H13.2126Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear_626_28"
                    x1="10.6829"
                    y1="0"
                    x2="10.6829"
                    y2="21.3659"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#9A86B5" />
                    <stop offset="1" stopColor="#D3EEE6" />
                  </linearGradient>
                  <clipPath id="clip0_626_28">
                    <rect
                      width="7.12195"
                      height="12.4634"
                      fill="white"
                      transform="translate(7 5)"
                    />
                  </clipPath>
                </defs>
              </svg>
            ) : (
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_625_27)">
                  <path
                    d="M13.2126 12.0107L13.5291 9.75508H11.5503V8.29136C11.5503 7.67428 11.8268 7.07277 12.713 7.07277H13.6126V5.15238C13.6126 5.15238 12.7962 5 12.0157 5C10.3861 5 9.32095 6.08032 9.32095 8.03601V9.75508H7.50952V12.0107H9.32095V17.4634H11.5503V12.0107H13.2126Z"
                    fill="url(#paint0_linear_625_27)"
                  />
                </g>
                <circle
                  cx="10.6829"
                  cy="10.6829"
                  r="10.0829"
                  stroke="url(#paint1_linear_625_27)"
                  strokeWidth="1.5"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_625_27"
                    x1="10.5611"
                    y1="5"
                    x2="10.5611"
                    y2="17.4634"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#9A86B5" />
                    <stop offset="1" stopColor="#D3EEE6" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_625_27"
                    x1="10.6829"
                    y1="0"
                    x2="10.6829"
                    y2="21.3659"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#9A86B5" />
                    <stop offset="1" stopColor="#D3EEE6" />
                  </linearGradient>
                  <clipPath id="clip0_625_27">
                    <rect
                      width="7.12195"
                      height="12.4634"
                      fill="white"
                      transform="translate(7 5)"
                    />
                  </clipPath>
                </defs>
              </svg>
            )}
          </a>
          <a
            className="cursor-pointer"
            onMouseEnter={() => {
              setmsIsHovered(true);
            }}
            onMouseLeave={() => {
              setmsIsHovered(false);
            }}
            href={`fb-messenger://share/?link=http://${object.srcLink}&app_id=ok`}
            target="_blank"
          >
            {msIsHovered ? (
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="10.6829"
                  cy="10.6829"
                  r="10.6829"
                  fill="url(#paint0_linear_25_199)"
                />
                <path
                  d="M10.5144 5C6.84427 5 4 7.47609 4 10.8205C4 12.5698 4.77869 14.0815 6.04619 15.1258C6.26504 15.3075 6.21996 15.4127 6.25718 16.5346C6.26011 16.6132 6.28382 16.6899 6.32625 16.7581C6.36868 16.8263 6.42854 16.8839 6.5006 16.9258C6.57267 16.9677 6.65475 16.9927 6.73969 16.9986C6.82463 17.0045 6.90984 16.9912 6.9879 16.9597C8.37466 16.396 8.39248 16.3515 8.62758 16.4105C12.6453 17.4313 17 15.0578 17 10.8205C17 7.47609 14.1848 5 10.5144 5ZM14.4259 9.47918L12.5126 12.2754C12.4404 12.3805 12.3454 12.4708 12.2336 12.5404C12.1218 12.6101 11.9956 12.6577 11.863 12.6803C11.7303 12.7028 11.5941 12.6998 11.4627 12.6715C11.3314 12.6432 11.2078 12.5901 11.0997 12.5156L9.57742 11.4639C9.50937 11.4168 9.4266 11.3913 9.34153 11.3913C9.25647 11.3913 9.1737 11.4168 9.10565 11.4639L7.05159 12.902C6.77744 13.0939 6.41837 12.7907 6.60315 12.5229L8.51645 9.72669C8.58868 9.62152 8.68366 9.53126 8.79545 9.46156C8.90724 9.39187 9.03343 9.34425 9.16609 9.3217C9.29876 9.29914 9.43504 9.30213 9.56639 9.33048C9.69775 9.35883 9.82134 9.41192 9.92942 9.48644L11.4511 10.5379C11.5192 10.5851 11.602 10.6105 11.687 10.6105C11.7721 10.6105 11.8549 10.5851 11.9229 10.5379L13.978 9.10126C14.2517 8.90818 14.6107 9.2111 14.4259 9.47918Z"
                  fill="white"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_25_199"
                    x1="10.6829"
                    y1="0"
                    x2="10.6829"
                    y2="21.3659"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#9A86B5" />
                    <stop offset="1" stopColor="#D3EEE6" />
                  </linearGradient>
                </defs>
              </svg>
            ) : (
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="10.6829"
                  cy="10.6829"
                  r="10.0829"
                  stroke="url(#paint0_linear_625_14)"
                  strokeWidth="1.5"
                />
                <path
                  d="M11.0135 4.93335C7.58801 4.93335 4.93335 7.24437 4.93335 10.3659C4.93335 11.9985 5.66013 13.4094 6.84313 14.3841C7.04739 14.5536 7.00531 14.6519 7.04005 15.699C7.04278 15.7723 7.06492 15.844 7.10452 15.9076C7.14412 15.9712 7.19999 16.025 7.26725 16.0641C7.33451 16.1032 7.41111 16.1266 7.49039 16.1321C7.56967 16.1376 7.6492 16.1251 7.72206 16.0958C9.01636 15.5696 9.033 15.5281 9.25242 15.5832C13.0023 16.5359 17.0667 14.3206 17.0667 10.3659C17.0667 7.24437 14.4392 4.93335 11.0135 4.93335ZM14.6642 9.11392L12.8785 11.7237C12.811 11.8218 12.7224 11.9061 12.618 11.9711C12.5137 12.0361 12.3959 12.0805 12.2721 12.1016C12.1483 12.1226 12.0211 12.1199 11.8985 12.0934C11.776 12.067 11.6606 12.0174 11.5597 11.9479L10.1389 10.9663C10.0754 10.9223 9.99817 10.8986 9.91878 10.8986C9.83939 10.8986 9.76213 10.9223 9.69862 10.9663L7.7815 12.3086C7.52563 12.4876 7.19049 12.2047 7.36295 11.9547L9.1487 9.34493C9.21611 9.24677 9.30477 9.16252 9.40911 9.09748C9.51344 9.03243 9.63122 8.98799 9.75504 8.96693C9.87886 8.94588 10.0061 8.94867 10.1286 8.97513C10.2512 9.00159 10.3666 9.05114 10.4675 9.12069L11.8878 10.1021C11.9513 10.1461 12.0285 10.1698 12.1079 10.1698C12.1873 10.1698 12.2646 10.1461 12.3281 10.1021L14.2462 8.76119C14.5016 8.58099 14.8367 8.86371 14.6642 9.11392Z"
                  fill="url(#paint1_linear_625_14)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_625_14"
                    x1="10.6829"
                    y1="0"
                    x2="10.6829"
                    y2="21.3659"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#9A86B5" />
                    <stop offset="1" stopColor="#D3EEE6" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_625_14"
                    x1="11"
                    y1="4.93335"
                    x2="11"
                    y2="16.1333"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#9A86B5" />
                    <stop offset="1" stopColor="#D3EEE6" />
                  </linearGradient>
                </defs>
              </svg>
            )}
          </a>
          <a
            className="cursor-pointer"
            onMouseEnter={() => {
              settwIsHovered(true);
            }}
            onMouseLeave={() => {
              settwIsHovered(false);
            }}
            href={`https://twitter.com/intent/tweet?url=${object.srcLink})?>`}
          >
            {twIsHovered ? (
              <svg
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="10.5"
                  cy="10.5"
                  r="10.5"
                  fill="url(#paint0_linear_141_12)"
                />
                <path
                  d="M15.6637 8.49218C15.672 8.60155 15.672 8.71094 15.672 8.82031C15.672 12.1562 12.9912 16 8.09139 16C6.58186 16 5.17958 15.5859 4 14.8672C4.21448 14.8906 4.42067 14.8984 4.6434 14.8984C5.88894 14.8984 7.03554 14.5 7.95115 13.8203C6.77983 13.7969 5.79822 13.0703 5.46002 12.0703C5.62501 12.0937 5.78997 12.1094 5.96321 12.1094C6.20242 12.1094 6.44165 12.0781 6.66435 12.0234C5.44354 11.789 4.5279 10.7734 4.5279 9.54687V9.51563C4.88258 9.70313 5.29505 9.82032 5.73221 9.83593C5.01456 9.38279 4.5444 8.60936 4.5444 7.73436C4.5444 7.26562 4.67636 6.83593 4.90734 6.46093C6.2189 7.99217 8.19036 8.99216 10.401 9.10155C10.3598 8.91405 10.335 8.71876 10.335 8.52344C10.335 7.1328 11.5228 6 12.9994 6C13.7665 6 14.4594 6.30469 14.9461 6.79687C15.5482 6.6875 16.1256 6.47656 16.6371 6.1875C16.4391 6.77345 16.0184 7.26564 15.4657 7.57812C16.0019 7.52346 16.5216 7.3828 17 7.18751C16.6371 7.68749 16.1834 8.13278 15.6637 8.49218V8.49218Z"
                  fill="white"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_141_12"
                    x1="10.5"
                    y1="0"
                    x2="10.5"
                    y2="21"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#9A86B5" />
                    <stop offset="1" stop-color="#D3EEE6" />
                  </linearGradient>
                </defs>
              </svg>
            ) : (
              <svg
                width="21"
                height="21"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.2068 8.52827C16.2148 8.63922 16.2148 8.7502 16.2148 8.86115C16.2148 12.2454 13.639 16.1448 8.93112 16.1448C7.48072 16.1448 6.13337 15.7247 5 14.9956C5.20607 15.0194 5.40419 15.0273 5.6182 15.0273C6.81495 15.0273 7.91663 14.6231 8.79638 13.9336C7.67093 13.9098 6.72778 13.1727 6.40282 12.1582C6.56135 12.182 6.71985 12.1978 6.88631 12.1978C7.11614 12.1978 7.346 12.1661 7.55998 12.1107C6.38699 11.8729 5.50722 10.8426 5.50722 9.59823V9.56654C5.84801 9.75676 6.24432 9.87564 6.66435 9.89147C5.97482 9.43178 5.52308 8.64715 5.52308 7.75947C5.52308 7.28394 5.64986 6.84803 5.87179 6.4676C7.13198 8.02102 9.02621 9.03549 11.1503 9.14646C11.1106 8.95625 11.0869 8.75813 11.0869 8.55998C11.0869 7.1492 12.2282 6 13.6468 6C14.3839 6 15.0497 6.3091 15.5173 6.80841C16.0958 6.69746 16.6506 6.48346 17.142 6.19022C16.9518 6.78465 16.5476 7.28397 16.0166 7.60097C16.5318 7.54552 17.0311 7.40282 17.4908 7.2047C17.1421 7.71192 16.7062 8.16367 16.2068 8.52827V8.52827Z"
                  fill="url(#paint0_linear_625_27)"
                />
                <circle
                  cx="10.6829"
                  cy="10.6829"
                  r="10.0829"
                  stroke="url(#paint1_linear_625_27)"
                  strokeWidth="1.5"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_625_27"
                    x1="11.2454"
                    y1="6"
                    x2="11.2454"
                    y2="16.1448"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#9A86B5" />
                    <stop offset="1" stopColor="#D3EEE6" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_625_27"
                    x1="10.6829"
                    y1="0"
                    x2="10.6829"
                    y2="21.3659"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#9A86B5" />
                    <stop offset="1" stopColor="#D3EEE6" />
                  </linearGradient>
                </defs>
              </svg>
            )}
          </a>
        </div>
      </div>
    </div>
  );
}