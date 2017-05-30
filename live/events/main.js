console.log('js connected!');


var btn = document.getElementById('event-btn');
var body = document.body;

var sayClick = function(){
	console.log('click!');
};	

btn.addEventListener('click', sayClick );


btn.addEventListener('mouseover', function(){
	console.log('👍');
});

btn.addEventListener('mouseout', function(){
	console.log('👎');
});

btn.addEventListener('dblclick', function(){
	console.log('double trouble');
});

body.addEventListener('mousemove', function(e){
	// console.log(e);
	console.log('x: ' + e.clientX + ' y: ' + e.clientY);
})






















