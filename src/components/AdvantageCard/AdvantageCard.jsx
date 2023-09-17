import PropTypes from 'prop-types';

export const AdvantageCard = ({ count, text, list: advantagesList }) => {
  return (
    <li
      className={`${
        advantagesList ? 'row-span-2' : ''
      } py-4 md:py-5 xl:py-8 px-3 md:px-4 bg-accent rounded-10 `}
    >
      <p
        className={`${
          advantagesList ? 'mb-2' : ''
        } text-small xl:text-large font-medium flex items-center gap-2 leading-tight`}
      >
        <span className="text-large64/[1] md:text-large70 xl:text-large140/[143px] font-medium">
          {count}
        </span>
        {text}
      </p>
      {advantagesList && (
        <ul>
          {advantagesList.map((text, idx) => (
            <li
              className="text-small/[1.6] xl:text-large/[1.486] font-medium flex items-center before:block
              before:bg-black before:mr-1.5 md:before:mr-2 before:h-1 before:w-1 xl:before:h-1.5 xl:before:w-1.5"
              key={idx}
            >
              {text}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

AdvantageCard.propTypes = {
  count: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(PropTypes.string),
};
