// # Global Scope & Variable Behavior
// ---------------------------------------

// 1. Global Scope Example
var globalVar = "I'm var";  // Attached to window
let globalLet = "I'm let";  // Not attached to window
const globalConst = "I'm const";  // Not attached to window

// console.log(window.globalVar);  // "I'm var"
// console.log(window.globalLet);  // undefined
// console.log(window.globalConst);  // undefined


// 2. Variables in Functions (Not Global)
function testScope() {
    var localVar = "Inside function";
    let localLet = "Inside function";
    const localConst = "Inside function";
  }
  
//   console.log(localVar);  // Error: not defined
//   console.log(localLet);  // Error: not defined
//   console.log(localConst);  // Error: not defined
  
// 3. Global Variables Accessible Anywhere
var personName = "John";  

function sayHello() {
  console.log("Hello, " + personName);  
}

// sayHello();  // "Hello, John"


// Note:
// -> var global variable can access directly or window.varName access from the other js files,means from anywher in same websites (due to attachement to window)
// -> let & const access form only that files in which declared  (not attached to window)


// # Function Scope Block
// -----------------------
// -> var,let and const declared in function block is not accessed from anywher 


// # Block Scope
// --------------

// 📌  With block
{
  var blockVar = 0;
  let blockLet = 1;
  const blockCosnt = 2;
  console.table([blockLet, blockCosnt]);
}
// console.log(blockVar); // output: 0
// console.table([blockLet,blockCosnt]); // ReferenceError (not access of let,const vaiable)



// 📌  With loops

console.log("-----------Loops(let)------------")
for (let i = 0; i < 3; i++) {
  console.log(i);
}
// i=0 (new vairable is created let i=0)
// i=1 (new vairable is created let i=1)
// i=2 (new vairable is created let i=2)
// Recreated in each loop iteration
// output is differnent becauase let is not shared globally 

console.log("-----------Loops(var)------------")
for (var i = 0; i < 3; i++) {
  console.log(i);
}
// i = 0 (same variable i is updated, var i = 0)
// i = 1 (same variable i is updated, var i = 1)
// i = 2 (same variable i is updated, var i = 2)
// Created once and only update in each iteration
// After the loop, i is still accessible because var is function-scoped and not block-scoped.

// Proof
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
      console.log(i);
  }, 1000);
}
//output is 3 for each console


// 📌 With if Conditions
if(true)
{
  //var does not support block scope. It gets hoisted to the function or global scope.
  var conditionVar=1;
  let conditionLet=2;
  const conditionConst=3;
  console.table([conditionVar,conditionLet,conditionConst]);
}
console.log(conditionVar);     // 1   
// console.log(conditionLet);  // ReferenceError
// console.log(conditionConst); // ReferenceError


// # Try-Catch Block
// -----------------------
// -> var is accessd outside 
// -> let & const only access inside