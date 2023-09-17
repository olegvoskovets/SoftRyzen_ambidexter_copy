import PropTypes from 'prop-types';
import { LinkNavBar } from '@/components';

export const NavBar = ({
  className,
  data,
  handleMenuToggle,
  isFooter = false,
}) => {
  return (
    <nav>
      <ul
        className={`${className} md:flex uppercase md:py-3  items-center gap-4 xl:gap-6 font-medium leading-normal xl:text-[24px] text-black `}
      >
        {data.map(({ label, link }) => (
          <LinkNavBar
            key={label}
            link={link}
            label={label}
            handleMenuToggle={handleMenuToggle}
            isFooter={isFooter}
          />
        ))}
      </ul>
    </nav>
  );
};

NavBar.propTypes = {
  className: PropTypes.string,
  handleMenuToggle: PropTypes.func,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  isFooter: PropTypes.bool,
};
