---
pageClass: php
---
# Php
[[toc]]

## Code
### Write a sample of code showing the nested ternary conditional operator in PHP.
::: warning Answer
```php
$number_class = $number == 0 ? 'blue' : ($number > 0 ? 'green' : 'red');
```

Here we are assigning different strings to the number_class variable based on a numeric value ($number).
:::

### What does the follow code echo?
```php
$a = "PHP";
$a = $a + 1;
echo $a;
```
::: warning Answer
The number `1`.

Note, in PHP 7.2 this throws a warning that a non-numeric value is encountered on the line and does not do the conversion to the `int`, so it echoes `PHP` instead.
:::

### Consider the following code:
```php
$x = NULL;

if ('0xFF' == 255) {
    $x = (int)'0xFF';
}
```
What will be the value of `$x` after this code executes? Explain your answer.
::: warning Answer
Perhaps surprisingly, the answer is neither NULL nor 255. Rather, the answer is that `$x` will equal 0 (zero).

Why?

First, let’s consider whether `'0xFF' == 255` will evaluate to true or false. When a hex string is loosely compared to an integer, it is converted to an integer. Internally, PHP uses is_numeric_string to detect that the string contains a hex value and converts it to an integer (since the other operand is an integer). So in this case, ‘0xFF’ is converted to its integer equivalent which is 255. Since 255 = 255, this condition evaluates to true. (Note that this only works for hex strings, not for octal or binary strings.)

But if that’s the case, shouldn’t the statement `$x = (int)'0xFF'`; execute and result in `$x` being set equal to 255?

Well, the statement does execute, but it results in `$x` being set equal to 0, not 255 (i.e., it is not set to the integer equivalent of `‘0xFF’`). The reason is that the explicit type cast of the string to an integer uses `convert_to_long` (which works differently than the `is_numeric_string` function that was used in evaluating the conditional expression, as explained above). `convert_to_long` processes the string one character at a time from left to right and stops at the first non-numeric character that it reaches. In the case of ‘0xFF’, the first non-numeric character is ‘x’, so the only part of the string processed is the initial ‘0’. As a result, the value returned by (int)'0xFF' is 0, so when the code completes, $x will be equal to 0.
:::

### What will be the output of the code below and why?
```php
$x = 5;
echo $x;
echo "<br />";
echo $x+++$x++;
echo "<br />";
echo $x;
echo "<br />";
echo $x---$x--;
echo "<br />";
echo $x;
```
::: warning Answer
The output will be as follows:
```text
5
11
7
1
5
```
Here’s are the two key facts that explain why:

- The term `$x++` says to use the current value of `$x` and then increment it. Similarly, the term `$x--` says to use the current value of `$x` and then decrement it.
- The increment operator (++) has higher precedence then the sum operator (+) in order of operations.
With these points in mind, we can understand that `$x+++$x++` is evaluated as follows: The first reference to `$x` is when its value is still 5 (i.e., before it is incremented) and the second reference to `$x` is then when its value is 6 (i.e., before it is again incremented), so the operation is `5 + 6` which yields 11. After this operation, the value of `$x` is 7 since it has been incremented twice.

Similarly, we can understand that `$x---$x--` is evaluated as follows: The first reference to `$x` is when its value is still 7 (i.e., before it is decremented) and the second reference to `$x` is then when its value is 6 (i.e., before it is again decremented), so the operation is `7 - 6` which yields 1. After this operation, the value of `$x` is back to its original value of 5, since it has been incremented twice and then decremented twice.
:::

### What will be the values of $a and $b after the code below is executed? Explain your answer.
```php
$a = '1';
$b = &$a;
$b = "2$b";
```
::: warning Answer
Both `$a` and `$b` will be equal to the string `"21"` after the above code is executed.

Here’s why:

The statement `$b = &$a;` sets `$b` equal to a reference to `$a` (as opposed to setting $b to the then-current value of `$a`). Thereafter, as long as `$b` remains a reference to `$a`, anything done to $a will affect `$b` and vice versa.

So when we subsequently execute the statement `$b = "2$b", $b` is set equal to the string `"2"` followed by the then-current value of `$b` (which is the same as `$a`) which is 1, so this results in `$b` being set equal to the string `"21"` (i.e., the concatenation of `"2"` and `"1"`). And, since $b is a reference to `$a`, this has the same affect on the value of `$a`, so both end up equal to `"21"`.
:::

### Consider the following code:
```php
$str1 = 'yabadabadoo';
$str2 = 'yaba';
if (strpos($str1,$str2)) {
    echo "\"" . $str1 . "\" contains \"" . $str2 . "\"";
} else {
    echo "\"" . $str1 . "\" does not contain \"" . $str2 . "\"";
}
```
The output will be:
```php
"yabadabadoo" does not contain "yaba"
```
Why? How can this code be fixed to work correctly?
::: warning Answer
The problem here is that `strpos()` returns the starting position index of `$str2` in `$str1` (if found), otherwise it returns `false`. So in this example, `strpos()` returns `0` (which is then coerced to `false` when referenced in the `if` statement). That’s why the code doesn’t work properly.

The correct solution would be to explicitly compare the value returned by `strpos()` to `false` as follows:
```php
$str1 = 'yabadabadoo';
$str2 = 'yaba';
if (strpos($str1,$str2) !== false) {
    echo "\"" . $str1 . "\" contains \"" . $str2 . "\"";
} else {
    echo "\"" . $str1 . "\" does not contain \"" . $str2 . "\"";
}
```
Note that we used the `!==` operator, not just the `!=` operator. If we use `!=`, we’ll be back to the problem that `0` is coerced to `false` when referenced in a boolean expression, so `0 != false` will evaluate to `false`.
:::

### Determine the value of $pear after executing the code below. What will strlen($pear) return? Explain your answer.
```php
$pear = ‘PEAR ’;
$pear[12] = ‘PHP Extension and Application Repository’;
```
::: warning Answer
This question reveals a few interesting things about the way PHP interprets code. The value of $pear in the code above will be the string “PEAR P” or the string “PEAR ” followed by seven spaces, followed by “P,” which is the first character in the string “PHP Extension and Application Repository.” The value returned by strlen($pear) will thus be 13. Since an element of a string can only consist of one character, and the count of elements within a string starts with 0, $pear[12] sets the 13th character of the string to the letter “P.” Interestingly enough, we chose to set the 13th value of a string that only has five characters. While other language interpreters might have thrown an out-of-bounds index error, PHP is more forgiving and fills in the blanks with empty spaces.
:::

### Determine the output of the code below. Explain your answer.
```php
var_dump(42 == 042);
var_dump(‘042’ == 42);
var_dump(‘042’ === 42);
```
::: warning Answer
This question quizzes the coder on how the PHP interpreter handles numbers and strings.
- `var_dump(42 == 042);` will output `bool(false)` because the PHP interpreter treats leading zeroes as octals. `042` is `32` in decimal, which does not equal 42.
- `var_dump(‘042’ == 42);` will output `bool(true)` because PHP interpreter will coerce the string into an integer but ignore the leading zero. 42 is equal to 42.
- `var_dump(‘042’ === 42);` will output `bool(false)` because the `===` operator performs a stricter comparison and will not coerce the integer into a string.
:::

### Explain why the two code snippets below will evaluate to the same output.
```php
$x = true or false;
var_dump($x);

$x = true and false;
var_dump($x);
```
::: warning Answer
This question is designed to test a coder’s knowledge of the order of operations. The first block of code is more straightforward, evaluating to true because of the “or” operator. The second code block, however, would typically be expected to evaluate to false. Instead, it evaluates to true because of how the PHP interpreter handles the order of operations: “=” is prioritized leading to the following equivalent code snippet:

$x = true; // sets $x equal to true
True and false; // evaluates to false, but does not affect anything
:::

### If $x = 100 + “25%” + “$40” what is the value of $x and why?
::: warning Answer
The answer is $x = 125, because PHP uses automatic type conversion in deciding how to treat variables and values depending on how they are used. When PHP encounters a string during an arithmetic operation, it will interpret any numerical value and ignore the remainder in order from left to right. Strings that don’t start with numbers are evaluated to zero.

$x = 100 + 25 + 0 = 125.
:::

### Predict the output of the code below. Explain your answer.
```php
$x = 2
$y = 4
$z = 6


if($z > $y > $x) {
    echo “true”;
}else{
    echo “false”;
}
```
::: warning Answer
At first glance, one would expect the boolean to evaluate to “true” because 6 > 4 > 2. However, the correct answer is “false” because PHP will first evaluate $z > $y, which returns a boolean value of 1 or true. It is this boolean value of 1 that is compared to the next integer in the chain, bool(1) > $z, which will result in NULL and echo “false.”
:::

### What will be the output of this script?
```php
$a = '1';
$b = &$a;
$b = "2$b";
echo $a.", ".$b;
```
::: warning Answer
21, 21
:::

### What is the problem with the code below? What will it output? How can it be fixed?
```php
$referenceTable = array();
$referenceTable['val1'] = array(1, 2);
$referenceTable['val2'] = 3;
$referenceTable['val3'] = array(4, 5);

$testArray = array();

$testArray = array_merge($testArray, $referenceTable['val1']);
var_dump($testArray);
$testArray = array_merge($testArray, $referenceTable['val2']);
var_dump($testArray);
$testArray = array_merge($testArray, $referenceTable['val3']);
var_dump($testArray);
```
::: warning Answer
The output will be as follows:
```text
array(2) { [0]=> int(1) [1]=> int(2) }
NULL
NULL
```
You may also see two warnings generated, similar to the following:
```text
Warning: array_merge(): Argument #2 is not an array
Warning: array_merge(): Argument #1 is not an array
```
:::

### Explain
`PHP_INT_MAX` is a PHP constant that corresponds to the largest supported integer value (value is based on the version of PHP being run and the platform it is running on).

Assume that `var_dump(PHP_INT_MAX)` will yield `int(9223372036854775807)`.

In that case, what will be the result of `var_dump(PHP_INT_MAX + 1)`? Also, what will be the result of `var_dump((int)(PHP_INT_MAX + 1))`?

NOTE: It’s not important to supply the exact value when answering the question, but rather to explain what will happen and why.
::: warning Answer
The result of `var_dump(PHP_INT_MAX + 1)` will be displayed as a double (in the case of this specific example, it will display `double(9.2233720368548E+18))`. The key here is for the candidate to know that PHP handles large integers by converting them to doubles (which can store larger values).

And interestingly, the result of `var_dump((int)(PHP_INT_MAX + 1))` will be displayed as a negative number (in the case of this specific example, it will display `int(-9223372036854775808))`. Again, the key here is for the candidate to know that the value will be displayed as a negative number, not to know the precise value.
:::

### How would you sort an array of strings to their natural case-insensitive order, while maintaing their original index association?
For example, the following array:
```text
array(
	'0' => 'z1',
	'1' => 'Z10',
	'2' => 'z12',
	'3' => 'Z2',
	'4' => 'z3',
)
```
After sorting, should become:
```text
array(
	'0' => 'z1',
	'3' => 'Z2',
	'4' => 'z3',
	'1' => 'Z10',
	'2' => 'z12',
)
```
::: warning Answer
The trick to solving this problem is to use three special flags with the standard `asort()` library function:

```php
asort($arr, SORT_STRING|SORT_FLAG_CASE|SORT_NATURAL)
```
The function `asort()` is a variant of the standard function `sort()` that preserves the index association. The three flags used above `SORT_STRING`, `SORT_FLAG_CASE` and `SORT_NATURAL` forces the sort function to treat the items as strings, sort in a case-insensitive way and maintain natural order respectively.

Note: Using the `natcasesort()` function would not be a correct answer, since it would not maintain the original index association of the elements of the array.
:::
## IP address
How do you proceed if you need to get a user’s IP address?”
::: warning Answer
This question shows the level of creativity of the developer, as there are many possibilities to find an IP address.  For example, we can use the script : $_SERVER[“REMOTE_ADDR”];
This is the fastest and most obvious answer, but a multitude of other solutions are possible.
:::

## Traits
### What are Traits made for?
::: warning Answer
Traits are an advanced feature of PHP, they allow to create reusable code in a language like PHP. A Trait cannot be generated by itself, the candidate must be familiar with the advanced functionalities of a programming language in which he or she will be required to work. Knowledge of these features is an important indication of the candidate’s familiarity with this language.
:::

## Errors
### Describe the three error types that exist in PHP.
::: warning Answer
Knowledge of error types is fundamental for any developer, especially those who use PHP. This knowledge allows the developer to understand where the errors come from in order to be able to fix them as well as possible.

Here the candidate must first list the error types and then explain them. He must say that there are three errors types: Notices, Warning and Fatal. Then, the candidate must explain that Notices are errors that occur when the error is simple and non-critical, while Warning is a more serious error. In both cases, these errors will not cause the script to stop running. The last error, called Fatal, is much more problematic since it causes the script to stop running.
:::

## PHP 8.0
What’s new in PHP 8.0?
::: warning Answer
The main new features of PHP 8.0 will be the JIT (Just in Time compilation), consistent type erros for internal functions, fatal error for incompatible method signatures and arrays starting with a negative index

A candidate who knows how to answer this specific question proves that he is passionate about programming, and that he keeps up to date with the latest evolution of PHP.

PHP release history:

- PHP 1.0 : 1995
- PHP 2.0 : 1997
- PHP 3.0 : 1998
- PHP 4.0 : 2000
- PHP 5.0 : 2005
- PHP 6.0 : Abandoned version of PHP, never released
- PHP 7.0 : 2015
- PHP 8.0 : 2020/2021
:::

## Good programmer
What do you think are the essential attributes that a PHP developer should have?

::: warning Answer
This job interview question is a classic one, but some answers are expected from a good PHP programmer.

These include logical reasoning, analytical thinking, perseverance, insatiable curiosity, rigor and abnegation.

Each of these qualities is evidence of the candidate’s ability to work as a PHP developer.
:::

## Classes
### What is the role of _construct() and _destruct() methods in a PHP class?
The answer to this interview question determines whether the candidate has any knowledge of object-oriented programming. All objects in the PHP language have construct and destruct methods built-in. The Constructor method is used each time a new class instance is created, it is then called to initialize the properties of this class. The destruct method does not accept any parameters.

::: warning Answer
The answer to this interview question determines whether the candidate has any knowledge of object-oriented programming. All objects in the PHP language have construct and destruct methods built-in. The Constructor method is used each time a new class instance is created, it is then called to initialize the properties of this class. The destruct method does not accept any parameters.
:::

## Constants
### What are the differences between PHP constants and variables?
::: warning Answer
The value of the constant cannot change during the script execution.
:::

### Can the value that was previously assigned to a constant change during script execution?

::: warning Answer
No. When a value has been assigned to a constant, it cannot change during the script execution.
:::

## Functions
### What is the difference between include_once() and require_once(), which one would you use in circumstances where you need to connect to a database, and why?
::: warning Answer
`include_once()` or `include` allows a file to be included, and in cases where the file is missing or has the wrong name, we receive an error message and execution will still continue regardless.

On the other hand, `require_once()` or require would be suitable in cases where a file needs to be included once and if it is missing or has a wrong name then we receive a fatal error and the execution of the program stops.

`require_once` or `require` is a suitable method in cases where a database connection file is involved and helps alleviate the possibility of multiple instances of the same file being included several times.
:::

### What is use of the header() function in PHP?
::: warning Answer
- `header()` is used to redirect from one page to another: `header("Location: index.php")`;
- `header()` is used to send an HTTP status code: `header("HTTP/1.0 this Not Found")`;
- `header()` is used to send a raw HTTP header: `header('Content-Type: application/json')`;
:::

### What is the difference between unset() and unlink()?

::: warning Answer
Using unset() allows the developer to change the variable to an undefined state, while the unlink() command deletes the file that is sent from the system.
:::

### Declare a function, which will only accept the word “Hello” as a parameter.

If the data entered matches what was requested, then the function will display “Hello”. Otherwise it will display “Bye”.
```php
function showMessage($hello = false) {
  echo ($hello) ? 'hello' : 'bye';
}
```
::: warning Answer
This question is a very good opportunity to assess the candidate’s ability to declare functions.
:::

## Arrays
### How to proceed in order to get the quantity of elements in an array?
::: warning Answer
Here, we are dealing with a rather basic interview question about arrays. Knowing how to extract data from an array is part of the basic knowledge for any properly trained junior developer.
If you’re not familiar with the term “array”, here’s a definition :

An array is a data structure that contains a group of elements. Typically these elements are all of the same data type, such as an integer or string. Arrays are commonly used in computer programs to organize data so that a related set of values can be easily sorted or searched.
For example, a search engine may use an array to store Web pages found in a search performed by the user. When displaying the results, the program will output one element of the array at a time. This may be done for a specified number of values or until all the values stored in the array have been output. While the program could create a new variable for each result found, storing the results in an array is much more efficient way to manage memory.

The optimal answer here is to use the count () function.
:::

## Frameworks
### What is PEAR in PHP?
::: warning Answer
PEAR (PHP Extension and Application Repository) is a framework and repository for reusable PHP components. PEAR is a code repository containing all kinds of php code snippets and libraries.

PEAR also offers a command-line interface that can be used to automatically install packages.
:::

### Could you name some PHP frameworks?
::: warning Answer
During the interview, the interviewed candidate must mention at least three PHP frameworks among this list:

- Laravel, a free, open-source, PHP web framework intended for the development of web applications following the MVC architectural pattern and based on Symfony. It’s the most popular PHP framework.
- CodeIgniter, an open-source software rapid development web framework, used to build dynamic sites with PHP.
- Symfony, a PHP web application framework and a set of reusable components and libraries. It is released under the MIT license.
- CakePHP
- FuelPHP
- PHPixie
- Phalcon
- Slim
- Zend Framework
- Yii 2
:::

## Getters and Setters
Why use Getters and Setters?
::: warning Answer
Getters and Setters are methods used to declare or get the value of a private variable. They allow data to be processed, reported and displayed. Within these methods, it is possible to process the data, which will then be assigned within a variable function.
:::

## Functions
### What is the difference between the functions include() and require()?
::: warning Answer
The first one, contrary to the second one, is used to ensure that a file is included within the script during its execution. The candidate can use a demonstration, in which we have for example five files, one.txt, two.txt and so on up to five. The files contain numbers from one to five (a number in each file).
```php
for($i=1; $i<=5; $i++) {
  include "$i.txt";
}
```

The compilation time has been included once in each file. On the other hand, if we make the decision to write require instead of the other command, we will get a fatal error.
Another difference between these two commands is that require always gives a fatal error if the requested file is missing, while include will simply display a warning, and continue to compile the code.
:::

### The value of the input variable is 9,3,5,5,7,8. How do I get the sum of the numbers of this list?
::: warning Answer
```php
$input = '9,3,5,5,7,8';
echo array_sum(explode(',', $input));
```
The explode function is one of the most frequently used in PHP language, so it is very important to understand if the candidate masters this function.
:::

### What is the correct way to create a function in PHP?
::: warning Answer
The answer to this very easy interview question is:
```php
function functionName() {
  // Function code.
}
```
A candidate who is unable to answer it does not have sufficient PHP skills
:::

### What is the mail() function used for?
::: warning Answer
The answer to this question is that this function can be used to send an email from a PHP script.
:::

### What are the differences between echo and print in PHP?
::: warning Answer
`echo` and `print` are largely the same in PHP. Both are used to output data to the screen.

The only differences are as follows:

- `echo` does not return a value whereas `print` does return a value of 1 (this enables `print` to be used in expressions).
- `echo` can accept multiple parameters (although such usage is rare) while print can only take a single argument.
:::

## Scope
### How many scope levels exist in the PHP language? Describe them.
::: warning Answer
This interview question shows that the future PHP developer understands the essence of programming and is not just typing code without thinking beforehand. Moreover, this issue is important from the standpoint of data security, which is a key issue in our time.

The candidate must mention here the three existing scope levels of PHP which are Private, Public and Protected, and explain that the first level is visible only in his own class, the second one is visible by any script performing accessing the class and the last one is visible only by the parent classes.
:::

## Operators
### Bitwise operators
::: warning Answer
```text
& (Bitwise AND) 
| (Bitwise OR) 
^ (Bitwise XOR )
~ (Bitwise NOT)
>> (Bitwise Right Shift)
<< (Bitwise Left Shift)
```
:::

### Why should you use === and not ==?
::: warning Answer
=== and == are two PHP comparison operators.

First of all === is faster than ==, because it does not convert the different types. In addition, if you want to check a particular type === will do exactly what you requested, while == will convert the data only for a limited time and will try to use both types of operators.
:::

### How to combine two strings in PHP?
::: warning Answer
To concatenate two string variables, just use the dot(.) operator

This results in a single string.
:::

## MySQL
### How to connect a MySQL database using PHP?
::: warning Answer
MySQL is the most popular database system used with PHP. The answer to this interview question is to use mysql_connection function.
:::

## Sessions
::: tip Read More
- [www.w3schools.com/php/php_sessions.asp](https://www.w3schools.com/php/php_sessions.asp)
:::

### What is the difference between a session and cookies?
::: warning TIP
A session stores the value on the server and cookies store the value in the user’s browser.
:::

### What are PHP sessions and how do they work?
::: warning TIP
What you’re really asking is whether they know how to use session_start(). It either creates or resumes a session based on an identifier that is sent to the server via a GET or POST request or a cookie. The most common use case scenario on the web is when a website won’t let you comment or post without first prompting a login. How does it know whether you’re logged in? One way would be to place a cookie in the user’s browser; on every request the cookie is sent server-side, where PHP can be used to determine which information is sent back and displayed to the client. While session_start() saves session data in files by default, it is also possible to store sessions directly in the database.
:::
::: warning Answer
When you work with an application, you open it, do some changes, and then you close it. This is much like a Session. The computer knows who you are. It knows when you start the application and when you end. But on the internet there is one problem: the web server does not know who you are or what you do, because the HTTP address doesn't maintain state.

Session variables solve this problem by storing user information to be used across multiple pages (e.g. username, favorite color, etc). By default, session variables last until the user closes the browser.

So; Session variables hold information about one single user, and are available to all pages in one application.

If you need a permanent storage, you may want to store the data in a database.
:::


### Useful functions for session control?
::: warning Answer
```php
// Start the session
session_start();
// remove all session variables
session_unset();
// destroy the session
session_destroy();
// Set session variables
$_SESSION["favcolor"] = "green";
```
:::

### How are classes loaded in PHP?
::: tip Read More
- [www.php.net/manual/en/language.oop5.autoload.php](https://www.php.net/manual/en/language.oop5.autoload.php)
:::
::: warning Answer
This is a good way to gauge a developer’s understanding of autoloading. Whenever a class is instantiated, a function is triggered. You can register a function with the spl_autoload que detailed below.
```php
bool spl_autoload_register ([ callable $autoload_function [, bool$throw = true [, bool $prepend = false ]]] )
```
:::

## General
### How can you tell if a number is even or odd without using any condition or loop?
::: warning Answer
```php
$arr=array("0"=>"Even","1"=>"Odd");

$check=13;

echo "Your number is: ".$arr[$check%2];
```
:::
### What error types have you faced and how did you fix them?
### If you need to generate random numbers in PHP, what method would you follow?
### How xdebug is configured?
::: warning Answer
```text
xdebug.remote_enable=1
zend_extension="/Applications/DevDesktop/php7_1/ext/xdebug.so"
```
:::

### Explain how you can update Memcached when you make changes to PHP?
::: warning Answer
When PHP changes you can update Memcached by

- Clearing the Cache proactively: Clearing the cache when an insert or update is made
- Resetting the Cache: It is similar to the first method but rather than just deleting the keys and waiting for the next request for the data to refresh the cache, reset the values after the insert or update.
:::

### Explain whether it is possible to share a single instance of a Memcache between multiple PHP projects?
::: warning Answer
Yes, it is possible to share a single instance of Memcache between multiple projects. Memcache is a memory store space, and you can run memcache on one or more servers. You can also configure your client to speak to a particular set of instances. So, you can run two different Memcache processes on the same host and yet they are completely independent. Unless, if you have partitioned your data, then it becomes necessary to know from which instance to get the data from or to put into.
:::

### Is it possible to use COM component in PHP?
::: warning Answer
Yes, it's possible to integrate (Distributed) Component Object Model components ((D)COM) in PHP scripts which is provided as a framework.
:::

### What is the default session time in PHP?
::: warning Answer
The default session time in php is until the closing of the browser
:::

### Is it possible to destroy a cookie?
::: warning Answer
Yes, it is possible by setting the cookie with a past expiration time.
:::

### Is it possible to extend the execution time of a PHP script?
::: warning Answer
The use of the set_time_limit(int seconds) enables us to extend the execution time of a PHP script. The default limit is 30 seconds.
:::

### How can we pass the variable through the navigation between the pages?
::: warning Answer
It is possible to pass the variables between the PHP pages using sessions, cookies or hidden form fields.
:::

### What is the difference between characters \034 and \x34?
::: warning Answer
\034 is octal 34 and \x34 is hex 34.
:::

### What are the three classes of errors that can occur in PHP?
::: warning Answer
The three basic classes of errors are notices (non-critical), warnings (serious errors) and fatal errors (critical errors).
:::

### Is it possible to protect special characters in a query string?
::: warning Answer
Yes, we use the urlencode() function to be able to protect special characters.
:::

### Php magic methods
::: warning Answer
```php
public function __construct() {}
public function __destruct() {}
public function __get() {}
public function __set() {}
public function __call() {}
public function __callStatic() {}
public function __sleep() {}
public function __wakeup() {}
public function __clone() {}
public function __toString() {}
public function __invoke() {}
public function __debugInfo() {}
```

Example
```php
class Animal{
 
  public function __construct() {
    $this->created = time();
    $this->logfile_handle = fopen('/tmp/log.txt', 'w');
  }
 
  public function __destruct() {
    fclose($this->logfile_handle);
  }
}
```
:::

### Php override

### Php overload

## Php functions
### Array functions
```php
array_key_exists ( mixed $key , array $array ) : bool
in_array ( mixed $needle , array $haystack [, bool $strict = FALSE ] ) : bool
array_diff_key ( array $array1 , array $array2 [, array $... ] ) : array
array_diff ( array $array1 , array $array2 [, array $... ] ) : array
array_map ( callable $callback , array $array1 [, array $... ] ) : array
unset ( mixed $var [, mixed $... ] ) : void
range ( mixed $start , mixed $end [, number $step = 1 ] ) : array
shuffle ( array &$array ) : bool
is_array ( mixed $var ) : bool
is_bool ( mixed $var ) : bool
is_callable ( mixed $var [, bool $syntax_only = FALSE [, string &$callable_name ]] ) : bool
function_exists ( string $function_name ) : bool
method_exists ( mixed $object , string $method_name ) : bool
array_keys ( array $array ) : array
array_keys ( array $array , mixed $search_value [, bool $strict = FALSE ] ) : array
array_values ( array $array ) : array
count ( mixed $array_or_countable [, int $mode = COUNT_NORMAL ] ) : int
array_sum ( array $array ) : number
array_filter ( array $array [, callable $callback [, int $flag = 0 ]] ) : array
array_reduce ( array $array , callable $callback [, mixed $initial = NULL ] ) : mixed
array_walk ( array &$array , callable $callback [, mixed $userdata = NULL ] ) : bool
array_slice ( array $array , int $offset [, int $length = NULL [, bool $preserve_keys = FALSE ]] ) : array
array_chunk ( array $array , int $size [, bool $preserve_keys = FALSE ] ) : array
var_dump()
var_export()
random_bytes();
random_int();
preg_replace_callback_array();
password_hash();
password_verify();
```
### Others
```php
$trace = debug_backtrace();
trigger_error(
    'Undefined property via __get(): ' . $name .
    ' in ' . $trace[0]['file'] .
    ' on line ' . $trace[0]['line'],
    E_USER_NOTICE);
```
### Lamda functions
```php
$func = function($value) {
    return $value * 2;
};

print_r(array_map($func, range(1, 5)));
```
## Common errors
