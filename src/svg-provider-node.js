import { JSDOM } from 'jsdom';
import { SVG_NAMESPACE } from './svg-provider.js';

/**
 * init SVG ---> return svg element and document element
 * @param {number} width
 * @param {number} height
 * @return { document: Document, $svg: SVGSVGElement }
 */
export const initSVGNode = (width, height) => {
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

    const dom = new JSDOM(html);
    const { document } = dom.window;

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