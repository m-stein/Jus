/**
 * @template T
 * @param {T} value
 * @returns {asserts value is NonNullable<T>}
 */
export function assertNotNull(value) {
    if (value == null) {
        throw new Error('Not-null assertion failed');
    }
}
