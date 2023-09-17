import PropTypes from 'prop-types';
import Link from 'next/link';

export const BtnShowMore = ({ title, link }) => {
  return (
    <Link
      href={link}
      className="flex items-center justify-center bg-bgColor hover:bg-white hover:font-bold focus:bg-white focus:font-bold h-[51px] xl:h-[61px] rounded-10 text-middle font-medium min-w-full xl:text-large duration-300 xl:px-20 xl:min-w-max"
    >
      {title}
    </Link>
  );
};

BtnShowMore.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
