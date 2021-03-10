import React, { useState, useEffect, useRef } from 'react';
import './ProductCarousel.css';
import Slider from "react-slick";

import ProductCarouselNavCard from '../Cards/ProductCarouselNavCard';


function ProductCarousel({ slidesData }) {
  const [mainCarousel, setMainCarousel] = useState(null);
  const mainCarouselRef = useRef(null)
  const navigationMainCarouselRef = useRef(null)

  useEffect(() => {
    setMainCarousel(mainCarouselRef.current);
  }, [mainCarouselRef, navigationMainCarouselRef]);


  const settingsMain = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    dots: false,
  };

  const settingsThumbs = {
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    swipeToSlide: true,
    focusOnSelect: true,
    centerPadding: '10px',
    adaptiveHeight: true,
    arrows: false,
  };



  return (

    <div className="ProductCarousel">
        <Slider
          {...settingsMain}
          asNavFor={navigationMainCarouselRef.current}
          ref={mainCarouselRef}
        >
          {slidesData && slidesData.map((slide) =>

            <div className="slick-slide" key={slide.id}>
              <img className="slick-slide-image" src={`${slide.image}`} />
            </div>
          )}
        </Slider>
        <Slider
          {...settingsThumbs}
          asNavFor={mainCarousel}
          ref={navigationMainCarouselRef}>
          {slidesData && slidesData.map((slide) => <ProductCarouselNavCard key={slide.id} image={slide.image} /> )}
        </Slider>
      </div>
  );
}

export default ProductCarousel;