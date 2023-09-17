'use client';

import PropTypes from 'prop-types';
import { useSwiper } from 'swiper/react';

import ArrowLeft from 'public/icons/arrow-left.svg';
import ArrowRight from 'public/icons/arrow-right.svg';

export const MoreReviews = ({ btnLabel }) => {
  const { ariaLeft, label, ariaRight } = btnLabel;
  const swiper = useSwiper();

  return (
    <div className="flex justify-center items-center mt-6 md:mt-9">
      <button
        type="button"
        aria-label={ariaLeft}
        className="px-6 xl:px-9 btnMoreReviews"
        onClick={() => swiper.slidePrev()}
      >
        <ArrowLeft className="w-4 h-4 xl:w-6 xl:h-6 fill-black arrowMoreReviews" />
      </button>
      <p className="text-middle xl:text-large">{label}</p>
      <button
        type="button"
        aria-label={ariaRight}
        className="px-6 xl:px-9 btnMoreReviews"
        onClick={() => swiper.slideNext()}
      >
        <ArrowRight className="w-4 h-4 xl:w-6 xl:h-6 fill-black arrowMoreReviews" />
      </button>
    </div>
  );
};

MoreReviews.propTypes = {
  btnLabel: PropTypes.shape({
    ariaLeft: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    ariaRight: PropTypes.string.isRequired,
  }).isRequired,
};
