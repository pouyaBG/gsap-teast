"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);
const Scrool = () => {
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = svgRef.current;

    // Define GSAP animation timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: svg,
        start: "top center", // adjust as needed
        end: "bottom center", // adjust as needed
        scrub: true,
      },
    });

    // Add animation to the timeline
    tl.to(svg, {
      x: () => window.innerWidth * 0.5, // move to half of the window width
      duration: 1, // adjust duration as needed
    });

    // Cleanup
    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="w-full h-screen  flex ">
      <div className="mainshape">
        <div className="box" ref={svgRef}>
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
