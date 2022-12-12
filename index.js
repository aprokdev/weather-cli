#!usr/bin/env node

import parseArgs from "./helpers/parseArgs.js";
import { printHelp, printSuccess, printError } from "./services/log.service.js";
import { saveKeyValue } from "./services/storage.service.js";

async function saveToken(token) {
  try {
    await saveKeyValue("token", token);
    printSuccess("Token is saved");
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
// if (args.h) {
//   printHelp();
// }
