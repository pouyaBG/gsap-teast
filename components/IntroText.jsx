"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import React from "react";
gsap.registerPlugin(ScrollTrigger);

const IntroText = () => {
  useEffect(() => {
    const textWrapper = document.querySelector(".text-wrapper");
    const pElement = document.querySelector(".intro-paragraph");

    const pinTrigger = ScrollTrigger.create({
      trigger: ".content-wrapper",
      start: "top top",
      end: "+=40%",
    });

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".content-wrapper",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      },
    });

    tl.to(pElement, {
      opacity: 0,
      duration: 1,
    }).fromTo(
      textWrapper,
      { x: "70%", opacity: 0 },
      { x: "0%", opacity: 1, duration: 1 },
      "-=1"
    );

    return () => {
      pinTrigger?.kill();
      tl.kill();
    };
  }, []);

  return (
    <div className="content-wrapper overflow-x-hidden">
      <div className="your-text-wrapper-class flex flex-col justify-center items-center h-screen">
        <p className="intro-paragraph text-[20px]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, minus
          facilis doloribus fugiat explicabo deleniti repellendus earum eaque
          neque ipsa?
        </p>
        <h1 className="text-vw font-bold text-white whitespace-nowrap text-wrapper transform ">
          pouya barari gelyard
        </h1>
      </div>
    </div>
  );
};

export default IntroText;
