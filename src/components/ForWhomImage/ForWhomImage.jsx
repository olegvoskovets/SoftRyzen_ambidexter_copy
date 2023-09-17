import Image from 'next/image';

import ForWhomImageColor from 'public/images/for-who-color.jpg';
import pixels from '@/constants/blurPixel';

export const ForWhomImage = () => {
  return (
    <Image
      src={ForWhomImageColor}
      alt="Кирило задоволений"
      width={813}
      height={862}
      quality={100}
      className="forWhomImage"
      placeholder="blur"
      blurDataURL={pixels.greyPixel}
    />
  );
};
