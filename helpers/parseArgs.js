export default function parseArgs(args) {
    let val = {};
    const parameters = args.slice(2);
    let error = '';
    parameters.forEach((item, i) => {
        const nextParameter = parameters[i + 1];
        const isFlag = item[0] === '-';
        if (isFlag && nextParameter && nextParameter[0] !== '-') {
            val[item.slice(1)] = nextParameter;
            return;
        }
        if (isFlag && nextParameter && nextParameter[0] === '-') {
            val[item.slice(1)] = true;
            return;
        }
        if (isFlag && !nextParameter) {
            val[item.slice(1)] = true;
            return;
        }
        if (!isFlag && !nextParameter && parameters.length > 1) {
            return;
        }
        if (!isFlag && nextParameter && nextParameter[0] !== '-' && parameters.length > 1) {
            error = 'ERROR: Parameter without flag';
            return;
        }
        if (!isFlag && nextParameter && parameters.length > 1) {
            return;
        }
        error = 'ERROR: Parameter without flag';
    });
    return error ? new Error(error) : val;
}
