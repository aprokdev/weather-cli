import { homedir } from 'os';
import { join } from 'path';
import { promises } from 'fs';

const filePath = join(homedir(), 'weather-data.json');

export const STORAGE = {
    token: 'token',
    city: 'city',
};

async function saveKeyValue(key, value) {
    let data = {};

    if (await isExsist(filePath)) {
        const file = await promises.readFile(filePath);
        data = JSON.parse(file);
    }
    data[key] = value;

    await promises.writeFile(filePath, JSON.stringify(data), (err) => {});
}

async function getKeyValue(key) {
    if (await isExsist(filePath)) {
        let data = {};
        const file = await promises.readFile(filePath);
        data = JSON.parse(file);
        return data[key];
    }
    return null;
}

async function isExsist(path) {
    try {
        await promises.access(path);
        return true;
    } catch (err) {
        return false;
    }
}

export { getKeyValue, saveKeyValue };
