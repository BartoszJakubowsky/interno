"use client";

import AnimatedContainer from "@/components/containers/animatedContainer";
import WelcomeImage from '@/images/welcomeImage.jpg'
import Image from "next/image";
import AnimatedParagraph from "@/components/containers/animatedParagraph";
import CarouselText from "@/components/containers/carouselText";
import InfoContainer from "@/components/containers/infoContainer";
import BobImage from '../../public/images/Bob.webp'
import Footer from "@/components/ui/footer";
export default function Home() {

  const firstAnimatedHeader = ['twój dom', 'twoje mieszkanie', 'twoja łazienka']

  
  return (
    <AnimatedContainer className="relative h-screen bg-[url(/images/welcomeImage.jpg)] bg-cover bg-center">
      <div className="relative">
      <AnimatedContainer initial={{opacity: 0}} animate={{opacity: 1}} transition={{ duration: 0.5, ease: "easeOut", delay: 0.35 }}>
            <div className="rounded-sm absolute top-10 left-1/2 -translate-x-1/2 w-[300px] h-[100px] bg-slate-700 text-white flex items-center p-2 gap-1 justify-center">
              <h3 className=" text-2xl text-yellow-700 font-semibold">
                INTERNO
              </h3>
              <div className="overflow-hidden h-6">
                <CarouselText carouselClassName='flex' axis='y' elements={firstAnimatedHeader} delay={2500} />
              </div>
            </div>
      </AnimatedContainer>
      </div>
      <div className="bg-transparent h-[80%]">
      </div> 

       <div className="w-full flex flex-wrap justify-between">
          <AnimatedParagraph className="mt-[40%] bg-slate-300 break-words w-full h-[200px] p-2 flex flex-col gap-2 self-end">
            <InfoContainer 
             headerText="Kompleksowe wykończenie mieszkań!"
             contentText="Z naszą pomocą spieprzymy co się da sialalal nie poznasz swojej toalety takie my jesteśmy talenty!"
             image={BobImage}
             />
          </AnimatedParagraph>
          <AnimatedParagraph left={true} className="bg-white w-full h-[200px] p-2 flex flex-col gap-2 self-end items-end">
            <InfoContainer 
             left={false}
             headerText="Kompleksowe wykończenie mieszkań!"
             contentText="Z naszą pomocą spieprzymy co się da!"
             image={BobImage}
             />
          </AnimatedParagraph>
          </div>
    <Footer />
    </AnimatedContainer>
  );
}


