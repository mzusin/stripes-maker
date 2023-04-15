import { ISettings } from '../interfaces';
import { createDefs, createPattern, createRect, createSVG, prependOnce } from 'mz-svg';
import { newId } from 'mz-math';
import jsdom from 'jsdom';
const { JSDOM } = jsdom;

export const createStripesSVG = (props: ISettings) => {

    // create JSDOM document
    const dom = new JSDOM(`<!DOCTYPE html><head><title>Doc</title></head><body></body>`);
    const doc = dom.window.document;

    // create SVG document
    const $svg = createSVG({
        width: props.width,
        height: props.height,
        document: doc,
    });

    // create <defs> element
    const $defs = createDefs({
        document: doc,
    });
    prependOnce($svg, $defs);

    // create stripes pattern and add it to <defs> ------------
    const patternID = `pattern-${ newId() }`;

    const size = 0;

    const $pattern = createPattern({
        id: patternID,
        patternTransform: `rotate(${ props.lineRotation })`,
        width: '100%',
        height: size,
        x: 0,
        y: 0,
        patternUnits: 'userSpaceOnUse',
        document: doc,
    });
    $defs.append($pattern);

    // create stripes container -----------------
    const $rect = createRect({
        x: 0,
        y: 0,
        width: '100%',
        height: '100%',
        filter: `url(#${ patternID })`,
        document: doc,
    });
    $svg.append($rect);

    return $svg;
};