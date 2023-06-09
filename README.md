# ミ☆ Stripes Maker ☆彡

![GitHub package.json version](https://img.shields.io/github/package-json/v/mzusin/stripes-maker)
[![NPM](https://img.shields.io/badge/npm-stripes_maker-brightgreen)](https://www.npmjs.com/package/stripes-maker)

Node.js stripe pattern generator and maker. It can create multi-line static and animated SVG stripe patterns.

![example.svg](https://raw.githubusercontent.com/mzusin/stripes-maker/main/img/example.svg)

## Table of Contents
- [How to use](#how-to-use)
- [stripes.config.js](#stripesconfigjs)
- [Animation types](#animation-types)
- [How to run from another folder](#how-to-run-from-another-folder)

## How to use
1. Install the module using npm: `npm install stripes-maker`
2. Edit [stripes.config.js](https://github.com/mzusin/stripes-maker/blob/main/stripes.config.js) file.
3. Run `npm start`
4. The output SVG file will be in the **'./out/'** folder.

## stripes.config.js
This is an example stripes configuration file that will create an SVG file with four stripes.

```js
const config = {
    out: './out/example.svg', // the pass to the output file
    width: 300, // SVG width
    height: 300, // SVG height
    bgColor: '#fff', // SVG background color
    lineRotation: 45, // stripes rotation angle in degrees

    // optional animation -----------
    animationType: 4, // linear animation - see types list below
    animationDuration: 30, // seconds
    
    // the list of stripes ----------
    stripes: [
        {
            color: '#505050',
            size: 20,
        },
        {
            color: '#92CBFA',
            size: 10,
        },
        {
            color: '#AB3C83',
            size: 20,
        },
        {
            color: '#ffffff',
            size: 10,
        }
    ]
};
```

## Animation Types
There are four possible types of animation that can be specified in the configuration file.

- NoAnimation = 1
- RotateClockWise = 2
- RotationCounterClockwise = 3
- Linear = 4

## How to run from another folder

The script can also be run globally using the following command:

```cmd
stripes-maker
```

You can also pass another configuration file:

```cmd
stripes-maker another.config.js
```
