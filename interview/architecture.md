# Architecture
[[toc]]

## SOLID Principles
The purpose of SOLID design principles
- To make to code more maintainable.
- To make it easier to quickly extend the system with new functionality without breaking the existing ones.
- To make the code easier to read and understand, thus spend less time figuring out what it does and more time actually developing the solution.
### S — Single responsibility principle [wiki](https://en.wikipedia.org/wiki/Single_responsibility_principle)
- A class should only be responsible for one thing.
- There's a place for everything and everything is in its place.
- Find one reason to change and take everything out of the class.
- Very precise names for many small classes > generic names for large classes.
### O — Open/closed principle [wiki](https://en.wikipedia.org/wiki/Open%E2%80%93closed_principle)
- An entity should be open for extension but closed for modification.
- Extend functionality by adding new code instead of changing the existing one.
- Separate the behaviors, so the system can easily be extended, but never broken.
### L — Liskov substitution principle [wiki](https://en.wikipedia.org/wiki/Liskov_substitution_principle)
- Any derived class should be able to substitute his its parent class without the consumer knowing it.
- Every class that implements an interface, must be able to substitute any reference throughout the code that implements that same interface.
- Every part of the code should get the expected result no matter what instance of a class you send to it, given it implements the same interface.
### I — Interface segregation principle [wiki](https://en.wikipedia.org/wiki/Interface_segregation_principle)
- A client should never be forced to depend on methods it doesn't use.
- Or, a client should never depend on anything more than the method it's calling.
- Changing one method in a class shouldn't affect classes that don't depend on it.
- Replace fat interfaces with many small, specific interfaces.
### D - Dependency inversion principle [wiki](https://en.wikipedia.org/wiki/Dependency_inversion_principle)
- Never depend on anything concrete, only depend on abstractions.
- High level modules should not depend on low level modules. They should depend on abstractions.
- Able to change an implementation easily without altering the high level code.

## Test-driven development (TDD) [wiki](https://en.wikipedia.org/wiki/Test-driven_development)
