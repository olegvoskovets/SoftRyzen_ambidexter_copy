import PropTypes from 'prop-types';

import CloseMobile from 'public/icons/close.svg';
import MenuBtn from 'public/icons/menu.svg';

export const ButtonMenuToggle = ({ isOpenMenu, handleMenuToggle }) => {
  return (
    <button
      type="button"
      aria-label={isOpenMenu ? 'close menu button' : 'open menu button'}
      className="cursor-pointer p-[10px] xl:pt-0  z-10"
      onClick={handleMenuToggle}
    >
      {!isOpenMenu ? (
        <MenuBtn width={20} height={20} className="duration-300" />
      ) : (
        <CloseMobile width={20} height={20} className="duration-300" />
      )}
    </button>
  );
};

ButtonMenuToggle.propTypes = {
  isOpenMenu: PropTypes.bool.isRequired,
  handleMenuToggle: PropTypes.func.isRequired,
};
