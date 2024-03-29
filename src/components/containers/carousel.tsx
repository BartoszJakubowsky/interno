'use client'
import {MotionValue, motion as m} from 'framer-motion';
import { ReactNode, useState, useEffect, JSXElementConstructor, Key, PromiseLikeOfReactNode, ReactElement, ReactPortal } from 'react';

interface CarouselProps {
    startPosition : number;
    elements : any
    swipeToIndex : number
    swipeDuration? : number
    swipeEase? : string  
    containerClassName? : string
    className? : string
    axis : string
}
export default function Carousel({ startPosition = 0, elements, swipeToIndex, swipeDuration, swipeEase, containerClassName, className, axis = 'x' }: CarouselProps) {
    


    const [pageIndex, setPageIndex] = useState(startPosition);
    useEffect(()=>
    {
      setPageIndex(swipeToIndex);
    }, [swipeToIndex])

    return (
        <div className={`${className? className : ' absolute inset-0'} flex flex-col flex-wrap  overflow-hidden`}>
            {elements.map((element: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | MotionValue<number> | MotionValue<string> | null | undefined, index: Key | null | undefined) => 
                {
                    return (
                    <m.div 
                      key={index} 
                      animate={axis === 'x' ? { x: `-${pageIndex * 100}%` } : { y: `-${pageIndex * 100}%` }} 
                      className={ `${containerClassName? containerClassName : 'w-full h-full'}` }
                      transition={{duration: swipeDuration? swipeDuration : 0.7, ease: swipeEase? swipeEase : [0.32, 0.72, 0, 1] }} 
                      exit={{ opacity:0}}>
                        {element}
                    </m.div>
                    )
                })}
      </div>
    );
};
