import { addSVGBackgroundStripes } from './bg-svg-stripes.js';
import { initSVGNode } from './svg-provider-node.js';

const SVG_WIDTH = 281;
const SVG_HEIGHT = 281;
const BG_COLOR = '#00ff00';
const LINE_COLOR = '#000';
const LINE_WIDTH = 10;
const LINE_DISTANCE = 5;
const LINE_ROTATION = 45;

test('defs section created', () => {

    const { $svg, document } = initSVGNode(SVG_WIDTH, SVG_HEIGHT);

    const $g = addSVGBackgroundStripes(
        document,
        $svg,
        BG_COLOR, SVG_WIDTH, SVG_HEIGHT,
        'main-pattern',
        LINE_WIDTH, LINE_DISTANCE, LINE_COLOR, LINE_ROTATION
    );

    const $defs = $svg.querySelector('defs');

    expect($defs).toBeTruthy();
});

test('only one defs section created', () => {

    const { $svg, document } = initSVGNode(SVG_WIDTH, SVG_HEIGHT);

    addSVGBackgroundStripes(
        document,
        $svg,
        BG_COLOR, SVG_WIDTH, SVG_HEIGHT,
        'main-pattern',
        LINE_WIDTH, LINE_DISTANCE, LINE_COLOR, LINE_ROTATION
    );

    addSVGBackgroundStripes(
        document,
        $svg,
        BG_COLOR, SVG_WIDTH, SVG_HEIGHT,
        'main-pattern',
        LINE_WIDTH, LINE_DISTANCE, LINE_COLOR, LINE_ROTATION
    );

    const $defs = $svg.querySelectorAll('defs');

    expect($defs.length).toEqual(1);
});