import Image from 'next/image';
import PropTypes from 'prop-types';

import { Container } from '@/components';
import { ApplyButton } from '@/components/ApplyButton/ApplyButton';
import image from 'public/images/free.png';
import pixels from '@/constants/blurPixel';

export const FreeClass = ({
  data: { label, title, text },
  altText,
  btnLabel,
  isCoursePage = false,
  formData,
}) => {
  return (
    <section
      id="freeClass"
      className={`${
        isCoursePage ? '' : 'xl:pb-40'
      } freeClassSection pb-10 md:pb-20`}
    >
      <Container>
        <div className="md:flex md:gap-5 xl:gap-11 md:items-center">
          <div className="w-full md:w-[calc(50%-10px)] xl:w-[calc(50%-34px)] md:h-[473px] xl:h-[834px] md:relative">
            <Image
              className="w-full h-auto md:absolute md:w-[409px] md:right-0 xl:w-[721px] max-w-none"
              src={image}
              alt={altText}
              placeholder="blur"
              blurDataURL={pixels.greyPixel}
            />
          </div>
          <div className="md:w-[calc(50%-10px)] xl:h-[410px] max-w-[320px] md:max-w-none mx-auto md:mx-0">
            <p className="text-middle/[1.187] md:text-large/[1.208] xl:text-large36/[1.222] text-center md:text-left font-medium md:mb-2">
              {label}
            </p>
            <h3 className="text-large/[1.208] md:text-large46/[1.217] xl:text-large92/[1.207] font-bold text-center md:text-left text-accent mb-2 md:mb-1">
              {title}
            </h3>
            <p className="text-small/[1.25] md:text-middle/[1.208] xl:text-large/[1.208] font-medium text-justify md:text-left mb-4 xl:mb-6">
              {text}
            </p>

            <ApplyButton data={btnLabel} isFree formData={formData} />
          </div>
        </div>
      </Container>
    </section>
  );
};

FreeClass.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
  altText: PropTypes.string.isRequired,
  btnLabel: PropTypes.string.isRequired,
  isCoursePage: PropTypes.bool,
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
