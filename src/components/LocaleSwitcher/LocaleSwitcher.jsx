'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { i18n } from '../../../i18n';
import PropTypes from 'prop-types';

export const LocaleSwitcher = ({ className }) => {
  const locales = i18n.locales;
  const pathName = usePathname();

  const getCurrentLocale = () => {
    if (!pathName) return '/';

    const segments = pathName.split('/');

    return segments[1];
  };

  const redirectedPathName = locale => {
    if (!pathName) return '/';

    const segments = pathName.split('/');

    segments[1] = locale;

    return segments.join('/');
  };

  const titleLocale = locale => {
    return locale === 'uk' ? 'ua' : locale;
  };

  return (
    <ul
      aria-label="language switcher"
      className={`${className} uppercase text-[12px] xl:text-[24px] md:flex xl:gap-3 navBar-text`}
    >
      {locales.map(locale => (
        <li
          key={locale}
          className="w-[41px] h-[39px] flex justify-center items-center"
        >
          {locale === getCurrentLocale() ? (
            <span className="font-bold text-secondary p-3 xl:p-0 cursor-default">
              {titleLocale(locale)}
            </span>
          ) : (
            <Link
              href={redirectedPathName(locale)}
              className="font-normal p-3 xl:p-0 hover:text-accent focus:text-accent transition-colors duration-300"
            >
              {titleLocale(locale)}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
};

LocaleSwitcher.propTypes = {
  className: PropTypes.string,
};
