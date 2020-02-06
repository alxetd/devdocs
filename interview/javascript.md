---
pageClass: javascript
---
# Javascript
[[toc]]

## Code
### Write code to convert an array of strings to an array of the lengths of those strings.
This should be a relatively easy exercise for someone familiar with Javascript to complete. An ideal solution to this problem should look something like this:
```javascript
var words = ["the", "quick", "brown", "fox"];
var wordLengths = words.map(word => word.length);
// wordLengths = [3, 5, 5, 3]
```
Another version might use forEach:
```javascript
var words = ["the", "quick", "brown", "fox"];
var wordLengths2 = [];
words.forEach(word => wordLengths2.push(word.length));
```
Finally, using an old-fashioned for loop will do the trick:
```javascript
var words = ["the", "quick", "brown", "fox"];
var wordLengths3 = [];
var i;
for (i = 0; i < words.length; i++)
{ 
  var word = words[i];
  wordLengths3.push(word.length);
}
```
The last two should be considered a bit of a red flag as it shows that the candidate is not very familiar with the most common of higher-order functions: map.

## General

### What are the data types defined in javascript?
::: warning Answer
```text
String
Number
Boolean
Undefined
Null
BigInt
Symbol
Object
```

### What is the use of isNaN function?
::: warning Answer
isNan function returns true if the argument is not a number otherwise it is false.
:::

### Which symbol is used for comments in Javascript?
::: warning Answer
// for Single line comments and

/*

Multi

Line

Comment

*/
:::

### What is === operator?
::: warning Answer
=== is called as strict equality operator which returns true when the two operands are having the same value without any type conversion.
:::

### Explain how can you submit a form using JavaScript?
::: warning Answer
To submit a form using JavaScript use `document.form[0].submit();`
:::

### Does JavaScript support automatic type conversion?
::: warning Answer
Yes JavaScript does support automatic type conversion, it is the common way of type conversion used by JavaScript developers
:::

### What is a closure?
::: warning Answer
Wikipedia says:
`…a closure is a record storing a function together with an environment.`

A closure can be tricky to define on the spot but any mention of “function” together with “environment” or “scope” can be considered to be on the right track. A closure gives a function access to variables that would be unavailable to it without the closure.
:::

### It has become common to wrap the contents of a Javascript file in a function. Why is this done?
::: warning Answer
This technique has been used to create a kind of namespace for a module so that variables defined in the module are private and therefore will not clash with variables in the global namespace or in other modules.

Here is an example:
```javascript
var queue = (function () {
 
    var items = [];
   
    return {
      enqueue: function (item) {
        items.push(item);
      },
   
      dequeue: function () {
        if (items.length &gt; 0) {
          var next = items[0];
          items.shift();
          return next;
        } else {
           throw "Cannot dequeue from an empty queue";
        }
      }
    };
  })();
```
In the above implementation of a queue data structure (another good in-person interview question) the variable items is private to the implementation and is not viewable or modifiable by clients of a queue.

This technique is known as “Immediately Invoked Function Expression” or IIFE. You can read more about it on the Mozilla Developer Network and on Wikipedia.

This technique can be generally useful for data hiding and namespacing but modern Javascript bundlers like webpack have become popular for achieving the same effect.
:::

### What are Promises used for?
::: warning Answer
Promises are used for asynchronous programming. They allow Javascript programs to be written in a non-blocking fashion just as using normal callbacks do, but without the mental overhead of that technique. People often refer to the callback hell that often occurs when using callbacks to achieve asynchrony. Promises were created to alleviate this problem.
:::

### Give an example of combining multiple Promises.
::: warning Answer
There are several ways that multiple Promises can be combined. The most important one (and the one that any candidate should absolutely be aware of) is the then() method of a Promise. This is the way that Promises are sequenced; that is, when functions that return Promises must be called on values contained in previously run Promises.

Another method is `Promise.all()` which is used to create a single Promise from multiple independent Promises. In this case the new Promise is resolved when all of the given Promises have been resolved.

Finally, there’s `Promise.race()` which is similar to `Promise.all()` in that it creates one Promise from several others but differs in that the new Promise is resolved when only one of the given Promises resolve, in particular, the one that resolves first.
:::

### What are the async / await keywords used for?
::: warning Answer
Promises have been successful at alleviating the problems associated with a strictly callback solution to asynchronous programming but they can be difficult to use when lots of Promises are involved and must be sequenced with then() as well as having to handle errors associated with all that chaining.

The async / await keywords are used to allow developers to write code that feels very much like old-fashioned imperative code -or sequential code- but that is still asynchronous.

Candidates should know when it is appropriate and possible to use these keywords. In particular they should know that async can only be placed before the function keyword on a function definition. This marks the function as returning a Promise. The await keyword can only be used inside such an asynchronous function and must be placed before a call to a function that will return a Promise.
:::

## Functions
```javascript
typeof
```


## History
### What is JavaScript?
::: warning Answer
JavaScript is a client-side as well as server side scripting language that can be inserted into HTML pages and is understood by web browsers. JavaScript is also an Object based Programming language

JAVA is a compiled language and JavaScript is a script language. What this generally implies is that JAVA is not going to be changing how it's code works at runtime (although, that's not precisely impossible), and JavaScript is likely to.
:::

### Enumerate the differences between Java and JavaScript?
::: warning Answer
Java is a complete programming language. In contrast, JavaScript is a coded program that can be introduced to HTML pages. These two languages are not at all inter-dependent and are designed for the different intent. Java is an object - oriented programming (OOPS) or structured programming language like C++ or C whereas JavaScript is a client-side scripting language.
:::
