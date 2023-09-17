'use client';

import { Link } from 'react-scroll';
import PropTypes from 'prop-types';

export const LinkNavBar = ({ link, label, handleMenuToggle, isFooter }) => {
  const handleClick = e => {
    e.target.blur();
    handleMenuToggle && handleMenuToggle();
  };
  return (
    <li
      className={`md:h-[39px] flex items-center cursor-pointer duration-300 `}
    >
      <Link
        key={label}
        to={link}
        smooth="easeInOutQuart"
        spy={true}
        href="/"
        onClick={handleClick}
        className={isFooter ? 'navBarLinkFooter' : 'navBarLinkHeader'}
        activeClass={isFooter ? '' : 'navBarLinkActive  '}
        offset={-100}
      >
        {label}
      </Link>
    </li>
  );
};

LinkNavBar.propTypes = {
  link: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  handleMenuToggle: PropTypes.func,
  isFooter: PropTypes.bool.isRequired,
};
