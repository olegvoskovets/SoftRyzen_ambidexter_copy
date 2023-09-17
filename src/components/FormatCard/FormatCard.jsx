import PropTypes from 'prop-types';
import { ApplyButton } from '@/components/ApplyButton/ApplyButton';

export const FormatCard = ({ data, btnText, formData }) => {
  const { title, listLabel, list, marketing } = data;

  return (
    <li className="w-full md:w-[334px] xl:w-[368px] md:h-[457px] xl:h-[382px] flex flex-col justify-between px-3 md:px-4 xl:px-6 py-4 border-2 border-accent rounded-10">
      <h3 className="text-center text-middle md:text-large mb-4 md:mb-6">
        {title}
      </h3>

      <p className="md:text-middle mb-2">{listLabel}</p>
      <ul className="flex-grow flex-shrink">
        {list.map((item, index) => (
          <li
            className="flex items-center gap-1 md:gap-2 xl:gap-1 font-normal md:text-middle leading-none xl:leading-tight mb-2 md:mb-3 xl:mb-0 last:mb-0 before:content-tickIcon before:w-3 md:before:w-4 before:h-3 md:before:h-4"
            key={index}
          >
            {item}
          </li>
        ))}
      </ul>

      <div className="flex-shrink-0">
        <p className="text-center font-normal md:text-base mb-3">{marketing}</p>
        <ApplyButton data={btnText} isFree={false} formData={formData} />
      </div>
    </li>
  );
};

FormatCard.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    listLabel: PropTypes.string.isRequired,
    list: PropTypes.arrayOf(PropTypes.string.isRequired),
    marketing: PropTypes.string.isRequired,
  }).isRequired,
  btnText: PropTypes.string.isRequired,
  formData: PropTypes.shape({
    name: PropTypes.shape({
      label: PropTypes.string.isRequired,
      placeholder: PropTypes.string.isRequired,
      errors: PropTypes.arrayOf(PropTypes.string.isRequired),
    }).isRequired,
    phoneNumber: PropTypes.shape({
      label: PropTypes.string.isRequired,
      placeholder: PropTypes.string.isRequired,
      errors: PropTypes.arrayOf(PropTypes.string.isRequired),
    }).isRequired,
    email: PropTypes.shape({
      label: PropTypes.string.isRequired,
      placeholder: PropTypes.string.isRequired,
      errors: PropTypes.arrayOf(PropTypes.string.isRequired),
    }).isRequired,
    message: PropTypes.shape({
      label: PropTypes.string.isRequired,
      placeholder: PropTypes.string.isRequired,
    }).isRequired,
    notification: PropTypes.shape({
      error: PropTypes.string.isRequired,
      success: PropTypes.string.isRequired,
    }).isRequired,
    btnSend: PropTypes.string.isRequired,
    btnClose: PropTypes.string.isRequired,
  }).isRequired,
};
