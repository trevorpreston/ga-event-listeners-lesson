# WDI-Amoeba W2-D1:  Javascript Event Listeners 102

## Learning Objectives:
1. Understand what we're really doing when we code in JS.
2. Be able to explain the role of the browser and the web API in events.
3. Understand the JS event loop.
4. Be able to apply mouse events with confidence!  (click, mouseover, mouseout)
5. Use event listeners with the DOM.


## Part 1-1: Demo Event Listeners:

1. Show .addEventListener syntax.  Show with callback inside and callback outside.
2. Show .addEventListener('click')
3. Show .addEventListener('mouseover')
4. Show .addEventListener('mouseout')

## Part 1-2: Event Listener Lab:
No starter files!  Create a directory called "events-and-timers-labs"
0. In that directory, create another directory called "timers".  In there, create a new index.html file and link both a new css and new javascript file.
1. Create a button with click event listener that console logs 'Hi hi'.
2. Create another button click event listener that console logs '0'.
3. Modify that button so that everytime you click it the button adds 5 each time.  (i.e. 0... 5...)
4. Create another button that when you mouseover it, the button says "on!".  Then when the mouse goes off it says "off!"


## Part 2-1 Demo setInterval and setTimeOut:
1. show setInterval that repeats a "hello world" every 5 seconds.
2. show how to give setInterval a name so that it can be removed later.
3. show how to clearInterval.
4. show how setTimeout does the same thing and has the same format.
5. explain what this stuff is really works.  Callstack, call queue, webAPI etc.

## Part 2-2 setTimeout/Interval Lab:
1. Create a new javascript file called "timelord.js"
2. Create an interval named "auto-counter" that initially console.logs "0" then counts up by 1 every 5 seconds, console logging the result.
3. Create a function that clears the interval and logs "R.I.P. counter"
4. Go back to your files from part 1.  Add a 3rd button that pops up an alert "<your preference> peanut butter is better" after 5 seconds, where <your preference> is replaced with either "crunchy" or "smooth" depending on your preference.  (hint: crunchy is better, right?).
