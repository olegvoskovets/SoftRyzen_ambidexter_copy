'use client';

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import useFormPersist from 'react-hook-form-persist';
import PropTypes from 'prop-types';

import { IncorrectForm, NotificationForm, Loader } from '@/components';
import { sendMessageTelegram } from '@/utils/sendMessageTelegram';
import { sendEmail } from '@/utils/sendEmail';

export const FeedbackForm = ({ toggleModal, data }) => {
  const [notificationState, setNotificationState] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { name, phoneNumber, email, message, notification, btnSend } = data;

  const defaultValues = {
    name: '',
    phone: '',
    email: '',
    message: '',
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    setValue,
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      name: localStorage.getItem('form')
        ? Object.values(JSON.parse(localStorage?.getItem('form')))[0]
        : '',
      phone: localStorage.getItem('form')
        ? Object.values(JSON.parse(localStorage?.getItem('form')))[1]
        : '',
      email: localStorage.getItem('form')
        ? Object.values(JSON.parse(localStorage?.getItem('form')))[2]
        : '',
      message: localStorage.getItem('form')
        ? Object.values(JSON.parse(localStorage?.getItem('form')))[3]
        : '',
    },
  });

  useEffect(() => {
    const handleESC = e => {
      if (e.code === 'Escape') toggleModal();
    };
    window.addEventListener('keydown', handleESC);
    return () => {
      window.removeEventListener('keydown', handleESC);
    };
  }, [toggleModal]);

  useFormPersist('form', { watch, storage: window.localStorage, setValue });

  const onSubmit = async inputValues => {
    setIsLoading(true);
    try {
      await sendMessageTelegram(inputValues);
      await sendEmail(inputValues);
      reset(defaultValues);
      setNotificationState('Correct');
      setIsLoading(false);
      localStorage.setItem('form', JSON.stringify(defaultValues));
      setTimeout(toggleModal, 3000);
    } catch {
      setIsLoading(false);
      setNotificationState('Incorrect');
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" flex flex-col border border-accent rounded-10 bg-white w-[280px] mx-auto px-[12px] pb-[64px] pt-[56px] md:w-[452px] md:px-[24px] md:pt-[61px] xl:w-[844px] xl:px-[48px] xl:pt-[108px] xl:pb-[100px]"
      >
        <label className="formLabel relative flex flex-col">
          <span className="mb-[8px]">
            {name.label} <span className="text-red">*</span>
          </span>

          <input
            type="text"
            id="name"
            name="name"
            placeholder={name.placeholder}
            {...register('name', {
              required: true,
              pattern: /^(?!.*[ ]-|.*-(?=[ ]))([а-яА-ЯіІїЇєЄґҐa-zA-Z\s'-]+)$/,
              minLength: 3,
              maxLength: 100,
            })}
            className={
              errors.name
                ? 'formInput border-red placeholder:text-red text-red'
                : 'formInput border-accent placeholder:text-black '
            }
          />
          {errors.name && <IncorrectForm text={name.errors} />}
        </label>

        <label className="formLabel relative flex flex-col">
          <span className="mb-[8px]">
            {phoneNumber.label} <span className="text-red">*</span>
          </span>

          <input
            type="all"
            id="phone"
            name="phone"
            placeholder={phoneNumber.placeholder}
            {...register('phone', {
              required: true,
              pattern: /^\+\d{11,12}$/,
            })}
            className={
              errors.phone
                ? 'formInput border-red placeholder:text-red text-red'
                : 'formInput border-accent placeholder:text-black'
            }
          />
          {errors.phone && <IncorrectForm text={phoneNumber.errors} />}
        </label>

        <label className="formLabel relative flex flex-col">
          <span className="mb-[8px]">
            {email.label} <span className="text-red">*</span>
          </span>

          <input
            type="text"
            id="email"
            name="email"
            placeholder={email.placeholder}
            {...register('email', {
              required: true,
              pattern: /^(?!-)[A-Za-z0-9._-]+@[-A-Za-z0-9]+(\.[A-Za-z]{2,})+$/,
              minLength: 6,
              maxLength: 63,
            })}
            className={
              errors.email
                ? 'formInput border-red placeholder:text-red text-red'
                : 'formInput border-accent placeholder:text-black'
            }
          />
          {errors.email && <IncorrectForm text={email.errors} />}
        </label>

        <label className="formLabel relative mb-[24px]">
          <span className="block mb-[8px]">{message.label}</span>
          <textarea
            {...register('message', {
              required: false,
              maxLength: 500,
            })}
            id="message"
            name="message"
            placeholder={message.placeholder}
            className={`w-full text-base xl:text-large resize-none 
             h-[146px] border border-accent rounded-10 px-[12px] py-[8px] leading-[1.15] placeholder:text-black placeholder:opacity-50 placeholder:text-base placeholder:font-normal  xl:px-[24px] xl:py-[16px] xl:placeholder:text-large xl:h-[287px] 
              ${
                errors.message
                  ? 'formInput border-red placeholder:text-red text-red'
                  : 'formInput'
              }`}
          ></textarea>

          {errors.message && <IncorrectForm text={message.errors} />}
        </label>

        <button
          type="submit"
          disabled={isLoading}
          className="bg-accent rounded-10 py-[8px] text-middle font-medium max-h-[35px] xl:max-h-[76px] xl:py-[16px] xl:text-large36 flex justify-center items-center hover:bg-white focus:bg-white hover:border-[2px] focus:border-[2px] border-accent duration-300 cursor-pointer"
        >
          {isLoading ? (
            <div className="w-[20px] h-[20px] xl:h-[40px] xl:w-[40px] ">
              <Loader />
            </div>
          ) : (
            btnSend
          )}
        </button>

        <div className="relative flex justify-center">
          {notificationState && (
            <NotificationForm
              notificationState={notificationState}
              text={notification}
            />
          )}
        </div>
      </form>
    </>
  );
};

FeedbackForm.propTypes = {
  toggleModal: PropTypes.func.isRequired,
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
