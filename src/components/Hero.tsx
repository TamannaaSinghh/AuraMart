"use client";


import React from 'react'
import Slider from "react-slick";
import Slide from './Slide';

const Hero = () => {

var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
    
};

const slideData = [
  {
    id: 0,
    img: "/newd1.png",
    title: "Discover our new collection",
    price: "$20",
    mainTitle: "WOMEN'S LATEST FASHON SALE"
  },
  {
    id: 1,
    img: "/newd2.png",
    title: "Trending Accessories",
    price: "$25",
    mainTitle: "MODERN DESIGNS AND BAGS"
  },
  {
    id: 2,
    img: "/newd3.png",
    title: "Sale Offer",
    price: "$30",
    mainTitle: "NEW FASHION SUMMER SALE"
  },
];

  return (
    <div>
      <div className='container pt-6 lg:pt-0 '>
        <Slider {...settings}>
          {slideData.map((item) => (
             <Slide 
             key= {item.id}
             img = {item.img}
             title = {item.title}
             mainTitle = {item.mainTitle}
             price = {item.price} 
              />
             
             ))}
        </Slider>
      </div>
    </div>
  )
}

export default Hero