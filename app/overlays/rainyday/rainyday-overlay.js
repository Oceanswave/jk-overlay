
import {BaseOverlay} from '../base-overlay';

const RAINYDAY_NAME = 'Rainy Day';

export class RainyDayOverlay extends BaseOverlay {
    get name() {
        return RAINYDAY_NAME;
    }

    constructor() {
        super();
    }

    init() {

    }

    start() {
        var engine = new RainyDay({
            image: document.body
        });
        engine.rain([[1, 2, 8000]]);
        engine.rain([[3, 3, 0.88], [5, 5, 0.9], [6, 2, 1]], 100);
    }

    stop() {
        //hmm..
    }
}