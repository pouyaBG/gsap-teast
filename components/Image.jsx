"use client";
import gsap from "gsap";
import { MotionPathPlugin, ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin);
const Image = () => {
  const imgRef = useRef();
  useEffect(() => {
    const el = imgRef.current;
    gsap.to("#rect", {
      duration: 1,
      ease: "power1.in",
      motionPath: {
        path: "#path",
        align: "#path",
        autoRotate: true,
        alignOrigin: [0.5, 0.5],
      },
      scrollTrigger: {
        trigger: el,
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    });
  }, []);
  return (
    <div className="w-full  items-center  justify-center h-fit p-10">
      <div ref={imgRef}>
        <svg width="100%" height="100%" viewBox="-20 0 557 190" id="svg">
          <circle cx="100" cy="100" r="3" />
          <circle cx="300" cy="20" r="3" />
          <path
            id="path"
            d="M9,100c0,0,18.53-41.58,49.91-65.11c30-22.5,65.81-24.88,77.39-24.88c33.87,0,57.55,11.71,77.05,28.47c23.09,19.85,40.33,46.79,61.71,69.77c24.09,25.89,53.44,46.75,102.37,46.75c22.23,0,40.62-2.83,55.84-7.43c27.97-8.45,44.21-22.88,54.78-36.7c14.35-18.75,16.43-36.37,16.43-36.37"
          />
          <g id="rect">
            <rect width="85" height="30" fill="dodgerblue" />
            <text x="30" y="19" font-size="14">
              hiiiiiiiii
            </text>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Image;
