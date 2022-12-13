#!usr/bin/env node

import parseArgs from './helpers/parseArgs.js';
import { getWeather } from './services/api.service.js';
import { printHelp, printSuccess, printError } from './services/log.service.js';
import { saveKeyValue, TOKEN_DICTIONARY } from './services/storage.service.js';

async function saveToken(token) {
    if (!token.length) {
        printError('Token was not given');
        return;
    }

    try {
        await saveKeyValue(TOKEN_DICTIONARY.token, token);
        printSuccess('Token is saved');
    } catch (error) {
        printError(error.message);
    }
}

const args = parseArgs(process.argv);
if (args.h) {
    printHelp();
}
if (args.t) {
    await saveToken(args.t);
}
getWeather('moscow');
// console.log(process.env)
// if (args.h) {
//   printHelp();
// }
