import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

export const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);

export const getRootFolder = () => {
    return path.join(__dirname, '../');
};

export const getVersion = () => {
    const packageJson = fs.readFileSync(path.join(getRootFolder(), '../package.json'), 'utf-8');
    let version = '1.0.0';

    try {
        const parsed = JSON.parse(packageJson);
        version = parsed.version;
    } catch (ex) {}

    return version;
};
