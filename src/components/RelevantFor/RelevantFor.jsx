import PropTypes from 'prop-types';

export const RelevantFor = ({ data, section, Icon }) => {
  const { label, list } = data;

  return (
    <div className="xl:mt-[99px]">
      <h3 className="text-center mb-[8px] text-middle font-bold md:text-large md:text-left md:mb-[24px] xl:text-[32px]">
        {label}
      </h3>

      <ul className="flex flex-col gap-[8px] items-center md:gap-[12px] xl:gap-[24px]">
        {list.map((el, index) => (
          <li
            key={index}
            className={section === 'relevant' ? 'relevant' : 'forThose'}
          >
            <Icon className="w-[12px] h-[12px] md:w-[16px] md:h-[16px] xl:w-[32px] xl:h-[32px]" />

            <p className="w-[184px] md:text-middle leading-[1.28] md:leading-[1.2] xl:w-[357px] xl:text-large">
              {el}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

RelevantFor.propTypes = {
  data: PropTypes.shape({
    label: PropTypes.string.isRequired,
    list: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  }).isRequired,
  section: PropTypes.string.isRequired,
  Icon: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
};
