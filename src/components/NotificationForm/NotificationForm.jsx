import PropTypes from 'prop-types';

import CorrectIcon from 'public/icons/correct.svg';
import IncorrectIcon from 'public/icons/incorrect-notification.svg';

export const NotificationForm = ({ notificationState, text }) => {
  const notificationCheck = notificationState === 'Correct';
  const { error, success } = text;

  return (
    <div className="flex gap-[8px] justify-center items-center absolute top-[16px] xl:top-[24px] ">
      {notificationCheck ? (
        <CorrectIcon className="notificationIcon" />
      ) : (
        <IncorrectIcon className="notificationIcon" />
      )}
      <p
        className={
          notificationCheck
            ? 'text-accent notificationMessage'
            : 'text-red notificationMessage'
        }
      >
        {notificationCheck ? `${success}` : `${error}`}
      </p>
    </div>
  );
};

NotificationForm.propTypes = {
  notificationState: PropTypes.string.isRequired,
  text: PropTypes.shape({
    error: PropTypes.string.isRequired,
    success: PropTypes.string.isRequired,
  }).isRequired,
};
