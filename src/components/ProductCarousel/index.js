import React, { useState, useEffect } from 'react';
// import './ProductCarousel.css';

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ProductCarousel({slidesData}) {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);

  useEffect(() => {

    setNav1(slider1);
    setNav2(slider2);

  }, [slider1, slider2]);


  const settingsMain = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    dots: false,
    asNavFor: '.slider-nav'
  };

  const settingsThumbs = {
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    centerMode: true,
    swipeToSlide: true,
    focusOnSelect: true,
    centerPadding: '10px',
    arrows: false,
  };



  return (

    <div className="ProductCarousel">

      <div className="slider-wrapper">

        <Slider
          {...settingsMain}
          asNavFor={nav2}
          ref={slider => (setSlider1(slider))}
        >

          {slidesData && slidesData.map((slide) =>

            <div className="slick-slide" key={slide.id}>
              <img className="slick-slide-image" src={`https://picsum.photos/800/800?img=${slide.id}`} />
            </div>

          )}

        </Slider>
        <div className="thumbnail-slider-wrap">
          <Slider
            {...settingsThumbs}
            asNavFor={nav1}
            ref={slider => (setSlider2(slider))}>

            {slidesData && slidesData.map((slide) =>
              <div className="slick-slide" key={slide.id}>
                <img className="slick-slide-image w-24 h-24" src={`https://picsum.photos/150/150?img=${slide.id}`} />
              </div>
            )}

          </Slider>
        </div>
      </div>

    </div>
  );
}

export default ProductCarousel;