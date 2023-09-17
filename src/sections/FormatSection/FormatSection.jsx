import PropTypes from 'prop-types';

import { Container, SectionTitle, FormatCard } from '@/components';

export const FormatSection = ({ data, btnText, formData, id }) => {
  const { title, subTitle, boldSubTitle, cards, advantageList } = data;

  return (
    <section className="formatSection" id={id}>
      <Container>
        <SectionTitle text={title} />

        <p className="text-middle md:text-large xl:text-large36 text-center mb-4 md:mb-0">
          {subTitle}
        </p>

        <p className="relative text-large42 md:text-large62 xl:text-large124 text-center text-accent leading-tight mb-6 md:mb-[118px] md:before:absolute md:before:content-formatLeft md:before:w-[185px] md:before:h-[104px] xl:before:w-[237px] md:before:bottom-[-104px] xl:before:bottom-[-80px] md:before:left-[150px] xl:before:left-[30%] md:after:absolute md:after:content-formatRight md:after:w-[185px] xl:after:w-[237px] md:after:h-[104px] md:after:bottom-[-104px] xl:after:bottom-[-80px] md:after:left-1/2">
          {boldSubTitle}
        </p>

        <ul className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-5 xl:gap-[88px] mb-8 md:mb-9 xl:mb-16">
          {cards.map((card, index) => (
            <FormatCard
              key={index}
              data={card}
              btnText={btnText}
              formData={formData}
            />
          ))}
        </ul>

        <ul className="w-full md:w-[452px] xl:w-[630px] text-justify mx-auto pl-5">
          {advantageList.map((advantage, index) => (
            <li
              className="list-disc md:text-middle md:leading-tight mb-2 last:mb-0"
              key={index}
            >
              {advantage}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

FormatSection.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
    boldSubTitle: PropTypes.string.isRequired,
    cards: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        listLabel: PropTypes.string.isRequired,
        list: PropTypes.arrayOf(PropTypes.string.isRequired),
        marketing: PropTypes.string.isRequired,
      }).isRequired,
    ).isRequired,
    advantageList: PropTypes.arrayOf(PropTypes.string.isRequired),
  }).isRequired,
  btnText: PropTypes.string.isRequired,
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
  id: PropTypes.string.isRequired,
};
