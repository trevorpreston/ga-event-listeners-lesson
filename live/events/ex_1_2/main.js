var pastry = document.getElementById('pastry-btn');
var count = document.getElementById('count-btn');


pastry.addEventListener('click', function(){
	console.log('croissants!');
})

var counter = 0;

count.addEventListener('click', function(){
	console.log(counter);
	counter += 5;
});


