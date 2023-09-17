import Image from 'next/image';

import ForWhomImageBlack from 'public/images/for-who-bw.jpg';
import pixels from '@/constants/blurPixel';

export const ForWhomImageBw = () => {
  return (
    <Image
      src={ForWhomImageBlack}
      alt="Кирило здивований"
      width={813}
      height={862}
      quality={100}
      className="forWhomImageBw"
      placeholder="blur"
      blurDataURL={pixels.greyPixel}
    />
  );
};
