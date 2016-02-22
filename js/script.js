console.log('working')

var clock = document.querySelector(".clock")
var hexColor = document.querySelector(".hexColor")


var body = document.querySelector("body")
var firstColor = function () {
	body.style.background = getRandomColor()
	hexColor.textContent = getRandomColor()
	setTimeout(secondColor,10000)
}
var secondColor = function() {
	body.style.background = getRandomColor()
	hexColor.textContent = getRandomColor()
	setTimeout(firstColor,10000)
}
setTimeout(firstColor,10500)

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    console.log(color)
    return color;
}


var today 
var todayTime 

var time = function() {
	today = new Date ()
	todayTime = today.toLocaleTimeString()
	clock.innerHTML = todayTime.substring(0,8)
}
setInterval(time,1)

var growingBar = document.querySelector(".growingBar")
var grow = function () {
	growingBar.style.width = "50%"
	setTimeout(shrink,10000)  
}
var shrink = function() {
	growingBar.style.width = "10%" 
	setTimeout(grow,10000)
}
setTimeout(grow,1000)

