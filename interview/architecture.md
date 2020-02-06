# Architecture
[[toc]]

## SOLID Principles
The purpose of SOLID design principles
- To make to code more maintainable.
- To make it easier to quickly extend the system with new functionality without breaking the existing ones.
- To make the code easier to read and understand, thus spend less time figuring out what it does and more time actually developing the solution.
#### S — Single responsibility principle [wiki](https://en.wikipedia.org/wiki/Single_responsibility_principle)
- A class should only be responsible for one thing.
- There's a place for everything and everything is in its place.
- Find one reason to change and take everything out of the class.
- Very precise names for many small classes > generic names for large classes.
#### O — Open/closed principle [wiki](https://en.wikipedia.org/wiki/Open%E2%80%93closed_principle)
- An entity should be open for extension but closed for modification.
- Extend functionality by adding new code instead of changing the existing one.
- Separate the behaviors, so the system can easily be extended, but never broken.
#### L — Liskov substitution principle [wiki](https://en.wikipedia.org/wiki/Liskov_substitution_principle)
- Any derived class should be able to substitute his its parent class without the consumer knowing it.
- Every class that implements an interface, must be able to substitute any reference throughout the code that implements that same interface.
- Every part of the code should get the expected result no matter what instance of a class you send to it, given it implements the same interface.
#### I — Interface segregation principle [wiki](https://en.wikipedia.org/wiki/Interface_segregation_principle)
- A client should never be forced to depend on methods it doesn't use.
- Or, a client should never depend on anything more than the method it's calling.
- Changing one method in a class shouldn't affect classes that don't depend on it.
- Replace fat interfaces with many small, specific interfaces.
#### D - Dependency inversion principle [wiki](https://en.wikipedia.org/wiki/Dependency_inversion_principle)
- Never depend on anything concrete, only depend on abstractions.
- High level modules should not depend on low level modules. They should depend on abstractions.
- Able to change an implementation easily without altering the high level code.

## Test-driven development (TDD) [wiki](https://en.wikipedia.org/wiki/Test-driven_development)

## Dry - Don't Repeat Yourself
Every piece of knowledge or logic must have a single, unambiguous representation within a system.

Violations of DRY

"We enjoy typing" (or, "Wasting everyone's time."): "We enjoy typing," means writing the same code or logic again and again. It will be difficult to manage the code and if the logic changes, then we have to make changes in all the places where we have written the code, thereby wasting everyone's time.

How to Achieve DRY

To avoid violating the DRY principle, divide your system into pieces. Divide your code and logic into smaller reusable units and use that code by calling it where you want. Don't write lengthy methods, but divide logic and try to use the existing piece in your method.

DRY Benefits

Less code is good: It saves time and effort, is easy to maintain, and also reduces the chances of bugs.

One good example of the DRY principle is the helper class in enterprise libraries, in which every piece of code is unique in the libraries and helper classes.

## Kiss - Keep It Simple, Stupid
The KISS principle is descriptive to keep the code simple and clear, making it easy to understand. After all, programming languages are for humans to understand — computers can only understand 0 and 1 — so keep coding simple and straightforward. Keep your methods small. Each method should never be more than 40-50 lines.

Each method should only solve one small problem, not many use cases. If you have a lot of conditions in the method, break these out into smaller methods. It will not only be easier to read and maintain, but it can help find bugs a lot faster.

How to Achieve KISS

To avoid violating the KISS principle, try to write simple code. Think of many solutions for your problem, then choose the best, simplest one and transform that into your code. Whenever you find lengthy code, divide that into multiple methods — right-click and refactor in the editor. Try to write small blocks of code that do a single task.

Benefit of KISS

If we have some functionality written by one developer and it was written with messy code, and if we ask for another developer to make modifications in that code, then first, they have to understand the code. Obviously, if the code is written simply, then there will not be any difficulty in understanding that code, and also will be easy to modify.

Summary

While writing any code or module, keep software design principles in mind and use them wisely, make them your habit so you don't need to keep remembering every time. It will save development time and make your software module robust, which could be easy to maintain and extend.
