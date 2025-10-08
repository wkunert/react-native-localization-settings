"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.withAndroidLanguages = void 0;
const config_plugins_1 = require("@expo/config-plugins");
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const withAndroidLanguages = (config, { languages = [] } = {}) => {
    config = (0, config_plugins_1.withAndroidManifest)(config, (config) => {
        const mainApplication = config_plugins_1.AndroidConfig.Manifest.getMainApplicationOrThrow(config.modResults);
        // Add the `android:localeConfig` attribute to the `<application>` tag
        mainApplication.$['android:localeConfig'] = '@xml/locales_config';
        const localesConfigPath = path_1.default.join(config.modRequest.platformProjectRoot, 'app/src/main/res/xml/locales_config.xml');
        // Ensure the `res/xml` directory exists
        fs_1.default.mkdirSync(path_1.default.dirname(localesConfigPath), { recursive: true });
        // Prepare locales_config.xml content
        const xmlContent = `<?xml version="1.0" encoding="utf-8"?>
<locale-config xmlns:android="http://schemas.android.com/apk/res/android">
  ${languages.map((lang) => `<locale android:name="${lang}" />`).join('\n  ')}
</locale-config>`;
        // Write the `res/xml/locales_config.xml` file
        fs_1.default.writeFileSync(localesConfigPath, xmlContent);
        return config;
    });
    return config;
};
exports.withAndroidLanguages = withAndroidLanguages;
