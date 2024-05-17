"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import React from "react";
gsap.registerPlugin(ScrollTrigger);
const TextScrool = () => {
  useEffect(() => {
    const textWrappers = document.querySelectorAll(".your-text-wrapper-class");

    const pinTrigger = ScrollTrigger.create({
      trigger: ".content-wrapper",
      pin: true,
      start: "top top",
      end: "+=250%",
    });

    let tl = gsap.timeline();

    tl.to(textWrappers, {
      x: "-200%",
      opacity: 0,
      scrollTrigger: {
        start: () => pinTrigger?.start,
        end: () => pinTrigger?.end,
        scrub: 2,
      },
    });

    return () => {
      pinTrigger?.kill();
      tl.kill();
    };
  });
  return (
    <div className="flex items-center">
      <div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis
        minus voluptate quisquam molestiae similique explicabo debitis expedita,
        distinctio ipsa suscipit culpa aut sint architecto molestias sit velit
        unde doloribus quos.
      </div>
      <div className="content-wrapper overflow-x-hidden ">
        <div className="your-text-wrapper-class flex justify-center items-center h-screen">
          <h1 className="text-vw font-bold text-white whitespace-nowrap text-wrapper transform translate-x-[70%]">
            this is a test gasp and may name is pouya
          </h1>
        </div>
      </div>
    </div>
  );
};

export default TextScrool;
