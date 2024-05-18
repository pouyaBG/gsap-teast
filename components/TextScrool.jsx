"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import React from "react";

gsap.registerPlugin(ScrollTrigger);

const TextScroll = () => {
  useEffect(() => {
    const textWrappers = document.querySelectorAll(".your-text-wrapper-class");
    const textone = document.querySelectorAll(".textone");
    const texttwo = document.querySelectorAll(".texttwo");
    const textthree = document.querySelectorAll(".textthree");

    const pinTrigger = ScrollTrigger.create({
      trigger: ".content-wrapper",
      pin: true,
      start: "top top",
      end: "+=250%",
    });

    let tl = gsap.timeline();

    tl.to(textWrappers, {
      x: "-200%",
      scrollTrigger: {
        start: () => pinTrigger?.start,
        end: () => pinTrigger?.end,
        scrub: 2,
      },
    });

    // Add a ScrollTrigger for textone that only triggers once
    ScrollTrigger.create({
      trigger: ".texttwo",
      start: "top top", // Adjust start value to where you want the animation to start
      onEnter: () => {
        gsap.to(textone, {
          scale: 1,
          duration: 1,
        });
        gsap.to(texttwo, { opacity: 1, duration: 1, delay: 1 });
      },
    });
    ScrollTrigger.create({
      trigger: ".textthree",
      start: "top top", // Adjust start value to where you want the animation to start
      onEnter: () => {
        gsap.to(textthree, {
          opacity: 1,
          duration: 0.2,
          delay: 2,
        });
        gsap.to(textthree, {
          rotationZ: 360,
          duration: 0.5,
          delay: 3,
        });
      },
    });

    return () => {
      pinTrigger?.kill();
      tl.kill();
    };
  }, []);

  return (
    <div className="content-wrapper overflow-x-hidden">
      <div className="your-text-wrapper-class flex justify-center items-center h-screen">
        <div className="flex items-center transform translate-x-[70%] endyou">
          <h1 className="text-vw font-bold text-white whitespace-nowrap text-wrapper">
            this is a test gasp
          </h1>
          <div className="mx-5 maintext flex items-center">
            <div className="textone scale-0">
              <h1 className="text-vw font-bold text-white">and</h1>
            </div>
            <div className="texttwo opacity-0 mx-5">
              <h1 className="text-vw font-bold text-white whitespace-nowrap">
                my name is
              </h1>
            </div>
            <div className="textthree opacity-0 rotate-90 mx-5">
              <h1 className="text-vw font-bold text-white whitespace-nowrap">
                pouya
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextScroll;
