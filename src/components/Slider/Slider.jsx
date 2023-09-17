'use client';

import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard } from 'swiper/modules';
import { useMediaQuery } from 'react-responsive';

import 'swiper/css';

export const Slider = ({ children, data, Component }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <Swiper
      modules={[Keyboard]}
      loop={true}
      lazyPreloadPrevNext={1}
      keyboard={{
        enabled: true,
        onlyInViewport: true,
      }}
      spaceBetween={20}
      slidesPerView={isMobile ? 1 : 3}
    >
      {data.map((element, index) => (
        <SwiperSlide
          key={index}
          className="max-w-[320px] md:max-w-[216px] xl:max-w-[414px]"
        >
          <Component data={element} />
        </SwiperSlide>
      ))}
      {children}
    </Swiper>
  );
};

Slider.propTypes = {
  children: PropTypes.node,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      photo: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      rating: PropTypes.string.isRequired,
      comment: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  Component: PropTypes.elementType.isRequired,
};
