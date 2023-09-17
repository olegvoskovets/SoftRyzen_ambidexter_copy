'use client';

import { useState } from 'react';
import PropTypes from 'prop-types';

export const VideoPlayer = ({ link }) => {
  const [isShowVideo, setIsShowVideo] = useState(false);
  const embedId = link.split('?')[1]?.split('=')[1];

  const onStart = event => {
    setIsShowVideo(true);
    setTimeout(() => {
      event.target.classList.add('hidden');
    }, 500);
  };

  return (
    <div className={isShowVideo ? 'videoActive videoWrapper' : 'videoWrapper'}>
      {isShowVideo && embedId && (
        <iframe
          className="videoPlayer"
          src={`https://www.youtube.com/embed/${embedId}?autoplay=1&showinfo=0&rel=0&cc_load_policy=0&iv_load_policy=3`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Youtube Promo"
        />
      )}
      <button type="button" className="videoPoster" onClick={onStart} />
    </div>
  );
};

VideoPlayer.propTypes = {
  link: PropTypes.string.isRequired,
};
