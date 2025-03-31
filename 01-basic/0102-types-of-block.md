# 📜 Types of Blocks in JavaScript

## 📦 Global Scope Block
## 📦 Function Scope Block
## 📦 Block Scope Block
## 📦 Try-Catch Block


## 📦 Global Scope Block (var, let, const)

-> Code outside functions, loops, blocks, or conditionals is in the global scope.
-> `var` variables are accessible anywhere and attach to `window` in the browser and attach to `global` in Node.js.
-> `let` and `const` stay in the global scope but don’t attach to `window`.
### ✅ Code Example:

```js
var globalVar = "I'm var";  // Attached to window
let globalLet = "I'm let";  // Not attached to window
const globalConst = "I'm const";  // Not attached to window

// console.log(window.globalVar);  // "I'm var"
// console.log(window.globalLet);  // undefined
// console.log(window.globalConst);  // undefined
```


## 📦 Function Scope Block (var, let, const)

-> Functions create their own scope.
-> Variables inside a function cannot be accessed outside it.



## 📦 Block Scope Block (let, const)

-> Works only with `let` and `const` variables inside curly brackets `{}`.
-> With block scope `{}` --> `let`, `const`
-> With loops  --> `var` (hoisted) shared, `let` recreated in each iteration with updated value.
-> `var` is hoisted to the surrounding scope.
-> Moves upward (outside the block) to the nearest function or global scope.
-> It does not move downward (inside nested blocks).
-> With Conditional Blocks  --> `var` (hoisted), `let` & `const` block scoped inside `{}` brackets.
-> Works with Blocks, Conditionals, and Loops.



## 📦 Try-Catch Block

-> `var` is hoisted due to function-scoped behavior, while `let` & `const` are block scoped.



## ✅ Conclusion

-> `var` behaves this way because JavaScript was originally designed without block scope.
-> `let` and `const` were introduced in **ES6 (2015)** to fix this and provide block scope.
-> Avoid using `var` in modern JavaScript—always prefer `let` or `const` for safer and more predictable behavior.

