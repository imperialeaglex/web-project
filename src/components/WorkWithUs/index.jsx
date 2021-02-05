import React from 'react';
import Slider from 'react-slick';
import img1 from 'assets/workWithUs/sl1.png';
import img2 from 'assets/workWithUs/sl2.png';
import img3 from 'assets/workWithUs/sl3.png';
import img4 from 'assets/workWithUs/sl4.png';
import img5 from 'assets/workWithUs/sl5.png';
import img6 from 'assets/workWithUs/sl6.png';
import img7 from 'assets/workWithUs/sl7.png';
import img8 from 'assets/workWithUs/sl8.png';
import img9 from 'assets/workWithUs/sl9.png';
import img10 from 'assets/workWithUs/sl10.png';
import img11 from 'assets/workWithUs/sl11.png';
import img12 from 'assets/workWithUs/sl12.png';

export const WorkWithUs = () => {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: false,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };


    return (
      <div className="working_with_us">
        <h2 className="block-title">
          С нами работают
        </h2>
        <div className="form-group">
          <div className="view-header">
            Десятки компаний доверяют нам самое ценное, что у них есть в интернете – свои сайты. Мы делаем всё, чтобы
            наше сотрудничество было долгим.
          </div>
          <div className="view-content">
            <Slider className="slick-slider-two" {...settings}>
              <div className="image-in-slide">
                <img src={img1} alt="#"/>
              </div>
              <div className="image-in-slide">
                <img src={img2} alt="#"/>
              </div>
              <div className="image-in-slide">
                <img src={img3} alt="#"/>
              </div>
              <div className="image-in-slide">
                <img src={img4} alt="#"/>
              </div>
              <div className="image-in-slide">
                <img src={img5} alt="#"/>
              </div>
              <div className="image-in-slide">
                <img src={img6} alt="#"/>
              </div>
            </Slider>
            <Slider className="slick-slider-three" {...settings}>
              <div className="image-in-slide">
                <img src={img7} alt="#"/>
              </div>
              <div className="image-in-slide">
                <img src={img8} alt="#"/>
              </div>
              <div className="image-in-slide">
                <img src={img9} alt="#"/>
              </div>
              <div className="image-in-slide">
                <img src={img10} alt="#"/>
              </div>
              <div className="image-in-slide">
                <img src={img11} alt="#"/>
              </div>
              <div className="image-in-slide">
                <img src={img12} alt="#"/>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    );
  }
;
