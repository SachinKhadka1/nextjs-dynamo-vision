"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const Page = () => {
  // const refs = useRef<(HTMLDivElement | null)[]>(new Array(4).fill(null));

  // useEffect(() => {
  //   const handleScroll = () => {
  //     refs.current.forEach((ref, index) => {
  //       if (!ref) return;
  //       const speed = 0.2 * (index + 1); // Increasing speed factor by the index
  //       const offset = -1 * window.scrollY * speed; // Calculating offset
  //       ref.style.transform = `translateY(${offset}px)`; // Applying the transform
  //     });
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <>
      {[1, 2, 3, 4].map((num, index) => (
        <div
          key={num}
          // ref={(el) => {
          //   refs.current[index] = el; // Correctly assigning ref
          // }}
          className="relative h-screen overflow-hidden" // Ensure full screen height and manage overflow
        >
          <Image
            src={`/BG${num}.jpg`}
            alt={`Background Image ${num}`}
            width={1}
            height={1}
            priority={index === 0}
            layout="responsive" // Ensuring responsiveness
          />
        </div>
      ))}
    </>
  );
};

export default Page;
