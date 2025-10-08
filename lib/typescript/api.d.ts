/**
 * Get language (sync)
 * @returns Language in IETF BCP 47 format (like 'en-US')
 * @example
 * console.log(getLanguage())
 */
export declare function getLanguage(): string;
/**
 * Get language (async)
 * @param fallback - fallback language
 * @returns Promise with Language in IETF BCP 47 format (like 'en-US')
 * @example
 * getLanguageAsync().then(console.log)
 */
export declare function getLanguageAsync(fallback?: string): Promise<string>;
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
export declare function setLanguage(language: string): void;
//# sourceMappingURL=api.d.ts.map