import { getLanguage, getLanguageAsync, setLanguage } from './api';
/**
 * @deprecated Use createLanguageDetector instead
 */
export const ReactNativeLanguageDetector = {
  type: 'languageDetector',
  init: () => {},
  detect: () => getLanguage(),
  cacheUserLanguage: lang => setLanguage(lang)
};

/**
 * I18next language detector generator
 * @param options - detector options
 * @returns I18nLanguageDetectorModule | I18nLanguageDetectorAsyncModule
 * @example
 * Usage:
 * const languageDetector = createLanguageDetector(options);
 * i18next
 *   .use(languageDetector)
 *   .init({
 *     ...
 *   });
 */
export const createLanguageDetector = options => {
  const {
    cacheCurrentLanguage = false
  } = options || {};
  let skipNextCache = false;
  let languageDetector = {
    type: 'languageDetector',
    init: () => {
      skipNextCache = true;
    },
    detect: () => getLanguage(),
    cacheUserLanguage: lang => {
      if (cacheCurrentLanguage === false && skipNextCache) {
        skipNextCache = false;
        return;
      }
      setLanguage(lang);
    }
  };
  if (options !== null && options !== void 0 && options.async) {
    languageDetector = {
      ...languageDetector,
      async: true,
      detect: callback => {
        getLanguageAsync().then(callback);
      }
    };
  }
  return languageDetector;
};
//# sourceMappingURL=languageDetector.js.map