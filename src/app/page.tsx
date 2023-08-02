"use client";

import AnimatedContainer from "@/components/containers/animatedContainer";
import WelcomeImage from '@/images/welcomeImage.jpg'
import Image from "next/image";
import AnimatedParagraph from "@/components/containers/animatedParagraph";
export default function Home() {
  return (
    <AnimatedContainer className="h-screen overflow-y-auto overflow-x-hidden perspective-container no-scrollbar ">
        <Image
            className="rounded-sm relative h-full w-full object-cover paralax-strong -z-[1]" 
            src={WelcomeImage}
            alt="Picture of the author"
            />
        <div className="w-full h-full bg-white">Siemano romano</div>
    </AnimatedContainer>
  );
}
