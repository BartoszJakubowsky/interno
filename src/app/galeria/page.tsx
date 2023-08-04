'use client'
import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import Bathroom1 from '../../../public/images/bathroom_1.jpg'
import Bathroom2 from '../../../public/images/bathroom_2.jpg'
import Bathroom3 from '../../../public/images/bathroom_3.jpg'
import Image from "next/image";
import AnimatedContainer from "@/components/containers/animatedContainer";
import {HiChevronRight as ArrowRight, HiChevronLeft as ArrowLeft, HiX as CloseIcon} from "react-icons/hi";
import Footer from "@/components/ui/footer";
import Carousel from "@/components/containers/carousel";
import { useRef } from "react";
import usePages from "@/hooks/usePages";
export default function Page() {

  const [currentImage, setCurrentImage] = useState(-1);
    
    const pageRef = useRef<HTMLDivElement>(null);
    const {pageExit} = usePages();
    if (pageExit && pageRef.current) 
    pageRef.current.classList.add('animateDown');


    const photos = [
        Bathroom1, Bathroom2, Bathroom3
    ];
    const iconsClassName = 'hover:text-slate-600 transition-colors duration-200 absolute text-2xl cursor-pointer'

    const openLightbox = (index : number) => {
      setCurrentImage(index);
    };
  
    const closeLightbox = () => {
      setCurrentImage(-1);
    };
  
    const arrowClick = (direction : string) => {
      if (direction === 'left') 
      {
        if (currentImage == 0)
          return;
        setCurrentImage(currentImage - 1)
      }
      else 
      {
        if (currentImage == photos.length-1)
          return; 
        setCurrentImage(currentImage + 1)
      }

    }


    const handlers = useSwipeable({
      onSwipedLeft: () => arrowClick('left'),
      onSwipedRight: () =>  arrowClick('right'),
      swipeDuration: 500,
      preventScrollOnSwipe: true,
      trackMouse: true
    });
  
    return (
      <div ref={pageRef} className="flex flex-wrap justify-center items-start h-screen animateUp">
        {photos.map((photo, index) => (
            <Image
            width={600}
            height={400}
            key={index}
            src={photo}
            alt={'Bathroom photo nr ' + index}
            className="w-[200px] h-[150px] border-2 border-slate-600 rounded-sm object-cover m-2 cursor-pointer transition-all ease-out duration-300 hover:-translate-y-2 active:scale-105"
            onClick={() => openLightbox(index)}
            placeholder="blur"
            />
        ))}
        {currentImage >=0 && (
          
          <div className="fixed inset-0 z-[10] backdrop-blur-md flex flex-row justify-center items-center transition-all ease-out duration-300" >
            <AnimatedContainer initial={{opacity: 0}} animate={{opacity: 1}} className="max-w-[90%] max-h-[90%]">
              <div className="relative w-full">
                <Image
                width={1200}
                height={800}
                src={photos[currentImage]}
                alt={'Bathroom photo full screen nr ' + currentImage}
                className="max-w-full max-h-full object-contain transition-all ease-out duration-300"
                placeholder="blur"
                {...handlers}
                />
                <ArrowLeft onClick={() => arrowClick('left')} className = {`left-0 top-1/2 ${iconsClassName} ${currentImage == 0 && 'opacity-50'}`}/>
                <ArrowRight onClick={() => arrowClick('right')} className = {` right-0 top-1/2 ${iconsClassName} ${currentImage == (photos.length-1) && 'opacity-50'}`}/>
                <CloseIcon className={`right-1 top-1 ${iconsClassName}`} onClick={closeLightbox}/>
                </div>
            </AnimatedContainer>
          </div>
        )}
        <Footer className="self-end"/>
      </div>
    );
}
