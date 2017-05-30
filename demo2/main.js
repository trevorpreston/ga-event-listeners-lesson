console.log('javascript here')

/* Part 2 - setInterval and setTimeout */

//demo basic setTimeout
setTimeout(function() {
	console.log('hello world')
}, 2000)



// and using an external callback
var deployAd = function() {
	console.log('peanut butter')
}

setTimeout(deployAd, 3000)

var pbTimer = setTimeout(deployAd, 3000);


// add a button to the html to cancel the timeOut.  Explain clearInterval.

var btn = document.getElementById('kill-btn');

btn.addEventListener('click', function(){
	console.log('timer stopped!');
	clearInterval(pbTimer);
});


// Show set Interval
var sayHey = setInterval(function() {
	console.log('hey');
}, 1000);


// what if you want to build a mini stopwatch?
var counter = 0;

var countUp = function() {
	console.log(counter);
	counter++
}


var setCount = setInterval(countUp, 1000)

// now what if we want to stop the timer?  yep, just like before.
var btn = document.getElementById('kill-btn');

btn.addEventListener('click', function(){
	console.log('timer stopped!');
	clearInterval(setCount);
})
