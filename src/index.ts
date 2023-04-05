import { Command } from 'commander'; // https://github.com/tj/commander.js
import * as path from 'path';
import { getRootFolder, getVersion } from './io.js';
import chalk from 'chalk';

const perform = (
    out: string,
    width: number,
    height: number,
    bgColor: string,
    lineColor: string,
    lineWidth: number,
    lineDistance: number,
    lineRotation: number
) => {

    console.log(chalk.blue('Stripes Maker'));
    console.log(`- Output file = ${ chalk.bold(out) } 
- SVG width = ${ chalk.bold(width) }   
- SVG height = ${ chalk.bold(height) }  
- SVG Background color = ${ chalk.bold(bgColor) } 
- Line color = ${ chalk.bold(lineColor) } 
- Line width = ${ chalk.bold(lineWidth) } 
- Line distance = ${ chalk.bold(lineDistance) } 
- Line rotation = ${ chalk.bold(lineRotation) }`);

    /*
    // create svg
    const { $svg, document } = initSVGNode(width, height);

    const $g = addSVGBackgroundStripes(
        document,
        $svg,
        bgColor, width, height,
        'main-pattern',
        lineWidth, lineDistance, lineColor, lineRotation
    );

    $svg.append($g);

    // generate a final svg string
    const svgString = '<?xml version="1.0" encoding="UTF-8"?>\n' + $svg.outerHTML;

    // save the SVG file
    saveAbsFile(svgString, out);

    // done message
    console.log(chalk.green('Done.'));*/
};

const init = () => {

    // configure the CLI interface
    const program = new Command();

    program
        .name('stripes-maker')
        .description('Node.js stripe pattern generator and maker. It can create multi-line static and animated SVG stripe patterns.')
        .version(getVersion());

    // create -h
    program.command('create')
        .description('Create Stripes.')
        .argument('out', 'The path to the result file.')
        .option('-w, --width <value>', 'Width')
        .option('-h, --height <value>', 'Height')
        .option('-bgc, --bg-color <value>', 'Background color')
        .option('-lc, --line-color <value>', 'Line color')
        .option('-lw, --line-width <value>', 'Line width')
        .option('-ld, --line-distance <value>', 'The distance between lines')
        .option('-lr, --line-rotation <value>', 'Lines rotation')
        .action((out, options) => {

            const width = Number(options.width) || 100;
            const height = Number(options.height) || 100;
            const bgColor = options.bgColor || '#fff';
            const lineColor = options.lineColor || '#111';
            const lineWidth = Number(options.lineWidth) || 10;
            const lineDistance = Number(options.lineDistance) || 5;
            const lineRotation = Number(options.lineRotation) || 0;

            const targetFilePath = path.join(getRootFolder(), out);

            // perform the main task
            perform(
                targetFilePath,
                width,
                height,
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