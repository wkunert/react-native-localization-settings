"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createLanguageDetector = exports.ReactNativeLanguageDetector = void 0;
var _api = require("./api");
/**
 * @deprecated Use createLanguageDetector instead
 */
const ReactNativeLanguageDetector = {
  type: 'languageDetector',
  init: () => {},
  detect: () => (0, _api.getLanguage)(),
  cacheUserLanguage: lang => (0, _api.setLanguage)(lang)
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
exports.ReactNativeLanguageDetector = ReactNativeLanguageDetector;
const createLanguageDetector = options => {
  const {
    cacheCurrentLanguage = false
  } = options || {};
  let skipNextCache = false;
  let languageDetector = {
    type: 'languageDetector',
    init: () => {
      skipNextCache = true;
    },
    detect: () => (0, _api.getLanguage)(),
    cacheUserLanguage: lang => {
      if (cacheCurrentLanguage === false && skipNextCache) {
        skipNextCache = false;
        return;
      }
      (0, _api.setLanguage)(lang);
    }
  };
  if (options !== null && options !== void 0 && options.async) {
    languageDetector = {
      ...languageDetector,
      async: true,
      detect: callback => {
        (0, _api.getLanguageAsync)().then(callback);
      }
    };
  }
  return languageDetector;
};
exports.createLanguageDetector = createLanguageDetector;
//# sourceMappingURL=languageDetector.js.map