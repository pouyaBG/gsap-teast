"use client";
import { gsap } from "gsap";
import React, { useEffect, useRef } from "react";

const IntroOne = () => {
  useEffect(() => {
    const word = document.querySelector(".word");
    const letters = document.querySelectorAll(".letter");
    const line = document.querySelector(".line");
    const lafimog = document.querySelector(".lafimog");

    const animation = gsap.timeline();
    const animationword = gsap.timeline({ repeat: -1 });
    animation.to(word, { scale: 1, duration: 0.5 });
    animationword.to(word, { rotationX: 200, duration: 1, delay: 1 });
    animationword.to(word, { rotationX: 0, duration: 1, delay: 1 });

    letters.forEach((letter, index) => {
      animation.to(letter, {
        opacity: 1,
        y: -20,
        duration: 0.3,
      });
    });
    animation.to(lafimog, { scale: 1, direction: 0.5 });
    animation.to(line, {
      width: "100%",
      duration: 1,
      ease: "power1.in",
      direction: 2,
    });

    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const movementX = (clientX - window.innerWidth / 2) * 0.05;
      const movementY = (clientY - window.innerHeight / 2) * 0.08;
      gsap.to(lafimog, { x: movementX, y: movementY, duration: 0.7 });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      animation.kill();
      animationword.kill();
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="main-box text-white mt-28 h-[400px] text-[150px] w-[90%]  container m-auto">
      <div className="mt-20 flex items-center relative">
        <div className="word scale-0 -mt-[178px] ">
          <span className="">W</span>
        </div>
        <div className="mt-10">
          <span className="letter opacity-0">e</span>
          <span className="letter opacity-0">l</span>
          <span className="letter opacity-0">c</span>
          <span className="letter opacity-0">o</span>
          <span className="letter opacity-0">m</span>
          <span className="letter opacity-0">e</span>
          <span className="letter opacity-0"> to</span>
          <div className="ml-[280px]">
            <span className=" letter opacity-0"> my</span>{" "}
            <span className=" letter opacity-0 "> web</span>
          </div>
          <div className="absolute bottom-5 left-[61rem] scale-0 lafimog">
            <svg
              width="220px"
              height="220px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.9126 15.9336C10.1709 16.249 11.5985 16.2492 13.0351 15.8642C14.4717 15.4793 15.7079 14.7653 16.64 13.863"
                stroke="#f2f2f2"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <ellipse
                cx="14.5094"
                cy="9.77405"
                rx={1}
                ry="1.5"
                transform="rotate(-15 14.5094 9.77405)"
                fill="#f2f2f2"
              />
              <ellipse
                cx="8.71402"
                cy="11.3278"
                rx={1}
                ry="1.5"
                transform="rotate(-15 8.71402 11.3278)"
                fill="#f2f2f2"
              />
              <path
                d="M3.20356 14.357C2.09246 10.2103 1.53691 8.13698 2.47995 6.50359C3.42298 4.87021 5.49632 4.31466 9.643 3.20356C13.7897 2.09246 15.863 1.53691 17.4964 2.47995C19.1298 3.42298 19.6853 5.49632 20.7964 9.643C21.9075 13.7897 22.4631 15.863 21.5201 17.4964C20.577 19.1298 18.5037 19.6853 14.357 20.7964C10.2103 21.9075 8.13698 22.4631 6.50359 21.5201C4.87021 20.577 4.31466 18.5037 3.20356 14.357Z"
                stroke="#f2f2f2"
                strokeWidth="1.5"
              />
              <path
                d="M13 16.0004L13.478 16.9742C13.8393 17.7104 14.7249 18.0198 15.4661 17.6689C16.2223 17.311 16.5394 16.4035 16.1708 15.6524L15.7115 14.7168"
                stroke="#f2f2f2"
                strokeWidth="1.5"
              />
            </svg>
          </div>
        </div>
      </div>
      {/* خط سفید */}
      <div className=" bg-white h-1 w-[0%] mt-10 rounded-md line"></div>
    </div>
  );
};

export default IntroOne;
