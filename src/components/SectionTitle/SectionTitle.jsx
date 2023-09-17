import PropTypes from 'prop-types';

export const SectionTitle = ({ className = '', text }) => {
  return (
    <h2
      className={`text-center mb-4 md:mb-9
      after:content-arrowDown after:mx-auto
      after:w-3 after:md:w-4 after:xl:w-6 
      after:h-3 after:md:h-4 after:xl:h-6 
      flex flex-col gap-1 md:gap-2 xl:gap-3 
      ${className}`}
    >
      {text}
    </h2>
  );
};

SectionTitle.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
};
