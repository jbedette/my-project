//write a function called add_nums

//get #num1, and #num2
//add them and write to #result
// find #num1 and #num2


function add_nums() {
	var num1 = parseInt(document.getElementById("num1").value);
	var num2 = parseInt(document.getElementById("num2").value);
	console.log( num1	, num2	);
	document.getElementById("result").innerText = num1 + num2;

}

alert("hello");

function updateName(){
var name = prompt("enter your name here");

document.getElementById("person").innerText = name;

}

// add_nums()
