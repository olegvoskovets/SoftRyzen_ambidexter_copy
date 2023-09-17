'use client';

import PropTypes from 'prop-types';
import { useInView } from 'react-intersection-observer';

import { CommentCard, Container, MoreReviews, Slider } from '@/components';

export const Comments = ({ data, id }) => {
  const { label, comments, btnLabel } = data;

  const { ref, inView } = useInView({
    threshold: 0,
  });

  return (
    <section ref={ref} id={id} className="reviewsSection">
      <Container>
        <h2 className="mb-6 md:mb-9 xl:mb-16 text-center text-middle md:text-large xl:text-large36">
          {label}
        </h2>

        {inView && (
          <Slider data={comments} Component={CommentCard}>
            <MoreReviews btnLabel={btnLabel} />
          </Slider>
        )}
      </Container>
    </section>
  );
};

Comments.propTypes = {
  data: PropTypes.shape({
    label: PropTypes.string.isRequired,
    comments: PropTypes.arrayOf(
      PropTypes.shape({
        photo: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        rating: PropTypes.string.isRequired,
        comment: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
      }).isRequired,
    ).isRequired,
    btnLabel: PropTypes.shape({
      ariaLeft: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      ariaRight: PropTypes.string.isRequired,
    }).isRequired,
  }),
  id: PropTypes.string.isRequired,
};
