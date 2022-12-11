#!usr/bin/env node

import parseArgs from "./helpers/parseArgs.js";
import { printError, printSuccess, printHelp } from "./services/log.service.js";

const args = parseArgs(process.argv);
if (args.h) {
  printHelp();
}
// if (args.c) {
//   printHelp();
// }
// if (args.h) {
//   printHelp();
// }
