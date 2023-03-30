import { setDecimalPlaces } from './math-provider.js';

export const SVG_NAMESPACE = 'http://www.w3.org/2000/svg';

/**
 * init SVG in browser environment ---> return svg element and document element
 * @param {number} width
 * @param {number} height
 * @return { document: Document, $svg: SVGSVGElement }
 */
export const initSVG = (width, height) => {
    const html =
        `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SVG Doc</title>
</head>
<body>
    
</body>
</html>`;

    const $svg = document.createElementNS(SVG_NAMESPACE, 'svg');

    $svg.setAttributeNS('http://www.w3.org/2000/xmlns/', 'xmlns', 'http://www.w3.org/2000/svg');
    // $svg.setAttributeNS('http://www.w3.org/2000/xmlns/', 'xmlns:xlink', 'http://www.w3.org/1999/xlink');
    // $svg.setAttributeNS('http://www.w3.org/XML/1998/namespace', 'xml:space', 'preserve');

    $svg.setAttribute('width', width.toString());
    $svg.setAttribute('height', height.toString());
    $svg.setAttribute('viewBox', `0 0 ${ width } ${ height }`);

    return {
        document,
        $svg,
    };
};

/**
 * draw a rectangle
 * @param {Document} svgDoc
 * @param {number} x
 * @param {number} y
 * @param {number} width
 * @param {number} height
 * @param {string=} strokeColor
 * @param {number=} strokeWidth
 * @param {string=} bgColor
 * @param {number=} rx
 * @param {number=} ry
 */
export const drawRect = (
    svgDoc,
    x, y, width, height,
    strokeColor, strokeWidth, bgColor, rx, ry
) => {

    const $rect = svgDoc.createElementNS(SVG_NAMESPACE, 'rect');

    $rect.setAttribute('x', x.toString());
    $rect.setAttribute('y', y.toString());

    $rect.setAttribute('width', width.toString());
    $rect.setAttribute('height', height.toString());

    if(strokeColor){
        $rect.setAttribute('stroke', strokeColor);
    }

    if(strokeWidth) {
        $rect.setAttribute('stroke-width', strokeWidth.toString());
    }

    if(bgColor) {
        $rect.setAttribute('fill', bgColor);
    }

    if(rx){
        $rect.setAttribute('rx', rx.toString());
    }

    if(ry){
        $rect.setAttribute('ry', ry.toString());
    }

    return $rect;
};

/**
 * draw a circle
 * @param {Document} svgDoc
 * @param {number} centerX
 * @param {number} centerY
 * @param {number} radius
 * @param {string} strokeColor
 * @param {number} strokeWidth
 * @param {string} bgColor
 * @return {SVGCircleElement}
 */
export const drawCircle = (
    svgDoc,
    centerX, centerY, radius,
    strokeColor, strokeWidth, bgColor
) => {

    const $circle = svgDoc.createElementNS(SVG_NAMESPACE, 'circle');

    $circle.setAttribute('cx', centerX.toString());
    $circle.setAttribute('cy', centerY.toString());
    $circle.setAttribute('r', radius.toString());

    if(strokeColor){
        $circle.setAttribute('stroke', strokeColor);
    }

    if(strokeWidth) {
        $circle.setAttribute('stroke-width', strokeWidth.toString());
    }

    if(bgColor) {
        $circle.setAttribute('fill', bgColor);
    }

    return $circle;
};

/**
 * draw a circle shadow using mask
 * @param {Document} svgDoc
 * @param {SVGSVGElement} $svg
 * @param {number} centerX
 * @param {number} centerY
 * @param {number} radius
 * @param {number} maskWidth
 * @param {boolean=} isLeft
 * @param {number=} opacity
 * @param {string=} maskId
 * @return {SVGCircleElement}
 */
export const drawCircleShadow = (
    svgDoc, $svg,
    centerX, centerY, radius, maskWidth,
    isLeft = true,
    opacity = 0.1,
    maskId = 'circle-shadow-mask'
) => {

    let $defs = $svg.querySelector('defs');

    if(!$defs){
        $defs = svgDoc.createElementNS(SVG_NAMESPACE, 'defs');
        $svg.prepend($defs);
    }

    const $maskWhiteCircle = drawCircle(
        svgDoc,
        centerX, centerY, radius,
        null, null, '#fff'
    );

    if(!isLeft){
        maskWidth = -maskWidth;
    }

    const $maskBlackCircle = drawCircle(
        svgDoc,
        centerX + maskWidth, centerY, radius,
        null, null, '#000'
    );

    const $mask = svgDoc.createElementNS(SVG_NAMESPACE, 'mask');
    $mask.id = maskId;

    // everything under a black pixel will be invisible
    $mask.innerHTML = $maskWhiteCircle.outerHTML + $maskBlackCircle.outerHTML;

    $defs.append($mask);

    const $circle = drawCircle(
        svgDoc,
        centerX, centerY, radius,
        null, null, `rgba(0, 0, 0, ${ opacity })`
    );

    $circle.setAttribute('mask', `url(#${ maskId })`);

    return $circle;
};

/**
 * draw an ellipse
 * @param {Document} svgDoc
 * @param {number} centerX
 * @param {number} centerY
 * @param {number} radiusX
 * @param {number} radiusY
 * @param {string} strokeColor
 * @param {boolean=} strokeWidth
 * @param {string=} bgColor
 * @return {SVGEllipseElement}
 */
export const drawEllipse = (
    svgDoc,
    centerX, centerY, radiusX, radiusY,
    strokeColor, strokeWidth, bgColor
) => {

    const $ellipse = svgDoc.createElementNS(SVG_NAMESPACE, 'ellipse');

    $ellipse.setAttribute('cx', centerX.toString());
    $ellipse.setAttribute('cy', centerY.toString());
    $ellipse.setAttribute('rx', radiusX.toString());
    $ellipse.setAttribute('ry', radiusY.toString());

    if(strokeColor){
        $ellipse.setAttribute('stroke', strokeColor);
    }

    if(strokeWidth) {
        $ellipse.setAttribute('stroke-width', strokeWidth.toString());
    }

    if(bgColor) {
        $ellipse.setAttribute('fill', bgColor);
    }

    return $ellipse;
};

/**
 * draw a pattern
 * @param {Document} svgDoc
 * @param {SVGSVGElement} $svg
 * @param {string} patternId
 * @param {string} patternHTML
 * @param {string=} tileWidth
 * @param {string=} tileHeight
 * @param {string=} transform
 * @return {SVGPatternElement}
 */
export const addPattern = (
    svgDoc,
    $svg,
    patternId,
    patternHTML,
    tileWidth,
    tileHeight,
    transform) => {

    let $defs = $svg.querySelector('defs');
    if(!$defs){
        $defs = svgDoc.createElementNS(SVG_NAMESPACE, 'defs');
        $svg.prepend($defs);
    }

    const $pattern = svgDoc.createElementNS(SVG_NAMESPACE, 'pattern');
    $pattern.id = patternId;
    //$pattern.setAttribute('viewBox', '0,0,10,10');

    if(tileWidth){
        $pattern.setAttribute('width', tileWidth);
    }

    if(tileHeight){
        $pattern.setAttribute('height', tileHeight);
    }

    if(transform){
        $pattern.setAttribute('patternTransform', transform);
    }

    $pattern.innerHTML = patternHTML; // '<polygon points="0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"/>';
    $pattern.setAttribute('patternUnits', 'userSpaceOnUse');

    // (none| xMinYMin| xMidYMin| xMaxYMin| xMinYMid| xMidYMid| xMaxYMid| xMinYMax| xMidYMax| xMaxYMax) (meet|slice)
    // Default value: xMidYMid meet;
    // $pattern.setAttribute('preserveAspectRatio', 'xMidYMid slice');

    $defs.append($pattern);
    return $pattern;
};

/**
 * draw a line
 * @param {Document} svgDoc
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @param {string} strokeColor
 * @param {number} strokeWidth
 * @param {string=} strokeLineCap
 * @return {SVGLineElement}
 */
export const drawLine = (
    svgDoc,
    x1, y1, x2, y2,
    strokeColor, strokeWidth, strokeLineCap = 'round'
) => {

    const $line = svgDoc.createElementNS(SVG_NAMESPACE, 'line');

    $line.setAttribute('x1', x1.toString());
    $line.setAttribute('y1', y1.toString());
    $line.setAttribute('x2', x2.toString());
    $line.setAttribute('y2', y2.toString());

    if(strokeColor){
        $line.setAttribute('stroke', strokeColor);
    }

    if(strokeWidth) {
        $line.setAttribute('stroke-width', strokeWidth.toString());
    }

    if(strokeLineCap) {
        // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-linecap
        $line.setAttribute('stroke-linecap', strokeLineCap);
    }

    return $line;
};

/**
 * draw a parabola
 * @param {Document} svgDoc
 * @param {number} startX
 * @param {number} startY
 * @param {number} endX
 * @param {number} endY
 * @param {number} midY
 * @param {string} strokeColor
 * @param {number} strokeWidth
 * @param {string=} strokeLineCap
 * @return {SVGPathElement}
 */
export const drawParabola = (
    svgDoc,
    startX, startY,
    endX, endY,
    midY,
    strokeColor, strokeWidth, strokeLineCap = 'round'
) => {

    const $path = svgDoc.createElementNS(SVG_NAMESPACE, 'path');
    const xLengthHalf = (endX - startX) / 2;
    const midX = setDecimalPlaces(startX + xLengthHalf - 2, 2);

    //$path.setAttribute('d', `M ${ startX },${ startY } Q ${ midX },${ midY} ${ endY },${ midY}`);
    $path.setAttribute('d', `M ${ startX },${ startY } Q ${ midX },${ midY} ${ endX },${ endY}`);

    $path.setAttribute('fill', 'none');

    if(strokeColor){
        $path.setAttribute('stroke', strokeColor);
    }

    if(strokeWidth) {
        $path.setAttribute('stroke-width', strokeWidth);
    }

    if(strokeLineCap) {
        // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-linecap
        $path.setAttribute('stroke-linecap', strokeLineCap);
    }

    return $path;
};

/**
 * draw a shadow stand
 * @param {Document} svgDoc
 * @param {SVGSVGElement} $svg
 * @param {number} centerX
 * @param {number} centerY
 * @param {number} radiusX
 * @param {number} radiusY
 * @param {string} bgColor
 * @param {string} blurId
 * @param {number} blurStrength
 * @return {SVGEllipseElement}
 */
export const drawShadowStand = (
    svgDoc, $svg,
    centerX, centerY, radiusX, radiusY, bgColor,
    blurId = 'shadow-stand-blur', blurStrength = 2.5
) => {
    let $defs = $svg.querySelector('defs');
    if(!$defs){
        $defs = svgDoc.createElementNS(SVG_NAMESPACE, 'defs');
        $svg.prepend($defs);
    }

    const $filter = svgDoc.createElementNS(SVG_NAMESPACE, 'filter');
    $filter.id = blurId;
    $filter.innerHTML = `<feGaussianBlur in="SourceGraphic" stdDeviation="${ blurStrength }" />`;

    $defs.append($filter);

    const $ellipse = drawEllipse(
        svgDoc,
        centerX, centerY, radiusX, radiusY,
        null, null, bgColor
    );

    $ellipse.setAttribute('filter', `url(#${ blurId })`);

    return $ellipse;
};

/**
 * draw a path
 * @param {Document} svgDoc
 * @param {string} d
 * @param {string} strokeColor
 * @param {number} strokeWidth
 * @param {string} bgColor
 * @return {SVGPathElement}
 */
export const drawPath = (
    svgDoc, d,
    strokeColor, strokeWidth, bgColor
) => {

    const $path = svgDoc.createElementNS(SVG_NAMESPACE, 'path');
    $path.setAttribute('d', d);

    if(strokeColor){
        $path.setAttribute('stroke', strokeColor);
    }

    if(strokeWidth) {
        $path.setAttribute('stroke-width', strokeWidth.toString());
    }

    if(bgColor) {
        $path.setAttribute('fill', bgColor);
    }

    return $path;
};