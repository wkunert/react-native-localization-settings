"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withIosLanguages = void 0;
const config_plugins_1 = require("@expo/config-plugins");
const generateLocalizableContent = (languages, defaultLanguage) => `{
  "sourceLanguage" : "${defaultLanguage || languages[0]}",
  "strings" : {
    "react-native-localization-settings" : {
      "extractionState" : "manual",
      "localizations" : {
        ${languages
    .map((lang) => `"${lang}" : {"stringUnit" : {"state" : "translated","value" : ""}},`)
    .join('\n        ')}
      }
    }
  },
  "version" : "1.0"
}`;
const withIosLanguages = (config, { defaultLanguage, languages = [] } = {}) => {
    config = (0, config_plugins_1.withXcodeProject)(config, (config) => {
        const project = config.modResults;
        const projectObject = project.pbxProjectSection()[project.getFirstProject().uuid];
        if (projectObject) {
            // Add known regions to the project
            projectObject.knownRegions = languages;
            // Write the Localizable.xcstrings file
            config_plugins_1.IOSConfig.XcodeProjectFile.createBuildSourceFile({
                project,
                nativeProjectRoot: config.modRequest.platformProjectRoot,
                filePath: 'Localizable.xcstrings',
                fileContents: generateLocalizableContent(languages, defaultLanguage),
                overwrite: true,
            });
        }
        return config;
    });
    return config;
};
exports.withIosLanguages = withIosLanguages;
