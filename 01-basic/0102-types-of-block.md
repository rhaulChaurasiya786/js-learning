# 📜 Types of Blocks in JavaScript

In JavaScript, a block is a set of statements enclosed within curly braces {}. Blocks help structure code, define scope, and control execution flow. Here are the main types of blocks in JavaScript:

- Global Scope Block
- Function Scope Block
- Block Scope Block
- Try-Catch Block

  
## 1️⃣ Global Scope Block (var, let, const)

- Code outside functions, loops, blocks, or conditionals is in the global scope.
- `var` variables are accessible anywhere and attach to `window` in the browser and attach to `global` in Node.js.
- `let` and `const` stay in the global scope but don’t attach to `window`.
- Global Variables Accessible Anywhere in
### ✅ Code Example:

```js
var globalVar = "I'm var";  // Attached to window
let globalLet = "I'm let";  // Not attached to window
const globalConst = "I'm const";  // Not attached to window

console.log(window.globalVar);  // "I'm var"
console.log(window.globalLet);  // undefined
console.log(window.globalConst);  // undefined
```


```js
// # Global Variables Accessible Anywhere
var globalVar = "I'm var"; 
let globalLet = "I'm let";  
const globalConst = "I'm const";  
function sayHello() {
    console.log(globalVar);  // I'm var
    console.log(globalLet);  // I'm let
    console.log(globalConst);  // I'm const
}
sayHello(); 
```

##### note:
- `var` global variable can access directly or `window.varName` access from the other js files,means from anywher in same websites (due to attachement to window)
- `let` & `const` access form only that files in which declared  (not attached to window)


## 2️⃣ Function Scope Block (var, let, const)

- Functions create their own scope.
- Variables inside a function cannot be accessed outside it.
- var,let and const declared in function block is not accessed from anywher 

```js
// # Variables in Functions (Not Global)
function testScope() {
    var localVar = "Inside function";
    let localLet = "Inside function";
    const localConst = "Inside function";
  }
  
  console.log(localVar);  // Error: not defined
  console.log(localLet);  // Error: not defined
  console.log(localConst);  // Error: not defined
```



## 3️⃣ Block Scope Block (let, const)

- Works only with `let` and `const` variables inside curly brackets `{}`.
- With block scope `{}` --> `let`, `const`
- With loops  --> `var` (hoisted) shared, `let` recreated in each iteration with updated value.
- `var` is hoisted to the surrounding scope.
- Moves upward (outside the block) to the nearest function or global scope.
- It does not move downward (inside nested blocks).
- With Conditional Blocks  --> `var` (hoisted), `let` & `const` block scoped inside `{}` brackets.
- Works with Blocks, Conditionals, and Loops.


```js
// 📌  With block
{
  var blockVar = 0;
  let blockLet = 1;
  const blockCosnt = 2;
  console.table([blockLet, blockCosnt]);
}
console.log(blockVar); // output: 0
console.table([blockLet,blockCosnt]); // ReferenceError (not access of let,const vaiable)
```


```js
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
```


```js
// Proof
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
      console.log(i);
  }, 1000);
}
//output is 3 for each console
```


```js
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
console.log(conditionLet);  // ReferenceError
console.log(conditionConst); // ReferenceError
```

## 4️⃣ Try-Catch Block

- `var` is hoisted due to function-scoped behavior, while `let` & `const` are block scoped.
- so `var` is accessed outside but `let` & `const` only access inside.


## ✅ Conclusion

- `var` behaves this way because JavaScript was originally designed without block scope.
- `let` and `const` were introduced in **ES6 (2015)** to fix this and provide block scope.
- Avoid using `var` in modern JavaScript—always prefer `let` or `const` for safer and more predictable behavior.

