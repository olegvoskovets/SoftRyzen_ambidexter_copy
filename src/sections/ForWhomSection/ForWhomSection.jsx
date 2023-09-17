import PropTypes from 'prop-types';

import {
  Container,
  ForWhomImage,
  RelevantFor,
  SectionTitle,
} from '@/components';
import CrossIcon from '/public/icons/tick-cross.svg';
import CircleIcon from '/public/icons/tick-circle.svg';
import { ForWhomImageBw } from '@/components/ForWhomImageBw/ForWhomImageBw';

export const ForWhomSection = ({ data, id }) => {
  const { title, positions, goals } = data;

  return (
    <section id={id}>
      <Container className="relative">
        <SectionTitle text={title} />

        <div className="forWhoImageContainer">
          <ForWhomImageBw />
          <ForWhomImage />
        </div>

        <div className="flex flex-col gap-[24px] md:flex-row md:gap-[0px] md:justify-between md:z-20 relative xl:pb-[92px] pointer-events-none">
          <RelevantFor data={positions} section="relevant" Icon={CrossIcon} />
          <RelevantFor data={goals} section="forThose" Icon={CircleIcon} />
        </div>
      </Container>
    </section>
  );
};

ForWhomSection.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    positions: PropTypes.shape({
      label: PropTypes.string.isRequired,
      list: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    }).isRequired,
    goals: PropTypes.shape({
      label: PropTypes.string.isRequired,
      list: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    }).isRequired,
  }).isRequired,
  id: PropTypes.string.isRequired,
};
