# Scope
- The scope is generally referred to as the logical boundary within which your variables are accessible.
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




# 🔍 Scope Chain
- YouTube URL : https://www.youtube.com/watch?v=uH-tVP8MUs8&t=47s
- Lexical means order,hirerachy and sequence (means where the inner funciton is physically parsent inside the outer function )(location info)
- When Execution context is creare than also lexical environment is also created
-  Lexical Environment === Local memory (containe current scope + reference of outer scope )
- Lexical Scope defines how those environments are linked together
- Lexical environment is the local memory along with lexical environment of the it's parent(referenc of parent local memory).
- A lexical environment in JavaScript is a data structure that stores variables and functions defined in the current scope, along with references to all outer scopes. It is also known as the lexical scope.
- Lexical enviroment = current scope + reference of outer scope.
- Lexical scope means that the scope of a variable is determined by its position in the source code.
- The chain of lexical environments is called the scope chain.
- Eache execution context create lexial environment and this contain current lexical environment + reference to lexical environment of it's parent

### Working of scop chain
- When a variable is accessed, the JavaScript engine follows a specific lookup process based on **lexical scoping** and the **scope chain**.

### 🪜 Step-by-Step Lookup

1. **Check the variable in the current lexical environment** (local/function/block scope).
2. **If not found**, follow the **reference to the outer lexical environment** (parent scope).
3. **Check in the parent's scope.**
4. **Continue this process** recursively until reaching the **global scope**.
5. **If not found in the global scope**, the outer reference becomes `null`, and JavaScript throws a:

```js
// # ReferenceError: variableName is not defined
function outer() {
  let a = 10;

  function inner() {
    console.log(a); // ✅ Found in outer
    console.log(b); // ❌ ReferenceError --> stop the execution --> cleanup stacks --> Garbase collector clean the heap if function does not have any reference & closure
  }

  inner();
}

outer();

```

- Consider a real world example House(global scope) and room inside(funciton),item in rooms (variable), doors(scope chaining,reference of outer lexical scope)

```js
// # Big House (gloabl lexical environment of gloabl scope)
// # This door create the scope chaining between diffenrt house (differ execution context);
let tv="sony";
let fridge="LG";
function bedroom()
{   // Lexical end bedroom
    let bedroom="King Size";
    function studyRoom()
    { // Lexical env study romm + reference of outer pareent lexical env by opening doors
      let books="maths";
      console.log(tv);  // need to fresh the mind by watching tv 
      console.log(fridge); // need to dring some water  
    }
    studyRoom();
}

bedroom();

```


- scope chain works independently per child.
```js
let parentItem = "House Key"; // Global scope (Parent's item)

function room1() {
  let room1Item = "Football";
  console.log(parentItem); // ✅ Accessible
  console.log(room1Item);   // ✅ Own item
  // console.log(son2Item); // ❌ Not accessible
}

function room2() {
  let room2Item = "Laptop";
  console.log(parentItem); // ✅ Accessible
  console.log(room2Item);   // ✅ Own item
}

function room3() {
  let room3Item = "Book";
  console.log(parentItem); // ✅ Accessible
  console.log(room3Item);   // ✅ Own item
}

function room4() {
  let room4Item = "Guitar";
  console.log(parentItem); // ✅ Accessible
  console.log(room4Item);   // ✅ Own item
}

// Each son goes to his room
room1();
room2();
room3();
room4();
```


# Closure 
- A closure is a function bundled with its lexical environment — it can remember variables from where it was created, not just where it’s called.
- The process of binding the required data (bind reference not copy) with function is called clouser
- inner function closes over outer funciton variables ---> format a closure
- YouTube link ::> https://www.youtube.com/watch?v=ThJOl1gqIjs

![05 5](./image/01/img-5.jpg)

```js
function outerFunction()
{
    let name="developer";
    function innerFunction()
    {
        console.log(name);
    }
    innerFunction();
}

outerFunction();    // normal execution 
innerFunction();    // ReferenceError: innerFunction is not defined
```


```js
function outerFunction()
{
    let name="developer";
    return function innerFunction()
    {
        console.log(name);
    }
    // # inside innerFunciton ,it's form a clouser with the vaiable  which is part of the oueterFunciton lexical scope
    // # innerFunciton bind with the variable of the outerFunction and create clouser
}

let value=outerFunction();    // return reference of innerFunciont()
// # After returning of outerFuntion their execution context will be completley removed from callStack 
value(); // developer print
// # innerFuncitn is accessible causee in heap is now referenced is by value (garbeage not consider as dead object)
```


```js
// # One way
function x()
{
    let a=5;
    function y()
    {
        console.log(a);
    }
    return y;
}

let z=x();
z();       // 5

// # Second Way
function x()
{
    let a=5;
    return function y()
    {
        console.log(a);
    }
}

let z=x();
z();       // 5
```
### Application of the Closure
- 
1. Data Privacy / Encapsulation : Closures allow variables to be private, preventing direct access from the outside.
- count is private. Only the returned function can access it — this is closure in action.
```js
function createCounter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
```



2. Function Factories : You can use closures to create customized functions.
- greetHello remembers msg = "Hello" via closure.
```js
function greet(msg) {
  return function (name) {
    console.log(`${msg}, ${name}`);
  };
}

const greetHello = greet("Hello");
greetHello("Alice"); // Hello, Alice

```



3. Event Handlers / Callbacks : Closures help preserve data even after the outer function finishes execution.
- 👉 The click handler remembers count due to closure, even after setupButton() has finished.
```js
function setupButton() {
  let count = 0;

  document.getElementById("btn").addEventListener("click", function () {
    count++;
    console.log("Clicked:", count);
  });
}

setupButton();
```



4. setTimeout / setInterval : Closures are useful when delaying logic.
- 👉 The inner function remembers msg after delayMessage() has finished — thanks to closure.
```js
function delayMessage(msg) {
  setTimeout(function () {
    console.log(msg);
  }, 1000);
}

delayMessage("Hello after 1 sec");

```



| Concept       | Real World Analogy                 | JavaScript Equivalent                          |
|---------------|------------------------------------|-------------------------------------------------|
| Scope Chain   | Child goes to Dad → then Grandpa   | Inner function looks up through outer scopes   |
| Closure       | Child remembers Dad’s toy          | Function remembers variables from parent scope |





# Function
- “In JavaScript, function code is stored in the heap as an object. When the function is called, the engine creates an execution context in the stack, which references the function code in the heap. This keeps memory efficient and allows reuse of the function definition.”
- This execution context includes the below things:
  - `this`
  - Parameters
  - Local variables
  - A reference to the outer lexical environment (for closures)
  - A pointer to the function code (which is used to manages local state of the callstack)

- Each function object created in different memory location in heap also nested function

```js
function fun1(){}
function fun2(){}
let a=fun1();  // return undefined cause in js each function by default return undefined
let b=fun2();
console.log(a);  // undefined
console.log(b);  // undefined
console.log(a==b); // true 
console.log(a===b); // true
```


```js
function fun1(){}
function fun2(){}
let a=fun1;
let b=fun2;
console.log(a);  // referernce to fun1
console.log(b);  // referernce to fun2
console.log(a==b); // false (differ reference) 
console.log(a===b); // false (same function object but differ reference value)
```


- Also Nested funciton get different memory location in heap
- In JavaScript, the outer function gets memory during the parsing phase. The inner function is not created or stored in memory until the outer function is actually called. When that happens, the inner function is created and forms a closure by capturing the outer function's variables via lexical scope.
- Closure is formed during the execution phase, when an inner function is created inside an outer function and retains access to the outer function’s variables. This happens at runtime, not during memory allocation.
```js
function outer()
{
    let name="Hellow"
    return function inner()   // It created in heap if called outer() otherwise only outer() get moemory in Heap during memory creation phase
    {
        console.log(name);
    }
}
let a=outer;
let b=outer();   // inner() function object is created with closure in heap and return their reference
// # closure is linking betweeen child funciton object in heap
console.log(a);  // referernce of outer
console.log(b);  // referernce to inner
console.log(a==b); // false (differ reference) 
console.log(a===b); // false (same function object but differ reference value)
```

- Closure is a link between the inner (child) function and the outer function’s memory stored in heap.
- Closure is a connection made between inner function and outer function's data, so the inner function can use that data later.
- An inner function doesn't store the outer variables directly. Instead, it keeps a reference to the entire outer scope. This is like knowing the address of a house — if you want to use something (like a TV), you go through the house. That’s what closure does: it links the inner function back to its lexical environment.
- Functions object is creates in heap but this like a blueprint(shared)(prompt the reusabilty concept) in heap and creation of their variabel data on stack so that each function get their own scop(house) and things(house things like tv etc..) and user according to their requirement.
- If vairble is created in funciton object(heap) than, each funtion get commoon house staff (not useable according to thier requiremnt) and fail the concept of reuseabilty.


### ✅ A Closure is Formed Only When:

1. A function is defined inside another function
2. The inner function uses variables from the outer function
3. The inner function is returned or passed somewhere, so it outlives the outer 


- closure is formed during execiton phase of outer()  (but inner() function object created in heap at memory creation phase)
- inner() is created as a function object in the heap.
- It remembers the lexical environment in which it was created (i.e., inside outer()).
- But: Since inner() does not access any variable from outer(),
👉 no variables are captured — this is called an empty closure.
- A closure is still formed, but it is empty — because the inner function does not access any variables from the outer scope.
- So, closure is formed at this point — during the execution phase, when inner() is defined, but it's empty.
-  The closure object contains references (not actual values) to the variables of the outer scope that are used by the inner function.
- The closure is not just the inner function — it’s the inner function along with the closure object that holds the outer variables it needs.
- A closure = inner function + the references to the outer scope variables it uses.
- Closure is created during the execution of the outer, and becomes active when the inner is used (when inner() is invoked).
```js
// # Not form the clouser
// # inner not user outer scope
// # inner() is not passed anywehere and cleare the context (so become dead object)(not have any reference so free up the memory by garbage collector)
// # Closuer is not formed during creation phase
# 
function outer()
{
    let a=10;
    function inner()
    {
        console.log("Hellow");
    }
    inner();
}

outer();
```


```js
// # closure is created during exection phase of the outer and inner() is invoked
// # Formatio of clouse is happen during the creation phase of the outer and is become active during executuon pahse(inner() invoked)
function outer()
{
    let a=10;
    function inner()
    {
        console.log(a);
    }
    inner();
}

outer();
```


```js
debugger
function x()
{
    let a=10;
    function y()
    {
        let b=20;
        function z()
        {
            console.log(a,b);
        }
        z();
        console.log(a);
    }

    y();
}
x();
```
- When a variable is used in a closure, JavaScript moves it from the stack to the heap, specifically into a closure environment object, so it remains accessible by reference.



```js
function outer() {
  let a = 100; // 👈 Normally stack
  function inner() {
    console.log(a); // 👈 Captured in closure
  }
  return inner;
}

const fn = outer(); // a stays alive in heap!
fn(); // Still prints 100 even though outer is gone

```



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




# Notes
- Block scope (or nested block scope) give memory to function if it is used(invoked) or not used(not call) in that scope
- But inner function not get memory unitll tehy not used(not called) in that scope.
- When block is created than execution context is not create (used outer scope memory) but lexical enviroment is created.
- When function is created than execution context(use own local scope) & lexical environment is created.
- Block lexical environments are also freed after execution finishes — just like function scopes.



```js
debugger
{
    let a=100;
    function bro(){};// get memory duration creation phase
    console.log("block-1");
    {
        let b=100;
        function brosfd(){};        // get memory duration creation phase
        console.log("block-2");
    }
}
function amu1()
{
    let a=10;

    function amu2()        // not get memory duration creation phase cause not called 
    {
        console.log(a);
    }
    function amu3()        // not get memory duration creation phase cause not called
    {

    }
    {
        let a=100;
        function bro(){}
        console.log("block-1");        // get memory duration creation phase
        {
            let b=100;
            function brosfd(){}
            console.log("block-2");        // get memory duration creation phase
        }
    }
}
amu1();
```


| Concept                  | Function Scope       | Block Scope (`{}`)     |
|--------------------------|----------------------|--------------------------|
| Creates Execution Context? | ✅ Yes              | ❌ No                   |
| Creates Lexical Environment? | ✅ Yes           | ✅ Yes                 |
| Added to Scope Chain?    | ✅ Yes              | ✅ Yes                 |
| Hoisting behavior        | `var`, `let`, `const` | Only `let`, `const`   |
| Memory Lifetime          | Until function exits / closure | Until block exits |


## Learn below link today
- https://www.youtube.com/watch?v=d4_hcQkGkfI
- https://www.youtube.com/watch?v=lA7CGz3iHyI&t=101s