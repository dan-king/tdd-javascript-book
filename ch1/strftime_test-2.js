//var date = new Date(2024, 1, 31);
var date = new Date(2009, 11, 5);

assert.count = 0;

function assert(message, expr) {
	if (!expr) {
		throw new Error(message);
	}

	assert.count++;

	return true;
}


function output(text, color) {
	var p = document.createElement("p");
	p.innerHTML = text;
	p.style.color = color;
	document.body.appendChild(p);
}

try  {
	assert("%Y should return full year",
		date.strftime("%Y") === "2009");

	assert("%y should return 2-digit year",
		date.strftime("%y") === "09");

	assert("%F should return %Y-%m-%d",
		date.strftime("%F") === "2009-11-05");


	console.log(assert.count + " tests OK");
	output(assert.count + " tests OK", "#0c0");
} catch(e) {
	console.log("Test failed: " + e.message);
	output("Test failed: " + e.message, "#c00");
}

var x = date.strftime("%m");
console.log ( x );

var x = date.strftime("%d");
console.log ( x );

var x = date.strftime("%P");
console.log ( x );

var x = date.strftime("%Q");
console.log ( x );