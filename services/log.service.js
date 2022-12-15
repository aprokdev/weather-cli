import chalk from 'chalk';
import dedent from 'dedent-js';

export function printError(message) {
    console.log(chalk.bgRed(' ERROR ') + message);
}

export function printSuccess(message) {
    console.log(chalk.bgGreen(' SUCCESS ') + message);
}

export function printHelp(message) {
    console.log(
        dedent(
            `
      ${chalk.bgCyan(' HELP ')}
        Without parameters - print weather
        -c [CITY] for setting city
        -t [API_KEY] for token saving

        -h for help

        `
        )
    );
}

function getIcon(icon) {
    switch (icon.slice(0, -1)) {
        case '01':
            return '☀️';
        case '02':
            return '⛅';
        case '03':
            return '☁️';
        case '04':
            return '☁️';
        case '09':
            return '🌦️';
        case '10':
            return '🌦️';
        case '11':
            return '☔';
        case '13':
            return '❄️';
        case '50':
            return '🌫️';
        default:
            return '';
    }
}

export function printWeather(data) {
    console.log(
        dedent(
            `
        ================================

        ${chalk.bgCyan(` ${data.name} `)} today's weather: ${data.weather[0].description} ${getIcon(
                data.weather[0].icon
            )}
        
        🌡️ Temperature:  min: ${data?.main?.temp_min}℃
                        max: ${data?.main?.temp_max}℃
        🌡️ Feels like: ${data?.main?.feels_like}℃

        🌄 Sunrise at: ${new Date(data?.sys?.sunrise).toLocaleTimeString()}
        🌇 Sunset at: ${new Date(data?.sys?.sunset).toLocaleTimeString()}

        ================================
        `
        )
    );
}
