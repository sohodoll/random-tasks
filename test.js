const { stdin, stdout } = process;
const flag = process.argv[2];

const calculate  = (a, b) => {
    stdout.write('Type 2 numbers\n');

    stdin.on('data', data => {
        const numString = data.toString();
        const array = numString.split(' ');
        let result;
        if (flag == '-m') {
            result = Number(array[0]) + Number(array[1]);
        } else {
            result = Number(array[0]) * Number(array[1]);
        }
        stdout.write(result.toString());
        process.exit();
    });
}

calculate();
