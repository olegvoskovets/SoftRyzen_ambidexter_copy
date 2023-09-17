import PropTypes from 'prop-types';

import InstagramIcon from 'public/icons/instagram.svg';
import YoutubeIcon from 'public/icons/youtube.svg';
import TikTokIcon from 'public/icons/tiktok.svg';

export const SocialMedia = ({ data, section }) => {
  const circleClassName = section === 'menu' || section === 'hero';

  const socialMediaIcons = {
    Instagram: (
      <InstagramIcon
        className={
          circleClassName
            ? 'socialMediaIcon fill-bgColor '
            : 'socialMediaIcon fill-accent '
        }
      />
    ),
    Youtube: (
      <YoutubeIcon
        className={
          circleClassName
            ? 'socialMediaIcon stroke-bgColor [&>*:first-child]:fill-bgColor'
            : 'socialMediaIcon stroke-accent [&>*:first-child]:fill-accent'
        }
      />
    ),
    Tiktok: (
      <TikTokIcon
        className={
          circleClassName
            ? 'socialMediaIcon  stroke-bgColor'
            : 'socialMediaIcon stroke-accent '
        }
      />
    ),
  };

  return (
    <ul className="flex  gap-[8px] md:gap-[16px] xl:gap-[24px]">
      {data.map((el, index) => {
        return (
          <li
            key={index}
            className={
              circleClassName
                ? 'circleSocialItems hover:bg-accent focus-within:bg-accent'
                : 'circleSocialItems hover:bg-white focus-within:bg-white'
            }
          >
            <a
              href={el.link}
              target="_blank"
              rel="noopener noreferrer nofollow"
              aria-label={el.ariaLabel}
              className="w-full h-full flex justify-center items-center rounded-[50%]"
            >
              {socialMediaIcons[el.name]}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

SocialMedia.propTypes = {
  section: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      ariaLabel: PropTypes.string.isRequired,
    }),
  ),
};
