import { AnimationTypeEnum, ISettings, IStripe } from '../interfaces.js';
import {
    createAnimate,
    createAnimateTransform,
    createDefs, createGroup,
    createPattern,
    createRect,
    createSVG,
    prependOnce
} from 'mz-svg';
import { newId } from 'mz-math';
import jsdom from 'jsdom';
const { JSDOM } = jsdom;

const getStripes = (stripes: IStripe[], doc: Document) : SVGRectElement[] => {
    const res: SVGRectElement[] = [];
    let sum = 0;

    for(let i=0; i<stripes.length; i++){
        const { color, size } = stripes[i];

        const $rect = createRect({
            x: 0,
            y: sum,
            width: '100%',
            height: size,
            fill: color,
            document: doc,
        });

        res.push($rect);

        sum += size;
    }

    return res;
};

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

    const size = props.stripes.reduce((prev, stripe) => prev + stripe.size, 0);
    const isRotateAnimation =
        props.animationType === AnimationTypeEnum.RotateClockWise ||
        props.animationType === AnimationTypeEnum.RotationCounterClockwise;

    // generate pattern and its content ---------------------------
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

    if(isRotateAnimation){
        const $animateTransform = createAnimateTransform({
            attributeName: 'patternTransform',
            begin: '0s',
            dur: `${ props?.animationDuration || 1 }s`,
            type: 'rotate',
            from: props.animationType === AnimationTypeEnum.RotateClockWise ? '0' : `360`,
            to: props.animationType === AnimationTypeEnum.RotateClockWise ? `360` : '0',
            repeatCount: 'indefinite',
            fill: 'freeze',
            document: doc,
        });
        $pattern.append($animateTransform);
    }

    if(props.animationType === AnimationTypeEnum.Linear){
        const $animate = createAnimate({
            attributeName: 'y',
            begin: '0s',
            dur: `${ props?.animationDuration || 1 }s`,
            from: '0%',
            to: '100%',
            repeatCount: 'indefinite',
            fill: 'freeze',
            document: doc,
        });
        $pattern.append($animate);
    }

    const $group = createGroup({
        x: 0,
        y: 0,
        width: '100%',
        height: size,
        document: doc,
    });
    $pattern.append($group);

    const $stripes = getStripes(props.stripes, doc);
    for(const $stripe of $stripes){
        $group.append($stripe);
    }

    // create stripes container -----------------
    const $rect = createRect({
        x: 0,
        y: 0,
        width: '100%',
        height: '100%',
        fill: `url(#${ patternID })`,
        document: doc,
    });
    $svg.append($rect);

    return $svg;
};