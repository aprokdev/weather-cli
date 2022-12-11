import chalk from "chalk";
import dedent from "dedent-js";

export function printError(message) {
  console.log(chalk.bgRed(" ERROR ") + message);
}

export function printSuccess(message) {
  console.log(chalk.bgGreen(" SUCCESS ") + message);
}

export function printHelp(message) {
  console.log(
    dedent(
      `
      ${chalk.bgCyan(" HELP ")}
        Without parameters - print weather
        -c [CITY] for setting city
        -t [API_KEY] for token saving

        -h for help

        `
    )
  );
}
