import { GameObject } from './game_object.js';
import { Vector2 } from './vector_2.js';

export class Container extends GameObject {

    constructor() {
        super(new Vector2(0, 0), 'Group');
    }

    /**
     * @param {number} elapsedMs
     */
    update(elapsedMs) {
        this.updateChildren(elapsedMs);
    }

    /**
     * @param {import('./drawing_context.js').DrawingContext} drawingContext
     */
    draw(drawingContext) {
        this.drawChildren(drawingContext);
    }
}
