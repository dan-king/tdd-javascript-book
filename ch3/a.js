/*

Note: this syntax... 
	(function () {}) 

...creates an anonymous function.

Adding the () to the end calls the function that was just created.

https://stackoverflow.com/questions/2422026/what-do-empty-parentheses-after-a-function-declaration-do-in-javascript

In other words...

 (function() { } )()


... is an Immediately-Invoked Function Expression, or IIFE for short. It executes immediately after it’s created.

https://stackoverflow.com/questions/8228281/what-is-the-function-construct-in-javascript

*/

/*
Date.prototype.strftime = ( function () {
	function strftime(format) {
	}
	Date.formats = {
	};
	return strftime;
}());
*/

String.prototype.mytrim = function() {
	//return this.replace(/^\s+/, "");// remove leading space
	//return this.replace(/^[\s]+/g, "");// remove leading space
	/* 
		^ = matching any string beginning with what follows
		[] = any characters inside brackets
		\s = whitespace
		+ = at least one
		g = global search (don't stop after finding just one)
	*/

	//return this.replace(/\s+$/, "");// remove trailing space
	//return this.replace(/[\s]+$/g, "");// remove trailing space
	/* 
		[] = any characters inside brackets
		\s = whitespace
		+ = at least one
		$ = matching any string at end of the input
		g = global search (don't stop after finding just one)
	*/

	//return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');

	return this.replace(/^[\s]+|[\s]+$/g, "");// remove leading AND trailing space
	/* 
		^ = matching any string beginning with what follows
		[] = any characters inside brackets
		\s = whitespace
		\uFEFF = unicode zero width no-break space
		\xA0 = hexadecimal for non-breaking space
		+ = at least one
		| = or
		$ = matching any string at end of the input
		g = global search (don't stop after finding just one)
	*/


}