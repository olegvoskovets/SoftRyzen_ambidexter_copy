const dictionaries = {
  en: () => import('../../dictionaries/en.json').then(r => r.default),
  uk: () => import('../../dictionaries/uk.json').then(r => r.default),
};

export const getDictionary = async locale => {
  return await dictionaries[locale]();
};
