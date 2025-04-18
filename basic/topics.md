# Basic JavaScript

## Variables (var, let, const)
- Explanation of `var`, `let`, and `const` keywords.
- Scope differences (function scope vs. block scope).
- Hoisting behavior of `var`.
- Immutability with `const`.
- Best practices for variable declaration.

## Data Types
- Primitive data types:
    - String
    - Number
    - Boolean
    - Null
    - Undefined
    - Symbol (ES6)
    - BigInt (ES2020)
- Reference data types:
    - Object
    - Array
    - Function
- `typeof` operator.

## Operators
- Arithmetic operators (+, -, *, /, %, ++, --).
- Assignment operators (=, +=, -=, *=, /=, %=).
- Comparison operators (==, ===, !=, !==, >, <, >=, <=).
- Logical operators (&&, ||, !).
- Bitwise operators (&, |, ^, ~, <<, >>, >>>).
- Ternary (conditional) operator (?).
- Spread (...) and Rest (...) operators (covered in Intermediate).

## Conditional Statements
- `if`, `else if`, `else` statements.
- `switch` statement.

## Loops
- `for` loop.
- `while` loop.
- `do...while` loop.
- `for...in` loop (for iterating over object properties).
- `for...of` loop (for iterating over iterable objects like arrays and strings - ES6).
- `break` and `continue` statements.

## Functions
- Function declaration and function expression.
- Parameters and arguments.
- Return statement.
- Function scope.
- Anonymous functions.
- Immediately Invoked Function Expressions (IIFE).

## Arrays
- Creating and accessing array elements.
- Array properties (`length`).
- Common array methods (e.g., `push`, `pop`, `shift`, `unshift`, `slice`, `splice`, `concat`, `join`).
- Multidimensional arrays.

## Objects
- Creating objects using object literals and constructors.
- Accessing object properties (dot notation and bracket notation).
- Adding, modifying, and deleting properties.
- `this` keyword in object methods (covered in Intermediate).

## Scope
- Global scope.
- Function scope.
- Block scope (with `let` and `const`).
- Lexical scope.

## DOM Manipulation
- Introduction to the Document Object Model (DOM).
- Selecting DOM elements (`getElementById`, `getElementsByClassName`, `getElementsByTagName`, `querySelector`, `querySelectorAll`).
- Modifying element content (`innerHTML`, `textContent`).
- Modifying element attributes (`getAttribute`, `setAttribute`).
- Modifying CSS styles (`style` property, `className`, `classList`).
- Creating and adding new elements (`createElement`, `createTextNode`, `appendChild`, `insertBefore`, `removeChild`, `replaceChild`).

## Events
- Introduction to event handling.
- Common DOM events (e.g., `click`, `mouseover`, `mouseout`, `change`, `submit`, `keydown`, `keyup`).
- Event listeners (`addEventListener`, `removeEventListener`).
- Event objects and their properties.
- Event bubbling and event capturing.
- Preventing default behavior (`preventDefault`).
- Event delegation (covered in Advanced).

## Type Conversion
- Implicit type coercion.
- Explicit type conversion (`Number()`, `String()`, `Boolean()`, `parseInt()`, `parseFloat()`).

## Template Literals
- Introduction to template literals (backticks ``).
- String interpolation using `${expression}`.
- Multiline strings.
- Tagged templates.

---

# Intermediate JavaScript

## ES6+ Features
- Overview of new features introduced in ECMAScript 2015 (ES6) and later.

## Arrow Functions
- Concise syntax for function expressions.
- Lexical `this` binding.

## Destructuring
- Extracting values from arrays and objects into distinct variables.
- Array destructuring.
- Object destructuring.
- Default values.
- Nested destructuring.

## Spread & Rest Operators
- Spread operator (`...`) for expanding iterables.
- Rest parameter (`...`) for collecting function arguments into an array.

## Callbacks
- Understanding callback functions.
- Callback hell (pyramid of doom).

## Promises
- Introduction to Promises for handling asynchronous operations.
- States of a Promise (pending, fulfilled, rejected).
- `then()`, `catch()`, `finally()` methods.
- Chaining Promises.
- `Promise.all()`, `Promise.race()`, `Promise.allSettled()`, `Promise.any()`.

## Async/Await
- Syntactic sugar over Promises for writing asynchronous code that looks synchronous.
- `async` functions.
- `await` keyword.
- Error handling with `try...catch` in `async/await`.

## Higher-Order Functions (map, filter, reduce)
- Functions that operate on other functions (either taking them as arguments or returning them).
- `map()` for transforming array elements.
- `filter()` for selecting array elements based on a condition.
- `reduce()` for accumulating array elements into a single value.

## Array & Object Methods
- More advanced array methods (e.g., `forEach`, `find`, `findIndex`, `some`, `every`, `flat`, `flatMap`).
- Useful object methods (e.g., `Object.keys()`, `Object.values()`, `Object.entries()`, `Object.assign()`, `Object.freeze()`, `Object.seal()`).

## Closures
- Understanding how inner functions retain access to variables from their outer (enclosing) function's scope, even after the outer function has finished executing.

## this Keyword
- Understanding the behavior of the `this` keyword in different contexts:
    - Global context.
    - Function context (strict mode vs. non-strict mode).
    - Method context.
    - Constructor function context.
    - Event handler context.
    - Arrow functions.
- Explicit binding with `call()`, `apply()`, and `bind()` (covered in Advanced).

## Set, Map, WeakMap, WeakSet
- `Set`: Collection of unique values.
- `Map`: Collection of key-value pairs where keys can be any data type.
- `WeakMap`: Like `Map`, but keys must be objects, and they are weakly held (allowing for garbage collection).
- `WeakSet`: Like `Set`, but values must be objects, and they are weakly held.

## JSON & Fetch API
- JavaScript Object Notation (JSON) for data interchange.
- `JSON.stringify()` for converting JavaScript objects to JSON strings.
- `JSON.parse()` for parsing JSON strings into JavaScript objects.
- `Fetch API` for making HTTP requests.
- Promises-based approach for handling responses.
- Request and response objects.
- Handling different HTTP methods (GET, POST, PUT, DELETE).

## Form Handling
- Selecting form elements.
- Accessing form data.
- Handling form submission events.
- Form validation.

## Local Storage & Session Storage
- Web Storage APIs for storing data locally in the browser.
- `localStorage` for persistent storage.
- `sessionStorage` for storage within a single session.
- Methods for setting, getting, and removing data.

## try...catch & Error Handling
- Using `try...catch` blocks to handle runtime errors.
- `finally` block.
- Creating and throwing custom errors (`throw new Error()`).

## Timers (setTimeout, setInterval)
- `setTimeout()` for executing a function once after a delay.
- `setInterval()` for repeatedly executing a function at a fixed interval.
- `clearTimeout()` and `clearInterval()` for stopping timers.

---

# Advanced JavaScript

## Prototypes
- Understanding the prototype chain.
- `prototype` property of constructor functions.
- Prototypal inheritance.
- `__proto__` property (non-standard but widely implemented).
- `Object.getPrototypeOf()`.

## Inheritance
- Implementing inheritance using prototypes.
- Constructor stealing.
- Combining constructor stealing and prototype chaining.
- ES6 `class` syntax (syntactic sugar over prototypes).
- `extends` keyword.
- `super` keyword.

## this Binding
- Deep dive into how `this` is determined in different scenarios.

## Call, Apply, Bind
- `call()`: Invokes a function with a specified `this` value and arguments provided individually.
- `apply()`: Invokes a function with a specified `this` value and arguments provided as an array.
- `bind()`: Creates a new function with a specified `this` value that can be called later.

## Execution Context
- Global execution context.
- Function execution context.
- `this` in the execution context.

## Lexical Environment
- Understanding lexical scope and how variables are resolved.
- Relationship between execution context and lexical environment.

## Hoisting
- Detailed explanation of variable and function hoisting.
- Differences in hoisting behavior between `var`, `let`, and `const`.
- Function declarations vs. function expressions.

## Event Loop & Microtasks
- Understanding the JavaScript event loop and its role in handling asynchronous operations.
- Call stack and task queue (callback queue).
- Microtask queue (for Promises and `MutationObserver`).
- Order of execution of tasks and microtasks.

## Debounce & Throttle
- Techniques for limiting the rate at which a function is executed.
- Debouncing: Delaying the execution of a function until a certain period of inactivity has passed.
- Throttling: Limiting the execution of a function to a maximum of once per specified interval.

## Currying
- Transforming a function that takes multiple arguments into a sequence of functions that each take a single argument.

## Memoization
- Optimizing functions by caching the results of expensive function calls and returning the cached result when the same inputs occur again.

## Custom Events
- Creating and dispatching custom DOM events.
- `CustomEvent` constructor.
- Listening for custom events.

## Object Descriptors
- Using `Object.defineProperty()` to define or modify object properties with fine-grained control over their attributes (e.g., `writable`, `enumerable`, `configurable`).
- `Object.getOwnPropertyDescriptor()`.

## Factory Functions vs Constructor Functions
- Different patterns for creating objects.
- Factory functions: Simply return a new object.
- Constructor functions: Use the `new` keyword to create instances.

## Module System (ESM & CommonJS)
- Organizing JavaScript code into reusable modules.
- ES Modules (ESM) using `import` and `export` (native browser support and Node.js).
- CommonJS using `require()` and `module.exports` (Node.js).
- Module bundlers (e.g., Webpack, Parcel).

---

# Pro Advanced JavaScript

## Design Patterns (Module, Factory, Observer, Singleton)
- Understanding common software design patterns and their application in JavaScript.
- Module pattern for creating encapsulated code.
- Factory pattern for creating objects without specifying the exact class.
- Observer pattern for implementing publish-subscribe mechanisms.
- Singleton pattern for ensuring that a class has only one instance.

## Functional Programming
- Concepts of functional programming in JavaScript.
- Pure functions.
- Immutability.
- First-class functions and higher-order functions.
- Function composition.

## Immutable Data
- Techniques for working with immutable data structures to improve predictability and prevent unintended side effects.
- Libraries for immutable data (e.g., Immutable.js).

## Service Workers
- Background scripts that run independently of the web page and can intercept network requests, manage caching, and enable offline functionality for Progressive Web Apps (PWAs).

## Web Workers
- Running JavaScript code in background threads without blocking the main thread, improving performance for computationally intensive tasks.

## Progressive Web Apps (PWA)
- Building web applications that provide an app-like experience to users, including offline support, installability, and push notifications.

## Code Optimization
- Techniques for writing efficient and performant JavaScript code.
- Avoiding performance bottlenecks.
- Optimizing loops, DOM manipulations, and event handling.

## Performance Profiling
- Using browser developer tools to analyze the performance of JavaScript code and identify areas for optimization.

## Security (XSS, CSRF, CORS)
- Understanding common web security vulnerabilities and how to prevent them in JavaScript applications.
- Cross-Site Scripting (XSS).
- Cross-Site Request Forgery (CSRF).
- Cross-Origin Resource Sharing (CORS).

## Advanced Debugging
- Utilizing advanced debugging features in browser developer tools.
- Breakpoints, watch expressions, call stack analysis.
- Debugging asynchronous code.

## Event Delegation
- A technique for efficiently handling events on a large number of elements by attaching a single event listener to a common ancestor.

## Dependency Injection
- A design pattern in which an object receives other objects that it depends on (dependencies) from an external source rather than creating them itself.

## Custom Hooks (if React is included)
- Reusable pieces of stateful logic in React functional components.

## Web Components
- A suite of standards that allow you to create reusable, encapsulated HTML tags with custom functionality.
- Custom Elements, Shadow DOM, HTML Templates.

---

# Hack-Level JavaScript

## JavaScript Engine Internals (V8, SpiderMonkey)
- Deep understanding of how JavaScript engines work under the hood.
- Specifics of popular engines like V8 (Chrome, Node.js) and SpiderMonkey (Firefox).

## Execution Phases (Parsing, Compilation, Execution)
- Detailed breakdown of the stages involved in executing JavaScript code.
- Abstract Syntax Tree (AST) generation.
- Just-In-Time (JIT) compilation.

## Hidden Classes
- Optimization technique used by JavaScript engines to improve property access performance.

## Inline Caches
- Optimization technique used by JavaScript engines to speed up repeated operations on the same types of objects.

## Abstract Syntax Trees (AST)
- Understanding the tree-like representation of the structure of JavaScript code.
- Tools for working with ASTs (e.g., Esprima, Babel parser).

## Proxy & Reflect
- `Proxy` object for creating intermediaries for other objects, allowing interception of operations.
- `Reflect` object providing methods for performing default object operations that can be intercepted by proxies.

## Symbol
- Primitive data type introduced in ES6 for creating unique and anonymous object properties.
- Well-known Symbols.

## Meta-Programming
- Writing code that manipulates code itself.
- Using Proxies, Reflect, and Symbols for meta-programming tasks.

## Monkey Patching
- Dynamically modifying the behavior of existing code at runtime.
- Understanding the potential risks and benefits.

## Writing Polyfills
- Creating code that provides functionality that is not natively supported by older JavaScript environments.

## Writing a JavaScript Compiler/Interpreter
- Understanding the principles and challenges involved in building tools that can execute JavaScript code.

## JavaScript Obfuscation
- Techniques for making JavaScript code harder to understand and reverse-engineer.

## Code Golfing Techniques
- Writing the shortest possible code to achieve a specific task.

## Custom JavaScript Framework
- Designing and building your own JavaScript framework or library.

## JavaScript in IoT / Edge Devices
- Understanding the use of JavaScript in embedded systems and edge computing environments.

---

# JS concept needs to learn (JS engine)

## 0. this vs window
- Understanding the difference between the `this` keyword and the global `window` object (in browsers).
- How `this` behaves in the global context in different environments.

## 1. Event Loop
- Detailed explanation of the event loop mechanism.
- How it manages the execution of synchronous and asynchronous code.

## 2. Call Stack
- How the call stack manages the execution of functions.
- Stack overflow errors.

## 3. Web APIs & Browser Env
- Understanding the Web APIs provided by the browser environment (e.g., DOM, Timers, Fetch API).
- How these APIs interact with the event loop.

## 4. Async Task API
- How asynchronous tasks are handled by the browser and Node.js environments.

## 5. Popular Web APIs
- Overview of commonly used Web APIs and their asynchronous nature (e.g., `setTimeout`, `setInterval`, `fetch`, `addEventListener`).

## 6. Geo Location (Callback based API)
- Example of a callback-based Web API and how it interacts with the event loop.

## 7. Task Queue
- Understanding the role of the task queue (callback queue) in the event loop.

## 8. setTimeout (Callback based API)
- Detailed explanation of `setTimeout` and how its callback is added to the task queue.

## 9. Microtask Queue
- Understanding the microtask queue and its priority over the task queue.
- How Promises and `MutationObserver` use the microtask queue.

## 10. Fetch (Promise based API)
- Example of a Promise-based Web API and how its resolution/rejection is handled via the microtask queue.
