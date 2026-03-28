/**
 * @template {Record<string, number>} T
 * @typedef {{
 *   readonly [K in keyof T]: T[K]
 * } & {
 *   fromString(key: string): T[keyof T],
 * }} EnumType
 */

/**
 * @template {Record<string, number>} T
 * @param {T} baseEnum
 * @returns {EnumType<T>}
 */
export function createEnum(baseEnum) {
    const result = { ...baseEnum,
        /**
         * @param {string} key
         * @returns {T[keyof T]}
         */
        fromString(key) {
            const value =  baseEnum[/** @type {keyof T} */ (key)];
            if (value === undefined) {
                throw new Error(`'${key}' does not exist in the enum`);
            }
            return value;
        },
    };
    return /** @type {EnumType<T>} */ (Object.freeze(result));
}