// import https from 'https';
import { printError } from './log.service.js';
import { getKeyValue, STORAGE } from './storage.service.js';
import axios from 'axios';

export async function getWeather(city) {
    const token = await getKeyValue(STORAGE.token);
    if (!token) {
        printError('Token was not passed, please pass it with -t flag: -t [API_KEY]');
        return;
    }

    try {
        const { data } = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
            params: {
                q: city,
                appid: token,
                lang: 'en',
                units: 'metric',
            },
        });
        return data;
    } catch (err) {
        if (err.response.status === 404) {
            printError('Wrong city');
            return;
        }
        if (err.response.status === 401) {
            printError('Wrong or incorrect token');
            return;
        }
        printError(err.response.data.message);
    }
    // return data;

    // const url = new URL('https://api.openweathermap.org/data/2.5/weather');
    // url.searchParams.append('q', city);
    // url.searchParams.append('appid', token);
    // url.searchParams.append('lang', 'ru');
    // url.searchParams.append('units', 'metric');

    // https.get(url, (response) => {
    //     let res = '';
    //     response.on('data', (chunk) => {
    //         res += chunk;
    //     });

    //     response.on('end', () => {
    //         console.log(res);
    //     });
    // });
}
