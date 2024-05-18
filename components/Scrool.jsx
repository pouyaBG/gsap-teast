"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React from "react";
gsap.registerPlugin(ScrollTrigger);
const Scrool = () => {
  return (
    <div className="w-full h-screen overflow-x-hidden  flex items-center">
      <div className="mainshape">
        <div>
          <div className="dashLineone">
            <svg
              width="238"
              height="8"
              viewBox="0 0 238 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 4H234.231"
                stroke="white"
                stroke-width="7"
                stroke-linecap="round"
                stroke-dasharray="14 14"
              />
            </svg>
          </div>
          <div className="line">
            <svg
              width="238"
              height="190"
              viewBox="0 0 238 190"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M230 182C230 25.8906 7.99999 182 8 7.99999"
                stroke="white"
                stroke-width="15"
                stroke-linecap="round"
              />
            </svg>
          </div>
          <div className="dashLinetwo">
            <svg
              width="238"
              height="8"
              viewBox="0 0 238 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 4H234.231"
                stroke="white"
                stroke-width="7"
                stroke-linecap="round"
                stroke-dasharray="14 14"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scrool;
