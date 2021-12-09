### Overview

Workshop dedicated to broadening knowledge of timer methods in Javascript. You will create two different timers utilizing `setTimeout` and `setInterval` to compare and contrast their functionality and see this functionality occur in the browser via DOM scripting.

To begin, open `timers.js` and follow the scaffolded instructions. All of the CSS for this workshop is provided as boilerplate.

### Objective

A webpage that contains two sets of buttons. One set controls a `Timeout` timer and the other set controls an `Interval` timer.

### Topics

> - Two main Javascript timing methods
> - DOM scripting

### Prior Knowledge

> - Basic Javascript
> - DOM scripting

### Context

There are two key differences between `setTimeout` and `setInterval`. `setTimeout` is a method that _executes a function once_ after a delay defined in milliseconds by the programmer. `setInterval` is a method that _executes a function repeatedly_ after a delay defined in milliseconds by the programmer. Both come with pair methods `clearTimeout` and `clearInterval` that can be used to cancel the timer based on a series of logical conditions.

Speaking generally, `setInterval` is the more rich timing method; it also requires more logic to behave as expected.

#### setInterval Syntax:

`variableInterval = setInterval((props) => { what happens every function call }, milliseconds between function calls)`

`clearInterval(variableInterval)`

#### setTimeout Syntax:

`variableTimeout = setTimeout((props) => { what happens at time out}, milliseconds until time out)`

`clearTimeout(variableTimeout)`

### Additional Resources

- [Modern Javascript's Scheduling Article](https://javascript.info/settimeout-setinterval)
- [Freecodecamp's Javascript Timing Events Article](https://www.freecodecamp.org/news/javascript-timing-events-settimeout-and-setinterval/)
