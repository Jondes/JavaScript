/*  ***  Asychronuos programming  ***
A form of computer control timing protocol in which a specific
operation begins upon receipt of an indication that the preceding
oeration has been completed */

// To enforce the order of operations
// Callback is a function as an argument to anoher function
var users = ['Sam', 'John', 'Tim'];

function addUser(username, callback) {
    setTimeout(function () {
        users.push(username);
        callback();
    }, 200);
}

function getUsers() {
    setTimeout(function () {
        console.log(users);
    }, 100);
}
// First add user to database then -
//  - execute getUsers after user has been added
addUser('Jake', getUsers);
// second get updated list of users
//getUsers();


/* let add = function (a, b) {
    return a + b;
}
let multiply = function (a, b) {
    return a * b;
}
let calc = function (num1, num2, callback) {
    return callback(num1, num2);
}
console.log(calc(2, 3, multiply)); */

/* var myArr = [{
    num: 5,
    str: 'apple'
},
{
    num: 7,
    str: 'cabbage'
},
{
    num: 1,
    str: 'banana'
}
];
myArr.sort(function (val1, val2) {
    //if(val1.num > val2.num){ }
    if (val1.str < val2.str) {
        return -1
    } else {
        return 1;
    }
});
console.log(myArr); */

/* let loagCall = function () {
    console.log('logCall was called back');
};

setTimeout(function () {
    console.log('The function was cled back');
}, 3000); */

/* function show() {
    console.log('I am a brag');
}
function hide(callback) {
    callback();
}
show(hide);
 */
/* function show(a) {
    console.log('I am show function' + a);
}
function geeky(callback) {
    var a =  102;
    callback(a);
}
geeky(show);*/
















