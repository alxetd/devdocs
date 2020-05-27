# Javascript
## Sources
- [https://www.w3schools.com/js/default.asp](https://www.w3schools.com/js/default.asp)
- [https://dev.to/damcosset/higher-order-functions-in-javascript-4j8b](https://dev.to/damcosset/higher-order-functions-in-javascript-4j8b)

## General
Arrays are objects. Arrays are a special type of objects. The typeof operator in JavaScript returns "object" for arrays.

JavaScript does not support arrays with named indexes. In JavaScript, arrays always use numbered indexes.

Functions are objects. First class functions. Everything you can do with other types you can do with functions. Assign them to variables, pass them around, create them on the fly.
## Memory hoisting
## Scope & closures
## This context
## Prototype
## Promises
## Events

## Miscellaneous
```javascript
dir(document);
```
```javascript
console.dir();
console.log();
```
```javascript
document.getElementById('id');
document.getElementsByClassName('className');
document.getElementsByTagName('p');
document.querySelectorAll('h1');
document.getElementsByName('name');

document.createElement('div');
document.body.appendChild(element);
document.body.insertBefore(element, target);

document.getElementById('id').addEventListener('click', functionName);
```

```javascript
document.getElementById('id').innerText = 'new text';
```

### Functions
```javascript
encodeURIComponent();
decodeURIComponent();
isNaN();
```

```javascript
Math.random();
Math.max(10, 20);
Math.min(0, 150, 30, 20, -8, -200);
Math.round(5.3);
Math.sqrt(9);
Math.PI;
Math.pow(8, 2);
Math.abs(-4.7);
Math.ceil(4.4)
Math.floor(4.7);
```

```javascript
JSON.stringify(object);
var = jsonValue = JSON.parse(object);
```

### Arrays
```javascript
var a = [1,2,3,4,5];

a.splice(2,1);
a.push(10);
a.pop();
a.shift();
a.unshift(1);
a.sort();
a.slice(1);
a.reduce(function(total, value) { return total + value; })
a.reduceRight(function(total, value) { return total + value; })
a.every(function(value) { return value >= 0; })
a.some(function(value) { return value < 0; })
a.find(function(value) { return value > 0; })
a.findIndex(function(value) { return value > 0; })
a.map(function(value) { return value * 2; });
a.filter(function(value) { return value > 5; });
a.forEach(function(i) { console.log(i); });
delete a[0];           // Changes the first element in fruits to undefined

var myGirls = ["Cecilie", "Lone"];
var myBoys = ["Emil", "Tobias", "Linus"];
var myChildren = myGirls.concat(myBoys);
myBoys.sort();
myBoys.reverse();

var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});

var fruits = ["Apple", "Orange", "Apple", "Mango"];
var a = fruits.indexOf("Apple")
var b = fruits.lastIndexOf("Apple");

Array.isArray(fruits);

Math.max.apply(null, arr);
Math.min.apply(null, arr);
```

### Strings
```javascript
var str = "This is a string";
var pos = str.indexOf("is");
var res = str.slice(7, 13);
var res = str.substring(7, 13);
var res = str.substr(7, 6);
var n = str.replace("Microsoft", "W3Schools");
var n = str.replace(/MICROSOFT/i, "W3Schools");
var n = str.replace(/Microsoft/g, "W3Schools");
var text2 = str.toUpperCase();
var text2 = str.toLowerCase();
var text3 = str.concat(" ", text2);
var str = str.trim();
var char = str.charAt(0); 
var char = str.charCodeAt(0); 
var char = str[0];
var chars = str.split("");
```

### Dates
```javascript
var d = new Date();
d.toDateString();
d.toString();
d.toUTCString();
Date.parse("March 21, 2012"); // returns the number of milliseconds

year = d.getFullYear();
month = d.getMonth();
day = d.getDate();
hours = d.getHours();
minutes = d.getMinutes();
seconds = d.getSeconds();
weekDay = d.getDay();

d.setFullYear(2020);
d.setTime();

```

### Numbers
```javascript
var x = 9.656;

x.toExponential(2);
x.toFixed(0);
x.toPrecision(2);
x.toString();
(123).toString();
(100 + 23).toString();
x.valueOf();
z = Number("10");
parseInt("10");
parseFloat("10");
```


```javascript
Number.POSITIVE_INFINITY;
Number.MIN_VALUE;
Number.NaN;
```

### Useful snippets
```javascript
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
```
