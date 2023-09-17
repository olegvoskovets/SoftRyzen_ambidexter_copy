import PropTypes from 'prop-types';

import IncorrectIcon from 'public/icons/incorrect.svg';

export const IncorrectForm = ({ text }) => {
  return (
    <div className="flex gap-[4px] top-1 items-center absolute right-0 xl:top-[10px]">
      <IncorrectIcon className="w-[8px] h-[8px] xl:w-[10px] xl:h-[10px]" />
      <p className="text-red text-small font-normal leading-[1.15] xl:text-middle">
        {text}
      </p>
    </div>
  );
};

IncorrectForm.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
};
