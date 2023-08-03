'use client'
import {motion as m} from 'framer-motion';
import type {ReactNode} from 'react';

interface CarouselProps {
    axis : string ;
    swipe : number;
    swipeDuration?: number;
    swipeEase? : string;
    className?: string
    element: ReactNode | string

}

export default function carouselElement({axis = 'x', swipe, swipeDuration, swipeEase, className, element} : CarouselProps) {
    return (
        <m.div 
          animate={axis === 'x' ?{ x: `-${swipe * 100}%` } :{ y: `-${swipe * 100}%` }} 
          className={ `${className} w-full h-full` }
          transition={{duration: swipeDuration? swipeDuration : 0.7, ease: swipeEase? swipeEase : [0.32, 0.72, 0, 1] }} 
          exit={{ opacity:0}}>
            {element}
        </m.div>
    )
};
