"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Scroll = () => {
  const svgRef = useRef(null);

  useEffect(() => {
    const pinTrigger = ScrollTrigger.create({
      trigger: ".start",
      start: "top top",
      end: "+=150%",
      scrub: true,
      pin: true,
      onUpdate: (self) => {
        const scrollProgress = self.progress; // Progress is a value between 0 and 1
        gsap.to(svgRef.current, { x: scrollProgress * window.innerWidth }); // Adjust the movement distance
      },
    });

    return () => {
      pinTrigger?.kill();
    };
  }, []);

  return (
    <div className="h-screen flex items-center justify-between">
      <p className="start">start</p>
      <div className="w-full content-main flex items-center justify-start">
        <div className="your-span relative" ref={svgRef}>
          <span className="home-animate__icon home-animate__icon--curve">
            <CurvedLineToggleTwo />
            <HomeAnimateIconCurve />
            <CurvedLineToggleOne />
          </span>
        </div>
      </div>
      <p>end</p>
    </div>
  );
};

const CurvedLineToggleTwo = () => (
  <svg
    width={150}
    height={18}
    viewBox="0 0 150 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    id="curved-line-toggle-two"
    aria-hidden="true"
  >
    <line
      x1="13.4766"
      y1="9.49707"
      x2="135.477"
      y2="9.49709"
      stroke="#FFFCE1"
      strokeDasharray="4 4"
    />
    <rect
      x="16.6563"
      y="17.1772"
      width={16}
      height={16}
      transform="rotate(-180 16.6563 17.1772)"
      fill="url(#curved-line-toggle-two-gradient)"
    />
    <rect
      x="16.6563"
      y="17.1772"
      width={16}
      height={16}
      transform="rotate(-180 16.6563 17.1772)"
      fill="url(#curved-line-toggle-two-noise)"
      fillOpacity="0.6"
    />
    <rect
      x="16.6563"
      y="17.1772"
      width={16}
      height={16}
      transform="rotate(-180 16.6563 17.1772)"
      stroke="#FFFCE1"
    />
    <path
      d="M144.262 3.91141C141.56 2.21875 138.018 3.05176 136.352 5.77202C134.686 8.49227 135.526 12.0697 138.228 13.7623C140.93 15.455 144.472 14.6219 146.138 11.9017C147.804 9.18143 146.964 5.60407 144.262 3.91141Z"
      fill="#0AE448"
      stroke="#FFFCE1"
      strokeMiterlimit={10}
    />
    <defs>
      <pattern
        id="curved-line-toggle-two-noise"
        patternContentUnits="objectBoundingBox"
        width="11.7647"
        height="11.7647"
      >
        <use xlinkHref="#svg-noise" transform="scale(0.0235294)" />
      </pattern>
      <linearGradient
        id="curved-line-toggle-two-gradient"
        x1="0.793615"
        y1="5.30886"
        x2="13.855"
        y2="11.2352"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.152177" stopColor="#0AE448" />
        <stop offset="0.854509" stopColor="#ABFF84" />
      </linearGradient>
    </defs>
  </svg>
);

const HomeAnimateIconCurve = () => (
  <svg
    width={191}
    height={149}
    viewBox="0 0 191 149"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    id="home-animate__icon--curve"
    aria-hidden="true"
  >
    <path
      id="home-animate__icon--curve-path"
      d="M188 3 C74.39 3 116.99 146 3 146 "
      stroke="#FFFCE1"
      strokeWidth={5}
      data-original="M3 146C116.996 146 74.3933 3.00001 188 3"
    />
  </svg>
);

const CurvedLineToggleOne = () => (
  <svg
    width={150}
    height={18}
    viewBox="0 0 150 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    id="curved-line-toggle-one"
    aria-hidden="true"
  >
    <line
      id="curved-line-toggle-one-dashed-line"
      x1="136.68"
      y1="8.18018"
      x2="14.6797"
      y2="8.18017"
      stroke="#FFFCE1"
      strokeDasharray="4 4"
    />
    <path
      id="curved-line-toggle-one-circle"
      d="M5.89417 13.7658C8.59652 15.4585 12.1379 14.6255 13.8042 11.9052C15.4704 9.18497 14.6305 5.60759 11.9282 3.91493C9.22584 2.22227 5.68439 3.05531 4.01814 5.77556C2.3519 8.49582 3.19183 12.0732 5.89417 13.7658Z"
      fill="#0AE448"
      stroke="#FFFCE1"
      strokeMiterlimit={10}
    />
    <rect
      id="curved-line-toggle-one-box"
      x="133.5"
      y="0.5"
      width={16}
      height={16}
      fill="url(#curved-line-toggle-one-gradient)"
    />
    <rect
      id="curved-line-toggle-one-box"
      x="133.5"
      y="0.5"
      width={16}
      height={16}
      fill="url(#curved-line-toggle-one-noise)"
      fillOpacity="0.6"
    />
    <rect
      id="curved-line-toggle-one-box"
      x="133.5"
      y="0.5"
      width={16}
      height={16}
      stroke="#FFFCE1"
    />
    <defs>
      <pattern
        id="curved-line-toggle-one-noise"
        patternContentUnits="objectBoundingBox"
        width="11.7647"
        height="11.7647"
      >
        <use xlinkHref="#svg-noise" transform="scale(0.0235294)" />
      </pattern>
      <linearGradient
        id="curved-line-toggle-one-gradient"
        x1="133.794"
        y1="4.26589"
        x2="146.855"
        y2="10.1922"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.152177" stopColor="#0AE448" />
        <stop offset="0.854509" stopColor="#ABFF84" />
      </linearGradient>
    </defs>
  </svg>
);

export default Scroll;
