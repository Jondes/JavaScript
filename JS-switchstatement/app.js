const x = 10;

const color = 'blue';

switch (color) {
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is not red or blue');
        break;
}

const addNums = (num1 = 1, num2) => num1 + num2;
console.log(addNums(5, 5));



