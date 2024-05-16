"use client";
import { gsap } from "gsap";
import React, { useEffect, useRef } from "react";

const IntroOne = () => {
  useEffect(() => {
    const word = document.querySelector(".word");
    console.log(word);
    const letters = document.querySelectorAll(".letter");
    const line = document.querySelector(".line");
    const animation = gsap.timeline();
    const animationword = gsap.timeline({ repeat: -1 });

    animationword.to(word, { rotationX: 200, duration: 1, delay: 1 });
    animationword.to(word, { rotationX: 0, duration: 1, delay: 1 });

    letters.forEach((letter, index) => {
      animation.to(letter, {
        opacity: 1,
        y: -20,
        duration: 0.3,
      });
    });
    animation.to(line, {
      width: "100%",
      duration: 1,
      ease: "power1.in",
      direction: 2,
    });

    return () => {
      animation.kill();
    };
  }, []);

  return (
    <div className="main-box text-white mt-28 h-[400px] text-[100px] w-[90%]  container m-auto">
      <div className="mt-20 flex items-center">
        <div className="word -mt-24 ">
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
            <span className=" letter opacity-0"> web</span>
          </div>
        </div>
      </div>
      {/* خط سفید */}
      <div className=" bg-white h-1 w-[0%] mt-10 rounded-md line"></div>
    </div>
  );
};

export default IntroOne;
