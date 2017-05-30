console.log('javascript here!')

var btn = document.getElementById('event-btn');
var body = document.body

/* Lecture 1 */

body.addEventListener('mousemove', function(e){
	// console.log(e);
	console.log('x: ' + e.clientX + ' y: ' +e.clientY);
});

btn.addEventListener('click', function(){
	console.log();
	console.log('click!');
})


// var sayHey = function(){
// 	console.log('sup world');
// };

// btn.addEventListener('click', sayHey)


btn.addEventListener('mouseover', function(){
	console.log('mouse on');
})

btn.addEventListener('mouseout', function(){
	console.log('mouse off');
})

btn.addEventListener('dblclick', function(){
	console.log('double click!!');
})

btn.addEventListener('mousemove', function(e){
	// console.log(e);
	console.log('x: ' + e.clientX + ' y: ' +e.clientY);
});


/* exercise 1 */