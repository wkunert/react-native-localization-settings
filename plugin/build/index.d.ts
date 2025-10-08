import { ConfigPlugin } from '@expo/config-plugins';
declare const withReactNativeLocalizationSettings: ConfigPlugin<{
    defaultLanguage?: string;
    languages?: string[];
}>;
export default withReactNativeLocalizationSettings;
