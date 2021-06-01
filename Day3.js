// function
function greet(name, callback) {
    console.log('Hi' + ' ' + name);
    callback();
    }
    // callback function
    function callMe() {
    console.log('I am callback function');
    }
    // passing function as an argument
    greet('Tirth', callMe);


// program that shows the delay in execution
function greet() {
    console.log('Hello world');
    }
    function sayName(name) {
    console.log('Hello ' + name);
    }
    // calling the function
    setTimeout(greet, 2000);
    sayName('Tirth')


// setTimeOut()
setTimeout(function(){
    console.log('I have come after 500 miliseconds')},500);

// program to display time every 3 seconds
function showTime() {
    // return new date and time
    let dateTime= new Date();
    // returns the current local time
    let time = dateTime.toLocaleTimeString();
    console.log(time)
    // display the time after 3 seconds
    setTimeout(showTime, 3000);
    }
    // calling the function
    showTime();

// SetInterval
setInterval(function(){
    console.log('Welcome to Node.js')
    }, 500)

// Promises
var mypromise = new Promise(function(resolve, reject) {
    const x = 100;
    const y = 100;
    if(x === y) {
    resolve();
    } else {
    reject();
    }
    });
    mypromise.
    then(function () {
    console.log('Success');
    }).
    catch(function () {
    console.log('Error')
    });