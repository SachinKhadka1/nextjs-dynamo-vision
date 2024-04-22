"use client";
import Portait from "../public/gallery/potrait5_2c.jpg";
import Background from "../public/BG3.jpg";
import Image from "next/image";
import Timeline from "@/components/Timeline";

const Page = () => {
  return (
    <>
      <div className="relative h-screen overflow-hidden">
        <Image
          src={`/BG1.jpg`}
          alt={`Background Image 1`}
          width={1}
          height={1}
          layout="responsive"
        />
        <Timeline />
      </div>
      <div className="relative h-screen overflow-hidden">
        <Image
          src={`/BG2.jpg`}
          alt={`Background Image 2`}
          width={1}
          height={1}
          layout="responsive"
        />
      </div>
      <div className="relative h-screen overflow-hidden mt-[-25px]">
        <Image
          src={Background}
          alt={`Background Image 3`}
          width={1}
          height={1}
          layout="responsive"
        />
      </div>

      <div className="relative h-screen overflow-hidden">
        <Image
          src={`/BG4.jpg`}
          alt={`Background Image 4`}
          width={1}
          height={1}
          layout="responsive"
        />
      </div>
    </>
  );
};

export default Page;
