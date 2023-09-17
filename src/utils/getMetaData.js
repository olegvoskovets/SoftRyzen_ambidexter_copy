const metaDictionaries = {
  en: () => import('../../dictionaries/metaEn.json').then(r => r.default),
  uk: () => import('../../dictionaries/metaUk.json').then(r => r.default),
};

export const getMetaByLocale = async locale => {
  return await metaDictionaries[locale]();
};
