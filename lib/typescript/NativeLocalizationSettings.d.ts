import type { TurboModule } from 'react-native';
export interface Spec extends TurboModule {
    getLanguage(): Promise<string>;
    setLanguage(lang: string): void;
    getConstants(): {
        language: string;
    };
}
declare const _default: Spec;
export default _default;
//# sourceMappingURL=NativeLocalizationSettings.d.ts.map