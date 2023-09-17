import Image from 'next/image';
import PropTypes from 'prop-types';

import { Container, SocialMedia } from '@/components';
import heroImg from 'public/images/hero.png';

export const Hero = ({ data, icons }) => {
  const {
    speciality: [leftList, rightList],
    title,
  } = data;

  return (
    <section className="heroSection pt-20 md:pt-[75px] xl:pt-[93px] min-h-[460px] md:min-h-[689px] xl:min-h-[1204px] md:text-base xl:text-large font-medium leading-[1.2]">
      <Container
        className={
          'relative flex justify-center w-full h-full md:pt-[63px] xl:pt-[124px]'
        }
      >
        <div className="flex flex-col md:gap-28 xl:gap-64 min-w-max relative z-10 mr-auto">
          <ul className="flex flex-col gap-2 md:gap-3 xl:gap-6">
            {leftList.map((element, index) => (
              <li key={index}>
                <p>{element}</p>
              </li>
            ))}
          </ul>
          <div className="hidden md:block">
            <SocialMedia data={icons} section="hero" />
          </div>
        </div>
        <div className="text-end flex flex-col items-end gap-12 md:gap-[68px] xl:gap-[120px] absolute top-[61px] right-5 md:right-10 xl:right-20 md:top-[52px] xl:top-[80px] z-20">
          <h1 className="text-[32px]/[1] md:text-large64/[1] xl:text-large134/[1] max-w-min">
            {title}
          </h1>
          <ul className="flex flex-col gap-2 md:gap-3 xl:gap-6">
            {rightList.map((element, index) => (
              <li key={index}>
                {element.map(el => (
                  <p key={el}>{el}</p>
                ))}
              </li>
            ))}
          </ul>
        </div>
        <Image
          src={heroImg}
          alt={title}
          priority={true}
          quality={100}
          width={737}
          height={951}
          className="absolute top-9 md:top-0 md:left-1/2 md:translate-x-[-35%] xl:translate-x-[-45%] z-0 max-w-[235px] md:max-w-[414px] xl:max-w-[737px]"
        />
      </Container>
    </section>
  );
};

Hero.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    speciality: PropTypes.arrayOf(
      PropTypes.arrayOf(
        PropTypes.oneOfType([
          PropTypes.string.isRequired,
          PropTypes.arrayOf(PropTypes.string.isRequired),
        ]).isRequired,
      ),
    ).isRequired,
  }).isRequired,
  icons: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      ariaLabel: PropTypes.string.isRequired,
    }),
  ),
};
