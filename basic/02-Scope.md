# Scope
- Scope means the area in your code where a variable or value can be seen or used. If something is outside the scope, you can’t use it from where you are.
- The scope is the current context of execution in which values and expressions are "visible" or can be referenced. If a variable or expression is not in the current scope, it will not be available for use. Scopes can also be layered in a hierarchy, so that child scopes have access to parent scopes, but not vice versa.
- Scope in JavaScript refers to the accessibility or visibility of variables and expressions. That means the space where an item, such as a variable or a function, is visible and accessible in your code.
- consider i room in which i access each things which is visibel but not inner rooms (cause don't khonw what inside untill door opening by inner room )
- outer room can't see untill window opend (return & exposed by inner funcion) inner room
- but inner room can see and used outer things (cause it is visible) (like meeting room in office)
- but outer room not see & used inner things


## Why is Scope important?
- ✅ Controls variable accessibility
- Scope determines where a variable can be accessed in your code (inside a function, block, or globally).
- ✅ Prevents naming conflicts
- Variables declared in different scopes can have the same name without interfering with each other.
- ✅ Improves code readability and maintainability
- Scoped variables make it easier to understand and debug code since their usage is limited to specific parts.
- ✅ Supports data encapsulation
- Scope helps hide internal logic and variables from the outside, improving modularity and security.
- ✅ Helps manage memory efficiently
- Variables are destroyed once they go out of scope, freeing up memory automatically.
- ✅ Enables closures and functional programming
- Scope allows inner functions to remember and access variables from their parent scope even after the parent has finished executing.
- ✅ Ensures predictable behavior of variables
- Understanding scope prevents bugs caused by unintended variable access or reassignment.



## Types of Scope

1. **Global Scope**
2. **Function Scope**
3. **Block Scope**
4. **Lexical Scope (Closures)**

### Global Scope
- Variable declared outside function & block is access from anywher in code


```js
let a=10;
console.log(a);
function say()
{
    console.log(a);
}
say();
{
    console.log(a);
}
if(true)
{
    console.log(a);
}
```

```js
// # Var is hoisted to function scope and global scope(if outside of funciton )(in any block except function block)
if(true){
     var amu1=10;     //hoisted to global
    console.log(amu1);
}
{
    var amu2=20;       //hoisted to global
   console.log(amu2);
}
for(i=0;i<=5;i++)
{
    var amu3=i;       //hoisted to global and each iteratio recreation of var is not happen only once (due to glocal scope)
}
function sayHi()
{
    var amu4=40;      // hoisted in that funciton local scope & destroyed after function execution done
    console.log(amu4);
}
console.log(amu1);  // 10
console.log(amu2);  // 20
console.log(amu3);  // 5
sayHi();
console.log(amu4);  // ReferenceError (var is hoisted in funciton scope and not access outside this scope )
```


- Hoisted to global scope means bind with global object (windwo) so that can access from any where in application (also from other script files)
- var/let/const and funciton can access from any-where in applicaiton (from any script files)
- let\const not access from outside the block scope(strictly follow th rule) and give better & safe programming pratice (unlike var)


### Function Scope
- Variables declared inside a function using var, let, or const are only accessible within that function.(not access outside scope)


```js
function say()
{
    let a=10;
    console.log(a); // 10
}
say();
console.log(a);   // ReferenceError: a is not defined
{
    console.log(a); // ReferenceError: a is not defined
}
if(true)
{
    console.log(a); // ReferenceError: a is not defined
}
```

### Block Scope
- Variables declared with let or const inside {} blocks (like if, for) are only accessible inside that block.
- var is declared inside {} block can access outside their scope cause hoisted to nearest funciton scope ( if inside function ),global scope ( if outside function )


```js
{
    var a=10;
    let b=20;
    const c=30;
    console.log(a);
    console.log(b);
    console.log(c);
}
console.log(a);  // 10
console.log(b);  // ReferenceError
console.log(c);  // ReferenceError
```

### Lexical Scope (static scope)
- Lexical Scope (also called Static Scope) means that a function’s scope is determined by where it is defined in the code, not where it is called.


```js
function outer() {
  let name = "NexGenDev";

  function inner() {
    console.log(name);  // ✅ Accesses outer function's variable
  }

  inner();
}
outer();

```


- An inner function has access to the variables of its outer function, even after the outer function has finished executing.


```js
function outer() {
  let x = 5;
  function inner() {
    console.log(x); // ✅ has access
  }
  return inner;
}

const func = outer();
func(); // prints 5
```


- Lexical scope means that a function has access to variables from the scope in which it was defined, not where it is executed. This concept is what powers closures in JavaScript.


### Closure 
- A closure is created when a function remembers and continues to access variables from its lexical (outer) scope, even after the outer function has finished executing.
- A closure is a function bundled with its lexical environment — it can remember variables from where it was created, not just where it’s called.

```js
function init()
{
    var firstName="rahul";
    function sayFirstName()
    {
        // # When above method is called execution context created & also clouser is set-up
        console.log(firstName);
    }
    sayFirstName();
}
init();
```
- firstName is accessed due to closure setup (cause init execution context is removed from callstack)


```js
function init()
{
    var firstName="rahul";
    function sayFirstName()
    {
        // # When above method is called execution context created & also clouser is set-up
        console.log(firstName);
    }
    return sayFirstName;    // return reference of the sayFirstName method()
}
let value = init();  
// # Here init() Excution context is removed from callstack but how below is assesed the sayFirstName and also get the value of the firstName
value();   // due to closure setup
```

```js
function outer() {
  let count = 0;

  return function inner() {
    count++;
    console.log("Count:", count);
  };
}

const counter = outer();
counter();  // Count: 1
counter();  // Count: 2
counter();  // Count: 3

```
- outer() runs once and returns inner().
- count is part of outer()'s scope.
- counter keeps accessing count even after outer() has finished.
- That’s a closure.
- ```A closure allows a function to retain access to its parent scope, even after the outer function has returned. It’s useful for creating private variables or maintaining state across multiple function calls```


```js
function doAddition(x) {
  return function (y) {
    return x + y;
  };
}

var add5 = doAddition(4);
console.log(add5(5));

console.log(doAddition(5)(5));
```

- This is a classic example of a closure in JavaScript. A closure is when an inner function "remembers" the variables from its outer (enclosing) function's scope, even after the outer function has finished executing. In this case, the inner function remembers the value of x

- The process of binding the required data with function is called clouser

![05 5](./image/01/img-5.jpg)

---
## Global and Local scope execution
- youTube link ::> https://youtu.be/7QhMQRRBpZ0?si=kLwvp3ol4a02DKYF
```js
const userName="Anurag";
let userAge=25;
var a=50;

function add(){
    const x=5;
    const y=8;
    console.log(x+y);
    console.log(userName);
}

function subtract(){
    const x=5;
    const y=8;
    console.log(x-y);
    console.log(userName);
}
add();
subtract();

```


![01 1](./image/01/img-4.jpg)
---


## Lexical and Block Scope
- youTube link ::> https://youtu.be/dvNqTN_nokg?si=pAg5b4deOq5KBAGi
## 🔍 Scope Chain:
