'use client';

import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import PropTypes from 'prop-types';

import { Container, Logo, Contacts, NavBar, SocialMedia } from '@/components';

export const Footer = ({ contacts, navBar, socialMedia, locale, goHome }) => {
  const [isMobile, setIsMobile] = useState(false);
  const mobile = useMediaQuery({ maxWidth: 767 });
  const pathname = usePathname();

  const isHome = pathname === `/${locale}` || pathname === '/';

  useEffect(() => {
    setIsMobile(mobile);
  }, [mobile]);

  return (
    <footer className="py-10 xl:py-20 bg-accent">
      <Container className="flex flex-col">
        <div className="h-4 mb-4 md:mb-8 xl:mb-12 md:flex md:items-center md:justify-between">
          <Logo isColored={false} locale={locale} />

          {!isMobile &&
            (isHome ? (
              <NavBar
                className="md:text-small xl:text-large"
                data={navBar}
                isFooter={true}
              />
            ) : (
              <Link
                className="text-middle md:text-small xl:text-large font-medium uppercase duration-300 hover:text-white  focus:text-white cursor-pointer"
                href={`/${locale}`}
              >
                {goHome}
              </Link>
            ))}
        </div>

        <div className="mb-6 md:mb-4 xl:mb-6 md:flex md:items-end md:justify-between">
          <Contacts data={contacts} />
          {!isMobile && <SocialMedia section="footer" data={socialMedia} />}
        </div>

        <p className="text-small xl:text-middle font-normal text-center">
          Created by{' '}
          <a
            className="font-semibold duration-300 hover:text-white focus:text-white cursor-pointer"
            href="https://softryzen.com/"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            SoftRyzen
          </a>
        </p>
      </Container>
    </footer>
  );
};

Footer.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      ariaLabel: PropTypes.string.isRequired,
    }),
  ).isRequired,
  navBar: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    }),
  ).isRequired,
  socialMedia: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      ariaLabel: PropTypes.string.isRequired,
    }),
  ).isRequired,
  locale: PropTypes.string.isRequired,
  goHome: PropTypes.string.isRequired,
};
