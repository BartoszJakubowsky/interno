"use client";

import AnimatedContainer from "@/components/containers/animatedContainer";
import WelcomeImage from '@/images/welcomeImage.jpg'
import Image from "next/image";
import AnimatedParagraph from "@/components/containers/animatedParagraph";
import CarouselText from "@/components/containers/carouselText";
import InfoContainer from "@/components/containers/infoContainer";
import Keys from '@/../public/images/Keys.jpeg'
import Footer from "@/components/ui/footer";
import usePages from "@/hooks/usePages";
import { useRef, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function Home() {



  const firstAnimatedHeader = ['twój dom', 'twoje mieszkanie', 'twoja łazienka']
  const pageRef = useRef();
  const {pageExit} : {pageExit: boolean} = usePages();
  if (pageExit && pageRef.current) 
      pageRef.current.classList.add('animateDown');

    const gridRef = useRef(null);

    useEffect(() => {
      function handleScroll() {
        if (gridRef.current) {
          // Przesunięcie elementu o klasie 'grid' względem pozycji przewijania
          const scrollY = window.scrollY;
          gridRef.current.style.transform = `translateY(${scrollY * -1}px)`;
        }
      }
  
    // Dodajemy nasłuchiwanie na zdarzenie scroll
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        // Czyszczenie nasłuchiwania po zniszczeniu komponentu
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
//bg-[url(/images/welcomeImage.jpg)]
  return (
    // <AnimatedContainer className="relative h-screen bg-[url(/images/welcomeImage.jpg)] bg-cover bg-center">
    <div ref={pageRef} className="relative h-screen bg-cover bg-center flex flex-wrap justify-center animateUp">
      <Image className="absolute rounded-md left-1/2 -translate-x-1/2 -z-10 shadow-lg" width={1000} height={1000} alt="welcome image" src={'/images/welcomeImage.jpg'} />
      <div className="absolute left-1/2 -translate-x-1/2 top-10 ">
      <AnimatedContainer initial={{opacity: 0}} animate={{opacity: 1}} transition={{ duration: 0.5, ease: "easeOut", delay: 0.35 }}>
            <div className="rounded-sm absolute  left-1/2 -translate-x-1/2 w-[250px] h-[90px] md:w-[300px] md:h-[100px] bg-slate-700 text-white flex items-center p-2 gap-1 justify-center">
              <h3 className=" text-2xl text-yellow-700 font-semibold">
                INTERNO
              </h3>
              <div className="overflow-hidden h-6">
                <CarouselText carouselClassName='flex' axis='y' elements={firstAnimatedHeader} delay={2500} />
              </div>
            </div>
      </AnimatedContainer>
      </div>
        <div className="md:h-[1000px] h-[400px] w-full"/>
        <div ref={gridRef} className="">
       <div className="grid md:-mx-4 -mx-2 bg-slate-700 p-4 border-t-4 border-yellow-700 max-w-[1100px] ">
          <AnimatedParagraph className="mb-6">
            <InfoContainer
             headerText="Kompleksowe wykończenie mieszkań!"
             contentText="Z naszą pomocą spieprzymy co się da sialalal nie poznasz swojej toalety takie my jesteśmy talenty!"
             image={Keys}
             />
          </AnimatedParagraph>
          <AnimatedParagraph className="mb-6" delay={1}>
            <InfoContainer
             headerText="Szybkie remonty!"
             contentText="Wyrzucamy gruz jak prawdziwi majstrowie, nie oszczędzamy niczego!"
             image={Keys}
             />
          </AnimatedParagraph>
          <AnimatedParagraph className="" delay={2}>
            <InfoContainer
             headerText="Współpraca z Coralux czy jakoś tam"
             contentText={"Wybieramy bieda wersję tylko dla marży! Zarabiamy hajsu jak lodu więc pałę!"}
             image={Keys}
             />
          </AnimatedParagraph>
      </div>
          <Footer className="mt-10" />
          </div>
    </div>
    // </AnimatedContainer>
  );
}


