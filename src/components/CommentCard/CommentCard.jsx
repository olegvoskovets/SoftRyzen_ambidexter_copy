import Image from 'next/image';
import PropTypes from 'prop-types';

import { ratingReviews } from '@/utils/getRatingReviews';
import pixels from '@/constants/blurPixel';

export const CommentCard = ({ data }) => {
  const { photo, name, rating, comment, alt } = data;

  return (
    <div className="rounded-10 border-2 border-accent backdrop-blur-[10px] py-8 px-[10px] md:px-[14px] xl:px-[23px] flex flex-col gap-3 xl:gap-6 items-center w-full max-w-[320px] min-h-[444px] md:w-[216px] md:max-w-[216px] md:h-[623px] xl:w-[413px] xl:max-w-[413px] xl:h-[738px]">
      <Image
        src={photo}
        alt={alt}
        quality={100}
        width={250}
        height={250}
        className="w-40 h-40 xl:w-[250px] xl:h-[250px] rounded-full border-2 border-accent object-cover"
        placeholder="blur"
        blurDataURL={pixels.greenPixel}
      />
      <h3 className="text-middle xl:text-large">{name}</h3>
      <div className="flex gap-1">{ratingReviews(rating)}</div>
      <p className="block font-normal text-small xl:text-middle">{comment}</p>
    </div>
  );
};

CommentCard.propTypes = {
  data: PropTypes.shape({
    photo: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
};
