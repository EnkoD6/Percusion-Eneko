import React, { useEffect, useState } from 'react'
import './ImageSlider.css'
import { SliderData } from './SliderData'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'

const ImageSlider = () => {
    const [current, setCurrent] = useState(0)
    const length = SliderData.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    };
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    };
    useEffect(()=>{
        const interval = setInterval(()=>{nextSlide()}, 5000)
        return ()=>{clearInterval(interval)}
    })
        
    if(!Array.isArray(SliderData) || SliderData.length <= 0) {
    return null;
}


  return (
    <section className='slider'>
        <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide}/>
        <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
        {SliderData.map((slide, index) => {
        return(
            <div className={index === current ? 'slide active' : 'slide'} key = {index}>
                {index === current && (<img src={slide.image} alt='slide-drums' className='image' />)}
            </div>
        )
    })}</section>
  )
}

export default ImageSlider