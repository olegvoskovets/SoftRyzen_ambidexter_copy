import {
  Hero,
  AboutMeSection,
  FormatSection,
  Comments,
  FreeClass,
  AboutSchool,
  Courses,
} from '@/sections';
import { ForWhomSection } from '@/sections/ForWhomSection/ForWhomSection';

import { getDictionary } from '@/utils/getDictionary';

export default async function Home({ params: { locale } }) {
  const localeData = await getDictionary(locale);

  const {
    hero,
    aboutMe,
    courses,
    format,
    aboutSchool,
    applyButtonLabel,
    formData,
    reviews,
    socialMedia,
    orientedClient,
    advertise,
    navBar,
  } = localeData;

  const links = navBar.map(e => e.link);
  const id = {
    about: links[0],
    school: links[1],
    forWhom: links[2],
    format: links[3],
    courses: links[4],
    reviews: links[5],
  };

  return (
    <>
      <Hero data={hero} icons={socialMedia} />
      <AboutMeSection data={aboutMe} id={id.about} />
      <AboutSchool aboutSchool={aboutSchool} id={id.school} />
      <ForWhomSection data={orientedClient} id={id.forWhom} />
      <FormatSection
        data={format}
        btnText={applyButtonLabel}
        formData={formData}
        id={id.format}
      />
      <Courses data={courses} id={id.courses} locale={locale} />
      <Comments data={reviews} id={id.reviews} />
      <FreeClass
        data={advertise}
        btnLabel={applyButtonLabel}
        altText={hero.title}
        formData={formData}
      />
    </>
  );
}
