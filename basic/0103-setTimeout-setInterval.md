# ⏰ `setTimeout` and `setInterval` in JavaScript

JavaScript provides two timing functions that are part of the Web API provided by the browser (or Node.js). These functions behave asynchronously (non-blocking) and execute functions after a specified time delay or repeatedly at set intervals.

These functions are part of the Web API, not directly part of JavaScript itself.

## 📜 Overview

- **`setTimeout`**: Executes a function once after a specified delay (in milliseconds).
- **`setInterval`**: Executes a function repeatedly at a specified time interval.
- **`clearTimeout`**: Cancels the timeout set by `setTimeout`.
- **`clearInterval`**: Cancels the interval set by `setInterval`.

## ✨ `setTimeout`

The `setTimeout` method executes a function once after a specified delay. It is useful when you want to delay the execution of a function for a specific period of time.


### Syntax :


```js
setTimeout(callBackFunction reference,delay,arg1,arg2,arg3..);
// callBackFunction --> function,arrow funciton,anonymous functions
// delay --> in milliseconds
// argn --> optinal
```


### Code :


- Different types of setting function


```js
// Normal function
function delayedExecution() { console.log("Executed after 2 seconds") }
setTimeout(delayedExecution, 2000);

// Anonymous Normal Function
setTimeout(function () { console.log("Executed after 2 seconds") }, 2000);

// Anonymous Arrow function
setTimeout(() => { console.log("Executed after 2 seconds") }, 2000);
```


- setTimeout("console.log('hellow')")   // error in node environment but work in browser environment
- Print in browser but in node environment give error cuase required function and given string
- In browser string is evaluted as js code internally using eval() method
- Never used eval() if not required cause it's offers to hacker for code injection


```js
const fun=()=>{
    console.log("Timer-4");
}
let timer1=setTimeout('console.log("Timer-1")',1000);
let timer2=setTimeout('console.log("Timer-2")',2000);
let timer3=setTimeout(console.log("Timer-3"),3000);
// Passing the function address so that internally call by () --> fun()
let timer4=setTimeout(fun,4000); 
// Firsly call the fun()(not pass address) execute it and return undefinded so no timer applied
let timer5=setTimeout(fun(),5000);
```


- Arrow functions do NOT have arguments, but normal functions do.
- Use function if you need arguments, or use (...args) in arrow functions.
- Both approaches work in Node.js and the browser.


```js
function fun6() {
    console.log("-------normal function--------");
    console.log(arguments) // arguments["0"]
}

const fun7=(...args)=>{
    console.log("-------arrow function--------");
    console.log(args); // args can we customm
}
const timer6 = setTimeout(fun6, 1000, 1, 2, 3, 4, 5);
const timer7 = setTimeout(fun7, 1000, 1, 2, 3, 4, 5);
```


## ✨ `setInterval`

The `setInterval` method executes a function repeatedly at a specified time interval. It is useful when you need a function to run at regular intervals, such as polling data or updating a timer.


### Code :


```js
// # Case-1 : ReferenceError: bro is not defined so added decalaration line
let interval;
const interval1 = setInterval("interval",500); 

// # Case-2 : This string is evaluted as js code by eval() for each new VM files 
const interval2 = setInterval("console.log('interval-1')",1000); 

// # Case-3 : 
function fun3() {
    console.log("interval-2");
    console.log(arguments)
}
const interval3 = setInterval(fun3,2000);
const interval3=setInterval(function(){console.log("interval-2")},2000);
const interval3=setInterval(()=>{console.log("interval-2")},2000)


// # Case-4 : 
function fun4() {
    console.log("interval-3");
    console.log(arguments)
}
const interval4 = setInterval(fun4,2000,1,2,3,4,5);

const fun5=(...args)=>{
    console.log("interval-4");
    console.log(args)
}
const interval5 = setInterval(fun5,2000,1,2,3,4,5);
```


## ✨ `clearTimeout`

The `clearTimeout` method is used to cancel a timeout set by `setTimeout`. If the timeout has not yet occurred, calling `clearTimeout` will prevent the function from executing.


### Code :


```js
const timeoutID = setTimeout(() => {
    console.log("Timeout:This will not execute");
}, 1000);
  
clearTimeout(timeoutID);  // Also we can use clearInterval(timeoutID)
```


## ✨ `clearInterval`

The `clearInterval` method is used to cancel an interval set by `setInterval`. If the interval is still active, calling `clearInterval` will stop the repeated execution of the function.


### Code :


```js
const intervalID = setInterval(() => {
    console.log("Interval:This will not execute");
}, 2000);

clearInterval(intervalID);  // Also we can use  clearTimeout(intervalID);
```


- Best pratice is to use clear time ,interval with respect to  set timer,interval

## ✅ Conclusion

- **`setTimeout`**: Executes a function after a specified delay.
- **`setInterval`**: Executes a function repeatedly at a specified interval.
- **`clearTimeout`** and **`clearInterval`**: Methods to cancel `setTimeout` and `setInterval` respectively.

These functions are essential for asynchronous timing in JavaScript, allowing you to control the execution of functions after delays or at regular intervals.


## Projects

- Digital Clock (Real-Time Update) ⏰
- Countdown Timer with Pause & Reset ⏳
- Auto-Slideshow / Image Carousel 🎞
- Typing Effect Animation (Typewriter Effect) ⌨️
- Auto-Logout System (Inactivity Timer) 🔒