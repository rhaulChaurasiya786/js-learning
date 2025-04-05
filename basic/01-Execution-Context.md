# Execution Context


## 🔁 JavaScript Execution Flow (Step-by-Step)

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


## 📌 JavaScript Hoisting Summary Table

| Feature                      | `var`                   | `let` / `const`         | `function`                     |
|-----------------------------|--------------------------|--------------------------|--------------------------------|
| **Hoisted**                 | ✅ Yes                   | ✅ Yes                   | ✅ Yes                         |
| **Initialized during hoist**| ✅ As `undefined`        | ❌ No                    | ✅ Yes (entire function body) |
| **Temporal Dead Zone (TDZ)**| ❌ No                    | ✅ Yes                   | ❌ No                         |
| **Can be accessed before declaration?** | ⚠️ Yes (returns `undefined`) | ❌ No (ReferenceError) | ✅ Yes (fully usable)         |
| **Reassignment allowed**    | ✅ Yes                   | ✅ Yes                   | ✅ Yes                         |
| **Redeclaration in same scope** | ✅ Yes              | ❌ No                    | ✅ (function declaration)      |

---

## 🔍 Examples