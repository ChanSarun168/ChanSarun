"use client";

import React from "react";

const ExploreMore: React.FC = () => {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <h1 className="text-5xl font-bold tracking-wider text-green-400">
        EXPLORE MORE
      </h1>
      <div className="mt-6 cursor-pointer" onClick={scrollToBottom}>
        <svg
          width="40"
          height="60"
          viewBox="0 0 40 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 0C14.48 0 10 4.48 10 10V40C10 45.52 14.48 50 20 50C25.52 50 30 45.52 30 40V10C30 4.48 25.52 0 20 0ZM20 45C17.24 45 15 42.76 15 40V10C15 7.24 17.24 5 20 5C22.76 5 25 7.24 25 10V40C25 42.76 22.76 45 20 45Z"
            fill="#4ADE80"
          />
          <rect x="18" y="10" width="4" height="10" fill="black" />
        </svg>
      </div>
    </div>
  );
};

export default ExploreMore;
