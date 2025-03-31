// 📌 setTimeout
// ------------------
/* 
Syntax ::> setTimeout(callBackFunction reference,delay,arg1,arg2,arg3..);
callBackFunction --> function,arrow funciton,anonymous functions
delay --> in milliseconds
argn --> optinal
*/

// ---->
// Normal function
function delayedExecution() { console.log("Executed after 2 seconds") }
setTimeout(delayedExecution, 2000);

// Anonymous Arrow function
setTimeout(() => { console.log("Executed after 2 seconds") }, 2000);

// Anonymous Normal Function
setTimeout(function () { console.log("Executed after 2 seconds") }, 2000);
// ---->


// ---->
// setTimeout("console.log('hellow')")   // error in node environment but work in browser environment
// Print in browser but in node environment give error cuase required function and given string
// In browser string is evaluted as js code internally using eval() method
// Never used eval() if not required cause it's offers to hacker for code injection

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
// ---->

// ---->
// -> Arrow functions do NOT have arguments, but normal functions do.
// -> Use function if you need arguments, or use (...args) in arrow functions.
// -> Both approaches work in Node.js and the browser.
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
// ---->





// ----->
// 📌 setInterval
//-----------------
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
// const interval3=setInterval(function(){console.log("interval-2")},2000);
// const interval3=setInterval(()=>{console.log("interval-2")},2000)


// # Case-4 : 
// function fun4() {
//     console.log("interval-3");
//     console.log(arguments)
// }
// const interval4 = setInterval(fun4,2000,1,2,3,4,5);

const fun4=(...args)=>{
    console.log("interval-4");
    console.log(args)
}
const interval5 = setInterval(fun4,2000,1,2,3,4,5);
// ----->



// 📌 Clearing setTimeout()
// -------------------------
const timeoutID = setTimeout(() => {
    console.log("Timeout:This will not execute");
}, 1000);
  
clearTimeout(timeoutID);  //clearInterval(timeoutID)
  
const intervalID = setInterval(() => {
    console.log("Interval:This will not execute");
}, 2000);

clearInterval(intervalID);  // or clearTimeout(intervalID);


// # Best pratice is to use clear time ,interval with respect to  set timer,interval


