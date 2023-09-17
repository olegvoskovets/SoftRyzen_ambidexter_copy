import PropTypes from 'prop-types';
import Image from 'next/image';

import { BtnShowMore } from '@/components';
import pixels from '@/constants/blurPixel';

export const CoursesCard = ({ data }) => {
  const { label, cardImg, alt, linkForBtn, btnShowMore } = data;

  return (
    <div className="bg-accent py-4 px-3 md:py-8 md:px-4 flex flex-col gap-3 items-center  rounded-10 md:gap-6 w-full max-w-[320px] mx-auto md:max-w-[630px]">
      <div className="w-[123px] h-[77px] md:w-[152px] md:h-[95px] xl:w-[320px] xl:h-[216px]">
        <Image
          src={cardImg}
          width={500}
          height={500}
          alt={alt}
          placeholder="blur"
          blurDataURL={pixels.greyPixel}
        />
      </div>

      <h2 className="text-middle md:text-large xl:text-[44px] font-medium max-w-min">
        {label}
      </h2>

      <BtnShowMore title={btnShowMore} link={linkForBtn} />
    </div>
  );
};

CoursesCard.propTypes = {
  data: PropTypes.shape({
    cardImg: PropTypes.shape({}).isRequired,
    linkForBtn: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    btnShowMore: PropTypes.string.isRequired,
  }).isRequired,
};
