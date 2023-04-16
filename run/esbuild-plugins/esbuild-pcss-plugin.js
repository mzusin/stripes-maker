import fs from 'fs';
import postcss from 'postcss';
import autoprefixer from 'autoprefixer';
import uglifycss from 'uglifycss';
import tailwindcss from 'tailwindcss';

const esbuildPcssPlugin = {
    name: 'pcss',
    setup(build) {

        build.onLoad({ filter: /\.pcss$/ }, async (args) => {
            const source = await fs.promises.readFile(args.path, 'utf8');
            // const filename = path.relative(process.cwd(), args.path);

            const result = await postcss([
                tailwindcss({
                    content: [
                        "./website/src/**/*.{js,jsx,ts,tsx}",
                    ],
                    theme: {
                        fontFamily: {
                            'helvetica': ['Helvetica','system-ui','-apple-system','Segoe UI','Roboto','Helvetica Neue','Arial','Noto Sans','Liberation Sans','sans-serif','Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji'],
                            'open-sans': ['Open Sans','system-ui','-apple-system','Segoe UI','Roboto','Helvetica Neue','Arial','Noto Sans','Liberation Sans','sans-serif','Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji'],
                        },
                        extend: {

                        },
                    },
                    plugins: [],
                }),
                autoprefixer({
                    overrideBrowserslist: [
                        '>0.2%',
                        'not dead',
                        'not op_mini all',
                    ]
                })
            ]).process(source, {
                from: undefined,
            });

            result.warnings().forEach(function (warn) {
                console.warn(warn.toString());
            });

            const uglified = uglifycss.processString(result.css);

            return {
                contents: uglified,
                loader: 'css',
            };
        })
    },
};

export default esbuildPcssPlugin;