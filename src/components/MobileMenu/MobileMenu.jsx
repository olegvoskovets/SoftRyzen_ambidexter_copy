import Link from 'next/link';
import PropTypes from 'prop-types';

import {
  Container,
  LocaleSwitcher,
  NavBar,
  SocialNetworks,
} from '@/components';
import { routes } from 'routes';

export const MobileMenu = ({
  handleMenuToggle,
  navBar,
  siteMap,
  socialNetworks,
  isModalShow,
  socialMedia,
  locale,
  isHome,
  pathname,
}) => {
  const { goHome, toActorPage, toOratorPage } = siteMap;

  const actorPageLink = `/${locale}${routes.ACTING_SKILL}`;
  const oratorPageLink = `/${locale}${routes.ORATORY_SKILL}`;
  const isActorPage = pathname === actorPageLink;

  return (
    <div
      className={`${
        isModalShow
          ? 'translate-x-0 opacity-100'
          : ' opacity-0 translate-x-full'
      } absolute block md:hidden top-0 left-0 w-full bg-white duration-300 pt-[76px] h-[100vh]`}
    >
      <Container className="py-6 flex flex-col justify-start h-full overflow-y-auto">
        {isHome && (
          <NavBar
            className={'flex flex-col text-middle'}
            handleMenuToggle={handleMenuToggle}
            data={navBar}
          />
        )}

        {!isHome && (
          <div className="flex flex-col items-center gap-4 text-middle font-medium uppercase">
            <Link
              className="navBarLinkHeader"
              href={`/${locale}`}
              onClick={handleMenuToggle}
            >
              {goHome}
            </Link>

            <Link
              className="navBarLinkHeader"
              href={isActorPage ? oratorPageLink : actorPageLink}
              onClick={handleMenuToggle}
            >
              {isActorPage ? toOratorPage : toActorPage}
            </Link>
          </div>
        )}

        <LocaleSwitcher className="flex items-center justify-center text-[12px] mt-9 mb-9" />

        <SocialNetworks
          socialNetworks={socialNetworks}
          socialMedia={socialMedia}
        />
      </Container>
    </div>
  );
};

MobileMenu.propTypes = {
  handleMenuToggle: PropTypes.func.isRequired,
  navBar: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    }),
  ),
  siteMap: PropTypes.shape({
    goHome: PropTypes.string.isRequired,
    toOratorPage: PropTypes.string.isRequired,
    toActorPage: PropTypes.string.isRequired,
  }),
  socialNetworks: PropTypes.string.isRequired,
  isModalShow: PropTypes.bool,
  socialMedia: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      ariaLabel: PropTypes.string.isRequired,
    }),
  ),
  locale: PropTypes.string.isRequired,
  isHome: PropTypes.bool.isRequired,
  pathname: PropTypes.string.isRequired,
};
