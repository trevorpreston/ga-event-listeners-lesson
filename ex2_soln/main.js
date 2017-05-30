console.log('js connected!');


var puppies = [
	'husky',
	'lab',
	'bulldog',
	'frenchie',
	'irish wolf hound'
]


// 1 create a function that console.logs "it's puppy time" after a 3 second delay.


// setTimeout(function() {
// 	console.log("it's puppy time!");
// }, 3000)

//2 create a function that console.logs each puppy from the the array "puppies".
// var counter = 0

// var puppyInterval = setInterval(function(){
// 	console.log(puppies[counter]);
// 	counter++ ;
// }, 1000);


//3 that worked! But it keeps console.logging "undefined" even after all the puppies have been logged. Can you modify this function so that the interval is cleared when it reaches the end of the array? This is challenging, work together!

var counter = 0

// var puppyInterval = setInterval(function(){
// 	console.log(puppies[counter]);
// 	if(counter === puppies.length - 1){
// 		clearInterval(puppyInterval);
// 	} else {
// 		counter++ ;
// 	}
// }, 1000);


//4 create a "style.css" file and link it to your html. In your html add a div with the id "display". Then in your css, give the display a background color of "peachpuff" and do the necessary CSS to make sure the "display" covers the entire screen.



var display = document.getElementById('display')

var puppyInterval = setInterval(function(){
	var newPup = document.createElement('p');
	newPup.className = 'pup';
	newPup.innerText = puppies[counter];

	display.appendChild(newPup)
	console.log(puppies[counter]);
	if(counter === puppies.length -1){
		clearInterval(puppyInterval);
	} else {
		counter++ ;
	}
}, 1000);

// var makePuppies = function(pupName){
// 	var newPup = document.createElement('p');
// 	newPup.className = 'pup';
// 	newPup.innerText = pupName;

// 	console.log('counting');
// 	counter++

// }

// var puppyInterval = setInterval(makePuppies(puppies[counter])
// , 1000)

//5 In your javascript, create an interval and a function that appends each of the puppies into the display. They should be appended as basic p tags or divs. Style as you see fit.


