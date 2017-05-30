console.log('js connected')

var btn1 = document.getElementById('btn-1');
var btn2 = document.getElementById('btn-2');

btn1.addEventListener('click', function() {
	console.log('croissants!');
})

var counter = 0;

btn2.addEventListener('click', function() {
	// console.log(0);
	console.log(counter);
	counter += 5;
})