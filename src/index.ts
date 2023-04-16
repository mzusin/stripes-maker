import * as path from 'path';
import fse from 'fs-extra';
import { getRootFolder, getVersion } from './main/io.js';
import { createStripesSVG } from './main/stripes-provider.js';
import { ISettings } from './interfaces';
import { getSVGAsString } from 'mz-svg';
import { saveSVG } from 'mz-svg';

/**
 * Entry Point
 */
const init = async () => {

    const args = process.argv.slice(2);
    let configPath = args.length > 0 ? args[0] : 'stripes.config.js';
    const configAbsPath = path.join(getRootFolder(), `../${ configPath }`);
    const { default: config }  = await import(configAbsPath);

    console.log(`Stripes Maker v${ getVersion() }`);
    console.log(`Config: ${ configAbsPath }`);
    console.log(config);

    // create the main SVG with stripes ---------
    const settings = config as ISettings;
    const $svg = createStripesSVG(settings);

    // generate a final svg string ------------
    const svgString = getSVGAsString($svg);

    // save the SVG file ------------
    const targetFilePath = path.join(getRootFolder(), `../${ settings.out }`);
    fse.ensureFileSync(targetFilePath);
    saveSVG({
        absOutFilePath: targetFilePath,
        svgString,
    });

    // all is finished ----------------
    console.log(`Created ${ targetFilePath }`);
};

init();