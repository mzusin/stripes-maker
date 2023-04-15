import path from 'path.js';
import fse from 'fs-extra';
import chalk from 'chalk';
import { Command } from 'commander'; // https://github.com/tj/commander.js
import { initSVGNode } from './svg-provider-node.js';
import { addSVGBackgroundStripes } from './bg-svg-stripes.js';

// https://github.com/tj/commander.js#quick-start

/**
 * Usage example:
 * create test.svg -w 300 -h 300 -bgc '#fff' -lc '#6573ab' -lw 35 -ld 35 -lr 45
 */

/**
 * get the root folder (where the package.json is located)
 * https://stackoverflow.com/questions/10265798/determine-project-root-from-a-running-node-js-application
 * @return {string}
 */
export const getRootFolder = () => {
    return process.cwd();
};

/**
 * save file as it (without calculating the folder)
 * @param {string} content
 * @param {string} absFilePath
 */
export const saveAbsFile = (content, absFilePath) => {
    fse.ensureFileSync(absFilePath);
    fse.writeFileSync(absFilePath, content, 'utf8');
};


/**
 * perform the main task
 * @param {string} out
 * @param {number} svgWidth
 * @param {number} svgHeight
 * @param {string} bgColor
 * @param {string} lineColor
 * @param {number} lineWidth
 * @param {number} lineDistance
 * @param {number} lineRotation
 */
const perform = (
    out,
    svgWidth,
    svgHeight,
    bgColor,
    lineColor,
    lineWidth,
    lineDistance,
    lineRotation
) => {

    console.log(chalk.blue('Stripes SVG Background Maker'));
    console.log(`- Output file = ${ chalk.bold(out) } 
- SVG width = ${ chalk.bold(svgWidth) }   
- SVG height = ${ chalk.bold(svgHeight) }  
- SVG Background color = ${ chalk.bold(bgColor) } 
- Line color = ${ chalk.bold(lineColor) } 
- Line width = ${ chalk.bold(lineWidth) } 
- Line distance = ${ chalk.bold(lineDistance) } 
- Line rotation = ${ chalk.bold(lineRotation) }`);
    // create svg
    const { $svg, document } = initSVGNode(svgWidth, svgHeight);

    const $g = addSVGBackgroundStripes(
        document,
        $svg,
        bgColor, svgWidth, svgHeight,
        'main-pattern',
        lineWidth, lineDistance, lineColor, lineRotation
    );

    $svg.append($g);

    // generate a final svg string
    const svgString = '<?xml version="1.0" encoding="UTF-8"?>\n' + $svg.outerHTML;

    // save the SVG file
    saveAbsFile(svgString, out);

    // done message
    console.log(chalk.green('Done.'));
};

/**
 * entry point
 */
export const init = () => {

    // configure the CLI interface
    const program = new Command();

    program
        .name('svg-stripes-maker')
        .description('Stripes SVG Background Maker')
        .version('1.0.0');

    // create -h
    program.command('create')
        .description('Create a SVG stripes background.')
        .argument('out', 'The path to the result SVG file.')
        .option('-w, --svg-width <value>', 'SVG width')
        .option('-h, --svg-height <value>', 'SVG height')
        .option('-bgc, --bg-color <value>', 'SVG background color')
        .option('-lc, --line-color <value>', 'Line color')
        .option('-lw, --line-width <value>', 'Line width')
        .option('-ld, --line-distance <value>', 'The distance between lines')
        .option('-lr, --line-rotation <value>', 'Lines rotation')
        .action((out, options) => {

            const svgWidth = Number(options.svgWidth) || 100;
            const svgHeight = Number(options.svgHeight) || 100;
            const bgColor = options.bgColor || '#fff';
            const lineColor = options.lineColor || '#111';
            const lineWidth = Number(options.lineWidth) || 10;
            const lineDistance = Number(options.lineDistance) || 5;
            const lineRotation = Number(options.lineRotation) || 0;

            const targetFilePath = path.join(getRootFolder(), out);

            // perform the main task
            perform(
                targetFilePath,
                svgWidth,
                svgHeight,
                bgColor,
                lineColor,
                lineWidth,
                lineDistance,
                lineRotation
            );
        });

    program.parse(process.argv);
};

init();