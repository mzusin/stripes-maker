import esbuild from 'esbuild';
import { settings } from './settings.js';
import esbuildWatchPlugin from './esbuild-plugins/esbuild-watch-plugin.js';
import { newId } from 'mz-math';
import fs from 'fs';
import path from 'path';
import fse from 'fs-extra';

/**
 * Create CSS & JS assets.
 */
const buildSAssets = () => {

    // delete old assets
    const assetsFolder = path.join(process.cwd(), './website/assets/');
    fse.emptyDirSync(assetsFolder);
    fse.ensureDirSync(assetsFolder);

    const id = newId();
    settings.outfile = `./website/assets/index.${ id }.js`;

    const args = process.argv.slice(2);
    const watch = args.length > 1 && args[1].trim().toLowerCase() === 'watch';

    if(watch){
        // ------------- watch ---------------
        (async () => {
            settings.plugins = [esbuildWatchPlugin];
            const ctx = await esbuild.context(settings);
            await ctx.watch();
            console.log('Watching...');
        })();
    }
    else{
        esbuild
            .build(settings)
            .then(result => {
                console.log('Done.');
            })
            .catch(() => process.exit(1));
    }

    return id;
};

/**
 * Create index.html
 */
const createWebsite = (id) => {

    // load template
    const templatePath = path.join(process.cwd(), './website/template/index.html');
    let template = fs.readFileSync(templatePath, 'utf8');

    // replace macros
    template = template.replaceAll('{% css %}', `/assets/index.${ id }.css`);
    template = template.replaceAll('{% js %}', `/assets/index.${ id }.js`);

    // save index.html
    const targetPath = path.join(process.cwd(), './website/index.html');
    fs.writeFileSync(targetPath, template, 'utf8');
};

const init = () => {
    const id = buildSAssets();
    createWebsite(id);
};

init();
