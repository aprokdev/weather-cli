#!/usr/bin/env node

import parseArgs from './helpers/parseArgs.js';
import { getWeather } from './services/api.service.js';
import { printHelp, printSuccess, printError, printWeather } from './services/log.service.js';
import { saveKeyValue, getKeyValue, STORAGE } from './services/storage.service.js';

async function saveToken(token) {
    if (!token.length) {
        printError('Token was not given');
        return;
    }
    try {
        await saveKeyValue(STORAGE.token, token);
        printSuccess('Token is saved');
    } catch (error) {
        printError(error.message);
    }
}

async function saveCity(city) {
    if (!city.length) {
        printError(`City ${city[0].toUpperCase()}${city.slice(1)} was not given`);
        return;
    }
    try {
        await saveKeyValue(STORAGE.city, city);
        printSuccess(`City ${city[0].toUpperCase()}${city.slice(1)} is saved`);
    } catch (error) {
        printError(error.message);
    }
}

async function main() {
    const args = parseArgs(process.argv);
    if (args.h) {
        return printHelp();
    }
    if (args.c) {
        return saveCity(args.c);
    }
    if (args.t) {
        return saveToken(args.t);
    }
    try {
        const data = await getWeather();
        if (data) {
            printWeather(data);
        }
    } catch (error) {
        printError(error.message);
    }
}

main();
