import PropTypes from 'prop-types';

import { Container, ItemCourseCard } from '@/components';

export const CoursePageList = ({ data, label, isActor = false }) => {
  const { title, cards } = data;
  const iconContent = isActor
    ? 'xl:even:before:content-pageArrowActor xl:odd:after:content-pageArrowActor'
    : 'xl:even:before:content-pageArrowOrator xl:odd:after:content-pageArrowOrator';

  return (
    <section className="pt-[92px] md:pt-[100px] xl:pt-[173px] pb-10 md:pb-20">
      <Container>
        <p className="mb-2 md:mb-3 xl:mb-4 text-center md:text-middle xl:text-large">
          {label}
        </p>

        <h1 className="text-middle/[1.2] md:text-large36/[1.22] xl:text-large56/[1.2] text-center font-bold mb-6 md:mb-9 xl:mb-16">
          {title}
        </h1>

        <ul>
          {cards.map((card, index) => (
            <li
              className={`coursePageListItem md:even:before:content-pageArrowMd md:odd:after:content-pageArrowMd ${iconContent} last:before:!content-none last:after:!content-none last:justify-end last:mb-0`}
              key={index}
            >
              <ItemCourseCard data={card} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

CoursePageList.propTypes = {
  data: PropTypes.shape({
    cards: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        list: PropTypes.arrayOf(PropTypes.string).isRequired,
      }).isRequired,
    ),
    title: PropTypes.string.isRequired,
  }),
  label: PropTypes.string.isRequired,
  isActor: PropTypes.bool,
};
