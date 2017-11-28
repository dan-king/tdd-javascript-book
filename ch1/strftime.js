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

Date.prototype.strftime = ( function () {
	function strftime(format) {

		var date = this;

		return ( format +  "").replace(/%([a-zA-Z])/g,
			function (m, f) {
				var formatter = Date.formats && Date.formats[f];

				if (typeof formatter == "function") {
					return formatter.call(Date.formats, date);
				} else if (typeof formatter == "string") {
					return date.strftime(formatter);
				}

				return f;
			}
		);
	}

	// Internal helper
	function zeroPad(num) {
		// The + operator returns the numeric representation of the object. 
		// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Unary_plus_()
		return (+num < 10 ? "0" : "") + num; // Add a leading zero if number is 1-9
	}

	Date.formats = {

		// Formatting methods

		d: function (date) {
			return zeroPad( date.getDate());
		},

		m: function (date) {
			//return zeroPad(date.getMonth() + 1); // why this?
			return zeroPad(date.getMonth());
		},

		P: function (date) {
			//return zeroPad(date.getMonth() + 1); // why this?
			return zeroPad(date.getMonth());
		},

		// Incorrect:
		//y: function (date) {
		//	return date.getYear() % 100;
		//},

		// Correct:
		y: function (date) {
			return zeroPad(date.getYear() % 100);
		},

		Y: function (date) {
			return date.getFullYear();
		},

		// Day of year
		j: function(date) {
			var jan1 = new Date(date.getFullYear(), 0, 1);
			var diff = date.getTime() - jan1.getTime();

			// 86400000 = 60 sec * 60 min * 24 hour * 1000 years
			return Math.ceil(diff / 86400000);
		},

		// Format shorthands
		F: "%Y-%m-%d",
		D: "%m/%d/%y"

	};

	return strftime;

}());
