import * as path from 'path';
import chalk from 'chalk';
import { Command } from 'commander'; // https://github.com/tj/commander.js
import { getRootFolder, getVersion } from './main/io.js';
import { createStripesSVG } from './main/stripes-provider.js';
import { ISettings } from './interfaces';
import { getSVGAsString } from 'mz-svg';
import { saveSVG } from 'mz-svg';
import config from '../stripes.config.js';

const perform = () => {

/*    console.log(chalk.blue('Stripes Maker'));
    console.log(`- Output file = ${ chalk.bold(props.out) } 
- SVG width = ${ chalk.bold(props.width) }   
- SVG height = ${ chalk.bold(props.height) }  
- SVG Background color = ${ chalk.bold(props.bgColor) } 
- Line color = ${ chalk.bold(props.lineColor) } 
- Line width = ${ chalk.bold(props.lineWidth) } 
- Line distance = ${ chalk.bold(props.lineDistance) } 
- Line rotation = ${ chalk.bold(props.lineRotation) }`);*/

    // create the main SVG with stripes
    const settings = config as ISettings;
    const $svg = createStripesSVG(settings);

    // generate a final svg string
    const svgString = getSVGAsString($svg);
    console.log(svgString)

    // save the SVG file ------------
    const targetFilePath = path.join(getRootFolder(), settings.out);
    saveSVG({
        absOutFilePath: targetFilePath,
        svgString,
    });

    // done message ----------------
    console.log(chalk.green('Done.'));
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

            // perform the main task ------------------------------------
            perform();

            /*
            {
                out: targetFilePath,
                width,
                height,
                bgColor,
                lineColor,
                lineWidth,
                lineDistance,
                lineRotation
            }
             */
        });

    program.parse(process.argv);
};

init();