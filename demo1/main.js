console.log('javascript here!')

var btn = document.getElementById('event-btn');
var body = document.body

/* Lecture 1 */

// demo basic click
btn.addEventListener('click', function(){
	console.log();
	console.log('click!');
});




// demo separated callback
// var sayHey = function(){
// 	console.log('sup world');
// };

// btn.addEventListener('click', sayHey)


// demo hidden parameter, the event object
body.addEventListener('mousemove', function(e){
	// console.log(e);
	console.log('x: ' + e.clientX + ' y: ' +e.clientY);
});


// demo various event listeners:

btn.addEventListener('mouseover', function(){
	console.log('mouse on');
});

btn.addEventListener('mouseout', function(){
	console.log('mouse off');
});

btn.addEventListener('dblclick', function(){
	console.log('double click!!');
});




/* exercise 1 */