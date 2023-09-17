import PropTypes from 'prop-types';

import TelegramIcon from 'public/icons/telegram.svg';
import ViberIcon from 'public/icons/viber.svg';
import WhatsappIcon from 'public/icons/whatsapp.svg';

export const Contacts = ({ data }) => {
  const contactsIcons = {
    Telegram: <TelegramIcon className="contactsIcon" />,
    Viber: <ViberIcon className="contactsIcon" />,
    Whatsapp: <WhatsappIcon className="contactsIcon" />,
  };

  return (
    <ul>
      <li className="flex justify-start items-center gap-[12px] xl:gap-[16px] mb-[16px] md:mb-[32px] xl:mb-[24px]">
        <p className="font-medium md:text-small xl:text-large">
          Phone:
          <a
            href="tel:+380680619457"
            className="hover:text-white focus:text-white duration-300"
            target="_blank"
          >
            &nbsp;+38 (068) 06 19 457
          </a>
        </p>
        <ul className="flex gap-[8px] xl:gap-[12px]">
          {data.map((el, index) => (
            <li key={index}>
              <a
                className="fill-black hover:fill-white focus:fill-white duration-300"
                href={el.link}
                target="_blank"
                rel="noopener noreferrer nofollow"
                aria-label={el.ariaLabel}
              >
                {contactsIcons[el.name]}
              </a>
            </li>
          ))}
        </ul>
      </li>
      <li className="flex justify-start items-center">
        <p className="font-medium md:text-small xl:text-large">
          E-mail:
          <a
            href="mailto:ambidexterschool@gmail.com"
            className="hover:text-white focus:text-white duration-300"
            target="_blank"
          >
            &nbsp;ambidexterschool@gmail.com
          </a>
        </p>
      </li>
    </ul>
  );
};

Contacts.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      ariaLabel: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
