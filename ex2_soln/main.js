console.log('js connected!');


var puppies = [
	'husky',
	'lab',
	'bulldog',
	'frenchie',
	'irish wolf hound'
]


// 1
// setTimeout(function() {
// 	console.log("it's puppy time!");
// }, 3000)

//2

var counter = 0


var puppyInterval = setInterval(function(){
	console.log(puppies[counter]);
	if(counter === puppies.length -1){
		clearInterval(puppyInterval);
	} else {
		counter++ ;
	}

}, 1000);

