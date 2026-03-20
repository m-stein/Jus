import { removeItem } from './array.js';

export class GameObject {
    /**
     * @param {import('./vector_2.js').Vector2} position
     * @param {string} label
     */
    constructor(position, label) {
        this._label = label;
        this.position = position;

        /** @type {GameObject[]} */
        this._children = [];
    }

    /**
     * @param {GameObject} child
     * @param {number | null} index
     */
    addChild(child, index = null) {
        if (index === null) {
            this._children.push(child);
        } else {
            this._children[index] = child;
        }
    }

    /**
     * @param {((b: import('./game_object.js').GameObject) => void)} func
     */
    forEachChild(func) {
        for (let idx = this._children.length - 1; idx >= 0; idx--) {
            func(this._children[idx]);
        }
    }

    /**
     * @param {GameObject} child
     */
    removeChild(child) {
        removeItem(this._children, child);
    }

    /**
     * @param {number} elapsedMs
     */
    updateChildren(elapsedMs) {
        this._children.forEach((child) => {
            child.update(elapsedMs);
        });
    }

    /**
     * @param {import('./drawing_context.js').DrawingContext} drawingContext
     */
    drawChildren(drawingContext) {
        drawingContext.position.add(this.position);
        this._children.forEach((child) => {
            child.draw(drawingContext);
        });
        drawingContext.position.subtract(this.position);
    }

    /**
     * @abstract
     * @param {number} _elapsedMs
     */
    update(_elapsedMs) {
        throw new Error('Not implemented');
    }

    /**
     * @abstract
     * @param {import('./drawing_context.js').DrawingContext} _drawingContext
     */
    draw(_drawingContext) {
        throw new Error('Not implemented');
    }
}
