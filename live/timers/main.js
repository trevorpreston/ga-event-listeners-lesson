// console.log('js connected');

// setTimeout(function(){
// 	console.log('2 seconds later');
// }, 2000);

var displayAd = function(){
	console.log('buy my cool stuff!');
};

// var adTimout = setTimeout(displayAd, 1500);

var skipBtn = document.getElementById('skip-btn');

var sayHey = setInterval(function(){
	console.log('hey');
}, 1000);

skipBtn.addEventListener('click', function(){
	setTimeout(function(){
		console.log('deleting event');
		clearInterval(sayHey);
})}, 3000);

var counter = 0;

var countUp = function() {
	console.log(counter);
	counter++ ;
}

// var counterInterval = setInterval(countUp, 1000)




















