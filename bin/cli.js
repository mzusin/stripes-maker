#!/usr/bin/env node

import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const absEsmPath = path.join(__dirname, '../node_modules/ts-node/dist/bin-esm.js');
const absSrcFile = path.join(__dirname, '../src/index.ts');

const cmd = spawn('node', [absEsmPath, absSrcFile, ...process.argv.slice(2)]);
cmd.stdout.on('data', function (data) {
    if(!data) return;
    console.log(data.toString());
});

cmd.stderr.on('data', function (data) {
    if(!data) return;
    console.log(data.toString());
});

/*
cmd.on('exit', function (code) {
    console.log('Done.');
});*/