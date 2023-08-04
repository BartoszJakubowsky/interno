'use client'
import {motion as m} from 'framer-motion';
import { useState } from 'react';
import CarouselElement from './carouselElement';
import Carousel from './carousel';

interface CarouselProps {
    carouselClassName? : string;
    elementClassName? : string;
    swipeDuration? : number,
    swipeEase? : string,
    elements: string[],
    delay: number,
    axis: string
}
export default function CarouselText({carouselClassName, elementClassName, swipeDuration, swipeEase, elements, delay, axis = 'y'}: CarouselProps) {
    


    const [swipe, setSwipe] = useState(0);
    setTimeout(() => {
        if (swipe === elements.length-1)
            return

        setSwipe(swipe + 1)
    }, delay);

    return (
            <Carousel
            startPosition={0}
            elements={elements}
            swipeToIndex={swipe}
            swipeDuration={swipeDuration}
            swipeEase={swipeEase}
            className={carouselClassName}
            containerClassName={elementClassName}
            axis = {axis}
            />
    );
};
