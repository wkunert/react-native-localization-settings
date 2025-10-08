"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLanguage = getLanguage;
exports.getLanguageAsync = getLanguageAsync;
exports.setLanguage = setLanguage;
var _reactNative = require("react-native");
const LINKING_ERROR = `The package 'react-native-localization-settings' doesn't seem to be linked. Make sure: \n\n` + _reactNative.Platform.select({
  ios: "- You have run 'pod install'\n",
  default: ''
}) + '- You rebuilt the app after installing the package\n' + '- You are not using Expo Go\n';

// @ts-expect-error
const isTurboModuleEnabled = global.__turboModuleProxy != null;
const LocalizationSettingsModule = isTurboModuleEnabled ? require('./NativeLocalizationSettings').default : _reactNative.NativeModules.LocalizationSettings;
const LocalizationSettings = LocalizationSettingsModule ? LocalizationSettingsModule : new Proxy({}, {
  get() {
    throw new Error(LINKING_ERROR);
  }
});

/**
 * Get language (sync)
 * @returns Language in IETF BCP 47 format (like 'en-US')
 * @example
 * console.log(getLanguage())
 */
function getLanguage() {
  return LocalizationSettings.getConstants().language.split('_')[0];
}

/**
 * Get language (async)
 * @param fallback - fallback language
 * @returns Promise with Language in IETF BCP 47 format (like 'en-US')
 * @example
 * getLanguageAsync().then(console.log)
 */
function getLanguageAsync(fallback) {
  return LocalizationSettings.getLanguage().then(res => res.split('_')).then(res => {
    if (res[0]) {
      return res[0];
    }
    if (fallback) {
      return fallback;
    }
    throw new Error('Invalid language format');
  });
}

/**
 * Set language
 * @param language - locale string
 * @example
 * Usage:
 * setLanguage('en-US')
 *
 * Preferred format:
 * IETF BCP 47 format - "en-US"
 *
 * Other:
 * ISO 639-1 format - "en"
 *
 */
function setLanguage(language) {
  LocalizationSettings.setLanguage(language);
}
//# sourceMappingURL=api.js.map