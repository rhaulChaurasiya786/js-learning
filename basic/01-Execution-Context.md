# Execution Context


## JavaScript Execution Flow (Step-by-Step)

| Step | Name                          | Description |
|------|-------------------------------|-------------|
| 1    | **Loading**                   | Browser downloads the JavaScript file. |
| 2    | **Parsing**                   | JS engine reads the code, checks syntax, and builds an Abstract Syntax Tree (AST). |
| 3    | **Compilation**              | AST is converted into bytecode or machine code using Just-In-Time (JIT) compilation. |
| 4    | **Global Execution Context Creation by Execution Context Manager** | Sets up the global environment: hoists variables/functions and sets `this` to the global object. |
| 5    | **Creation Phase**           | Memory is allocated: variables are initialized as `undefined`, functions are stored. |
| 6    | **Execution Phase**          | Code is executed line-by-line, values are assigned, and functions are invoked. |
| 7    | **Function Execution Context** | A new context is created for each function call and pushed onto the Call Stack. |
| 8    | **Call Stack Management**    | Tracks active function calls; pops contexts off the stack once functions complete. |
| 9    | **Event Loop & Callback Queue** | Handles asynchronous tasks like `setTimeout`, `fetch`, etc., after main thread is idle. |
| 10   | **Execution Complete**       | Code finishes executing or continues waiting for asynchronous events. |




## Execution Context
- Execution Context is a concept that describes the environment in which JavaScript code is evaluated and executed.

### 🔄 What Happens:
- JavaScript engine **scans the code**.
- It creates an **Execution Context**.
- **Memory is allocated** for variables and functions.
- The code is then **executed**.

---

## 🧩 Types of Execution Context

### 1. Global Execution Context (GEC)
- Created **once** when the script starts.
- Represents the **global scope**.
- In browsers, it's the `window` object.(global in nodejs)

### 2. Function Execution Context (FEC)
- Created **every time a function is called**.
- Represents the **local scope** of that function.
- Multiple function contexts can be created during runtime.

### 2. Eval Execution Context (rarely used)

---


## 🧩 Phase of Execution Context
- There are two phases of JavaScript execution context:

### 1. Creation Phase
- In this phase, JavaScript engine sets up the environment for the code by: creating the execution context, allocating memory for variables and functions, setting the this value, creating the lexical environment, and setting up the scope chain.
- window object creation
- this keyword creation with reference of the window object (this===window) -> true (have same reference object)
- memory allocation of the variabel with default value and function body (fully hoisted with code)(full access before declaration)
- creating the scope chain
- setup the lexical environment

#### note:
```js
console.log(amu);  // undefined -> declaration & defualt initialzation (with undefined) during memory allocation phase
var amu="hey";     // latest value assign during code execution phase
console.log(amu);  // hey
```


```js
// console.log(amu);  // Uncaught ReferenceError: Cannot access 'amu' before initialization -> terminate the program
// # Cause only declaration is happen during memory creation phase but initialization is not happen,
// # Which is happen during code executio phase and than accessible let and const variable
let amu="hey";        // latest value assign during code execution phase
console.log(amu);     // hey
```


```js
// Same error can't access before initialization
// console.log(amu);
const amu="hey";
console.log(amu);
```
![Homepage Screenshot](./image/img-1.png)

### 1. Execution  Phase
- In this phase, JavaScript runs the code line by line, assigns actual values to variables, and executes any function calls.
- variable intialization with latest value 
- creation of function execution context on function call

## JavaScript Hoisting Summary Table

| Feature                      | `var`                   | `let` / `const`         | `function`                     |
|-----------------------------|--------------------------|--------------------------|--------------------------------|
| **Hoisted**                 | ✅ Yes                   | ✅ Yes                   | ✅ Yes                         |
| **Initialized during hoist**| ✅ As `undefined`        | ❌ No (due to Temporal Dead Zone (TDZ))                 | ✅ Yes (entire function body) |
| **Can be accessed before declaration?** | ⚠️ Yes (returns `undefined`) | ❌ No (ReferenceError,cause not access before intialization in code execution phase) | ✅ Yes (fully usable)         |
| **Reassignment allowed**    | ✅ Yes                   | ✅ Yes                   | ✅ Yes                         |
| **Redeclaration in same scope** | ✅ Yes              | (✅ let) (❌ const)                    | ✅ (function declaration)      |

---
