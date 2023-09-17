import PropTypes from 'prop-types';
import { Container, SectionTitle, Features } from '@/components';

export const AboutSchool = ({ aboutSchool, id }) => {
  return (
    <section id={id} className="schoolSection">
      <Container>
        <div className=" text-center flex flex-col gap-[8px] md:gap-3 mb-6 md:mb-[72px]">
          <SectionTitle text={aboutSchool.title} />
          <h2
            className="flex items-center justify-center font-normal leading-normal
           text-[42px] md:text-[62px] xl:text-[124px] h-[51px] md:h-[75px] xl:h-[150px] "
          >
            AMBI<span className="text-accent font-bold">DEXTER</span>
          </h2>
          <p
            className="h-[19px] md:h-[29px] xl:h-[44px] leading-normal text-[16px] lowercase
           md:text-[24px] xl:text-[36px] flex items-center justify-center"
          >
            {aboutSchool.subTitle}
          </p>
        </div>
        <Features data={aboutSchool.features} />
      </Container>
    </section>
  );
};

AboutSchool.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  features: PropTypes.arrayOf([PropTypes.string]),
  id: PropTypes.string.isRequired,
};
