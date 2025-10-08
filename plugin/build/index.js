"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const android_1 = require("./android");
const ios_1 = require("./ios");
const withReactNativeLocalizationSettings = (config, { defaultLanguage, languages = [] } = {}) => {
    config = (0, android_1.withAndroidLanguages)(config, { languages });
    config = (0, ios_1.withIosLanguages)(config, { defaultLanguage, languages });
    return config;
};
exports.default = withReactNativeLocalizationSettings;
