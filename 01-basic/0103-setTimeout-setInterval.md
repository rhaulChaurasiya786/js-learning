# 📌 `setTimeout` and `setInterval` in JavaScript

JavaScript provides two timing functions that are part of the Web API provided by the browser (or Node.js). These functions behave asynchronously (non-blocking) and execute functions after a specified time delay or repeatedly at set intervals.

These functions are part of the Web API, not directly part of JavaScript itself.

## 📜 Overview

- **`setTimeout`**: Executes a function once after a specified delay (in milliseconds).
- **`setInterval`**: Executes a function repeatedly at a specified time interval.
- **`clearTimeout`**: Cancels the timeout set by `setTimeout`.
- **`clearInterval`**: Cancels the interval set by `setInterval`.

## ✨ `setTimeout`

The `setTimeout` method executes a function once after a specified delay. It is useful when you want to delay the execution of a function for a specific period of time.


## ✨ `setInterval`

The `setInterval` method executes a function repeatedly at a specified time interval. It is useful when you need a function to run at regular intervals, such as polling data or updating a timer.


## ✨ `clearTimeout`

The `clearTimeout` method is used to cancel a timeout set by `setTimeout`. If the timeout has not yet occurred, calling `clearTimeout` will prevent the function from executing.


## ✨ `clearInterval`

The `clearInterval` method is used to cancel an interval set by `setInterval`. If the interval is still active, calling `clearInterval` will stop the repeated execution of the function.

## ✅ Conclusion

- **`setTimeout`**: Executes a function after a specified delay.
- **`setInterval`**: Executes a function repeatedly at a specified interval.
- **`clearTimeout`** and **`clearInterval`**: Methods to cancel `setTimeout` and `setInterval` respectively.

These functions are essential for asynchronous timing in JavaScript, allowing you to control the execution of functions after delays or at regular intervals.


## code-and-project-address
- **`code-examples`**: 0103-setTimeout-setInterval.js
- **`projects`**: 0103-setTimeout_setInterval.js