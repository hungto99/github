var array = [10, 20, 30];
var a = "10";
var b = 20;
var c;
var d = "T3H";
// console.log("1", typeof a, typeof array[0]);
// console.log("2");

// if (a == array[0] && b != array[2]) {
// 	var theImg = document.createElement('img');
// 	theImg.src = "https://www.w3schools.com/w3css/img_lights.jpg";
// 	// console.log(theImg);

// 	document.getElementById("image").append(theImg);
// }
// for(var i = 0; i < 10; i++) {
// 	if (array[i] != undefined && array[i] < 25) {
// 		console.log(array[i]);
// 	}
// }

// for(var j = 1; j <= 3; j++) {
// 	console.log(j.toString());
// 	var theImg = document.createElement('img');
// 	theImg.src = "https://www.w3schools.com/w3css/img_lights.jpg";
// 	document.getElementById(j).append(theImg);
// }
var k = 1;
// while (k <= 3) {
// 	var theImg = document.createElement('img');
// 	theImg.src = "https://www.w3schools.com/w3css/img_lights.jpg";
// 	document.getElementById(k).append(theImg);
// 	k++;
// }

do {
	var theImg = document.createElement('img');
	theImg.src = "https://www.w3schools.com/w3css/img_lights.jpg";
	document.getElementById(k).append(theImg);
	k++;
} while (k <= 3)