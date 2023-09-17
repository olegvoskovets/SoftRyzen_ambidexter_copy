'use client';

import PropTypes from 'prop-types';
import { Dialog, Transition } from '@headlessui/react';

import { FeedbackForm } from '@/components/FeedbackForm/FeedbackForm';
import CloseIcon from 'public/icons/close.svg';

export const ModalForm = ({ toggleModal, isOpen, data }) => {
  const { btnClose } = data;

  const handleClick = e => {
    if (e.target.id === 'overlay') {
      toggleModal();
    }
  };

  return (
    <Transition
      show={isOpen}
      enter="transition-opacity duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-300"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <Dialog
        open={isOpen}
        onClose={toggleModal}
        className="relative inset-0 z-40 "
      >
        <div className="bg-bgModal fixed inset-0  backdrop-blur-[12.5px] ">
          <Dialog.Panel className="relative ">
            <div
              className="fixed inset-0 overflow-y-auto py-[24px] xl:py-[62px] flex justify-center items-center "
              id="overlay"
              onClick={handleClick}
            >
              <div className="relative w-[280px] md:w-[452px] xl:w-[844px] mx-auto my-auto ">
                <button
                  type="button"
                  onClick={toggleModal}
                  className=" w-[40px] h-[40px] flex justify-center items-center absolute top-[2px] right-[2px] md:top-[14px] md:right-[14px] xl:top-[38px] xl:right-[38px] z-50"
                >
                  <CloseIcon
                    className="w-[20px] h-[20px] xl:w-[24px] xl:h-[24px]"
                    aria-label={btnClose}
                  />
                </button>

                <FeedbackForm toggleModal={toggleModal} data={data} />
              </div>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </Transition>
  );
};

ModalForm.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  data: PropTypes.shape({
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
