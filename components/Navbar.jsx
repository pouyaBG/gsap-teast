"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  useEffect(() => {
    const navbar = document.querySelector(".main-tool-bar");
    const withschange = document.querySelector(".withschange");

    gsap.to(navbar, {
      scrollTrigger: {
        trigger: ".scrollable-area",
        start: "top -80",
        end: 99999,
        onToggle: ({ isActive }) => {
          if (isActive) {
            navbar.classList.add("main-tool-bar--scrolled");
            gsap.to(navbar, { y: "-30px", duration: 0.5 });
            gsap.to(withschange, { x: "+25px", duration: 0.5 });
          } else {
            navbar.classList.remove("main-tool-bar--scrolled");
            gsap.to(navbar, { y: "0px", duration: 0.5 });
            gsap.to(withschange, { x: "0px", duration: 0.5 });
          }
        },
      },
      duration: 2,
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <nav className="main-tool-bar fixed top-0 w-full px-4 pt-9 pb-4 bg-gray-900">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-xl font-bold">
            <p to="/">Your Logo</p>
          </div>
          <ul className="flex space-x-4 withschange">
            <li>
              <p
                to="/"
                className="text-white hover:bg-gray-700 px-3 py-2 rounded"
              >
                Home
              </p>
            </li>
            <li>
              <p
                to="/about"
                className="text-white hover:bg-gray-700 px-3 py-2 rounded"
              >
                About
              </p>
            </li>
            <li>
              <p
                to="/services"
                className="text-white hover:bg-gray-700 px-3 py-2 rounded"
              >
                Services
              </p>
            </li>
            <li>
              <p
                to="/contact"
                className="text-white hover:bg-gray-700 px-3 py-2 rounded"
              >
                Contact
              </p>
            </li>
          </ul>
        </div>
      </nav>
      <div className="scrollable-area"></div>
    </>
  );
};

export default Navbar;
