import PropTypes from 'prop-types';

import { routes } from 'routes';
import { Container, CoursesCard, SectionTitle } from '@/components';

import actorImg from 'public/images/actor.png';
import oratorImg from 'public/images/orator.png';

export const Courses = ({ data, id, locale }) => {
  const { cards, title, subTitle, btnShowMore } = data;

  const newData = [
    { cardImg: actorImg, linkForBtn: `/${locale}${routes.ACTING_SKILL}` },
    { cardImg: oratorImg, linkForBtn: `/${locale}${routes.ORATORY_SKILL}` },
  ].map((element, index) => ({ ...element, ...cards[index], btnShowMore }));

  return (
    <section id={id} className="coursesSection text-center">
      <Container>
        <SectionTitle text={title} />

        <h2 className="text-middle md:text-large xl:text-large36 font-medium mb-6 md:mb-9">
          {subTitle}
        </h2>

        <ul className="flex flex-col items-center gap-4 md:flex-row md:gap-5">
          {newData.map((element, index) => (
            <li className="w-full" key={index}>
              <CoursesCard data={element}></CoursesCard>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

Courses.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
    cards: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
      }),
    ).isRequired,
    btnShowMore: PropTypes.string.isRequired,
  }).isRequired,
  id: PropTypes.string.isRequired,
};
