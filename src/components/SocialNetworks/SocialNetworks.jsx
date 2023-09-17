import PropTypes from 'prop-types';
import { SocialMedia } from '..';

export const SocialNetworks = ({ socialNetworks, socialMedia }) => {
  return (
    <div className="uppercase flex flex-col gap-3 justify-center items-center text-middle">
      {socialNetworks}
      <SocialMedia section="menu" data={socialMedia} />
    </div>
  );
};

SocialNetworks.propTypes = {
  socialNetworks: PropTypes.string.isRequired,
  socialMedia: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      ariaLabel: PropTypes.string.isRequired,
    }),
  ),
};
