'use client';

import { useState } from 'react';
import PropTypes from 'prop-types';

import { ModalForm } from '@/components/ModalForm/ModalForm';

export const ApplyButton = ({ data, isFree, formData }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        className={`${
          isFree
            ? 'h-[35px] md:w-[211px] md:h-[53px] xl:w-[305px] xl:h-[92px] xl:text-large36'
            : 'h-[43px] md:h-[61px]'
        } w-full flex items-center justify-center bg-accent border-2 border-accent rounded-10 text-middle md:text-large font-medium cursor-pointer duration-300 hover:bg-white focus:bg-white`}
        type="button"
        onClick={toggleModal}
      >
        {data}
      </button>

      {formData && (
        <ModalForm toggleModal={toggleModal} isOpen={isOpen} data={formData} />
      )}
    </>
  );
};

ApplyButton.propTypes = {
  isFree: PropTypes.bool.isRequired,
  data: PropTypes.string.isRequired,
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
