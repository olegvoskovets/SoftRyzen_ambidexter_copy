[<-- Back](./README.md)

## Locales

Support for different languages is implemented using the module

```bash
   import { i18n } from 'i18n';
```

Depending on the selected language, we refer to the "dictionaries" directory,
which contains our translator dictionaries

```bash
 const dictionaries = {
      en: () => import('../../dictionaries/en.json').then(rdefault),
      uk: () => import('../../dictionaries/uk.json').then(r => r.default),
      }

export const getDictionary = async locale => {
         return await dictionaries[locale]();
          };
```
