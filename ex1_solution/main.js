console.log('javascript connected!')

var body = document.body

var blueBtn = document.getElementById('a-btn');
var peachBtn = document.getElementById('b-btn');
var purpleBtn = document.getElementById('c-btn');
var hoverBtn = document.getElementById('hover-btn')


var changeToBlue = function() {
	body.style.backgroundColor = 'cornflowerblue'
};

var changeToPeach = function() {
	body.style.backgroundColor = 'peachpuff'
};

var changeToPurple = function() {
	body.style.backgroundColor = 'rebeccapurple'
};

var thumbsUp = function() {
	
}

blueBtn.addEventListener('click', changeToBlue)
purpleBtn.addEventListener('click', changeToPurple)
peachBtn.addEventListener('click', changeToPeach)

