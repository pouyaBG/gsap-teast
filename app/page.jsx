"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    const textWrappers = document.querySelectorAll(".your-text-wrapper-class");

    const pinTrigger = ScrollTrigger.create({
      trigger: ".content-wrapper",
      pin: true,
      start: "top top",
      end: "+=200%",
    });

    let tl = gsap.timeline();

    tl.to(textWrappers, {
      x: "-200%",
      opacity: 0,
      scrollTrigger: {
        start: () => pinTrigger?.start,
        end: () => pinTrigger?.end,
        scrub: 1,
      },
    });

    return () => {
      pinTrigger?.kill();
      tl.kill();
    };
  });
  return (
    <div className="content-wrapper">
      {/* Your component content */}
      <div className="your-text-wrapper-class flex justify-center items-center h-screen">
        {/* Your text content */}
        <h1 className="text-vw font-bold text-white whitespace-nowrap text-wrapper transform translate-x-[70%]">
          this is a test gasp and may name is pouya
        </h1>
      </div>
    </div>
  );
}
