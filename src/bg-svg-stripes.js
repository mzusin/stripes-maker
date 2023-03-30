import { addPattern, drawRect, SVG_NAMESPACE } from './svg-provider.js';

/**
 * create a <g></g> element with SVG stripes
 * @param {Document} document
 * @param {SVGSVGElement} $svg
 * @param {string} bgColor
 * @param {number} width
 * @param {number} height
 * @param {string} patternId
 * @param {number} lineWidth
 * @param {number} lineDistance
 * @param {string} lineColor
 * @param {number} lineRotation
 * @return {SVGGElement}
 */
export const addSVGBackgroundStripes = (
    document,
    $svg,
    bgColor,
    width,
    height,
    patternId,
    lineWidth,
    lineDistance,
    lineColor,
    lineRotation
) => {

    const $g = document.createElementNS(SVG_NAMESPACE, 'g');

    // create a background container
    const $bg = drawRect(document,0, 0, width, height, null, null, bgColor);
    $g.append($bg);

    /*
    pattern size by default is double of the shape --->

    shape-width               pattern-width
        w -------------------------- 2w
        ? -------------------------- (w + distance)

        ==>

        ? = (w + distance) * w / 2w = (w + distance) / 2
     */
    const size = (lineDistance + lineWidth) / 2;

    // line 'y' is a distance between pattern items, if it < size ----> that all the patterns are dashed
    const pattern = `<line x1="0" y1="0" x2="0" y2=${ size } stroke="${ lineColor }" stroke-width="${ lineWidth }"></line>`;

    // pattern height doesn't matter and can be any height
    addPattern(document, $svg, patternId, pattern, size.toString(), size.toString(), `rotate(${ lineRotation })`);

    // create a pattern container
    const $rect = drawRect(document,0, 0, width, height, null, null, `url(#${ patternId })`);
    $g.append($rect);

    return $g;
};