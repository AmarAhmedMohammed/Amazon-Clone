import React from 'react'
import "./carousel.css"
import { Carousel } from 'react-responsive-carousel'
import {image} from "./Image/image"
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Carousels() {
  return (
    <div className=''>
        <Carousel autoPlay={true} infiniteLoop={true} showIndicators={false} showThumbs={false}>
            {
                image.map((img) => {
                    return <img src = {img}></img>
                })
            }
        </Carousel>
        <div className='carousel_fade'></div>
    </div>
  )
}

export default Carousels