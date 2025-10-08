interface I18nLanguageDetectorModule {
    type: 'languageDetector';
    init?(): void;
    detect(): string | readonly string[] | undefined;
    cacheUserLanguage?(lang: string): void;
}
interface I18nLanguageDetectorAsyncModule {
    type: 'languageDetector';
    async: true;
    init?(): void;
    detect(callback: (lng: string | readonly string[] | undefined) => void | undefined): void | Promise<string | readonly string[] | undefined>;
    cacheUserLanguage?(lng: string): void | Promise<void>;
}
type LanguageDetectorOptions = {
    cacheCurrentLanguage?: boolean;
    async?: boolean;
};
/**
 * @deprecated Use createLanguageDetector instead
 */
export declare const ReactNativeLanguageDetector: I18nLanguageDetectorModule;
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
export declare const createLanguageDetector: (options?: LanguageDetectorOptions) => I18nLanguageDetectorModule | I18nLanguageDetectorAsyncModule;
export {};
//# sourceMappingURL=languageDetector.d.ts.map