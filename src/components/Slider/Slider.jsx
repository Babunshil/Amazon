import React from 'react'
import './Slider.css'
import { Swiper, SwiperSlide } from 'swiper/react';
// import swipper styls
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { SliderProducts } from '../../data/products';
import { Navigation, Pagination } from 'swiper';


const Slider = () => {

  return (

    <div className="sliderContainer">
      <Swiper
        breakpoints={{
          640: {
            slidesPerView: 3
          },
          0: {
            slidesPerView: 1
          }
        }}
        modules={[Pagination, Navigation]}
        className='mySwiper'
        navigation={true}
        loopFillGroupWithBlank={true}
        slidesPerView={3}
        spaceBetween={40}
        slidesPerGroup={1}
        loop={true}
      >
        {SliderProducts.map((slide, i) => {
          return (
            <SwiperSlide >
              <div className="left-s">
                <div className="name">
                  <span>{slide.name}</span>
                  <span>{slide.detail}</span>
                </div>

                <span>{slide.price}$</span>
                <div>Shop now</div>
              </div>

              <img src={slide.img} alt="products" className='img-p' />
            </SwiperSlide>
          )

        })}

      </Swiper>
    </div>
  )
}

export default Slider