import { Vector2 } from './vector_2.js';

/**
 * @param {number} src
 * @param {number} dst
 * @param {number} amount
 * @returns {number}
 */
export function lerp(src, dst, amount) {
    return src + (dst - src) * amount;
}

/**
 * @param {Vector2} src
 * @param {Vector2} dst
 * @param {number} factor
 * @returns {Vector2}
 */
export function lerpVec2(src, dst, factor) {
    return new Vector2(lerp(src.x, dst.x, factor), lerp(src.y, dst.y, factor));
}

/**
 * @param {Vector2} vec
 * @returns {Vector2}
 */
export function floorVec2(vec) {
    return new Vector2(Math.floor(vec.x), Math.floor(vec.y));
}

/**
 * @param {number} value
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
export function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}

/**
 * @param {number} minInclusive
 * @param {number} maxExclusive
 * @returns {number}
 */
export function randomInt(minInclusive, maxExclusive) {
    return (
        Math.floor(Math.random() * (maxExclusive - minInclusive)) + minInclusive
    );
}

/**
 * @param {Vector2} coord
 * @param {number} matrixSize
 * @param {number} numRotations
 * @returns {Vector2}
 */
export function rotateQuadrMatrix2CoordClockwise(
    coord,
    matrixSize,
    numRotations
) {
    const rotatedCoord = coord.copy();
    for (let idx = 0; idx < numRotations; idx++) {
        const x = rotatedCoord.x;
        rotatedCoord.x = matrixSize - 1 - rotatedCoord.y;
        rotatedCoord.y = x;
    }
    return rotatedCoord;
}
