//var date = new Date(2024, 1, 31);
//var date = new Date(2009, 11, 5);

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

function testCase(name, tests) {
	assert.count = 0;
	var successful = 0;
	var testCount = 0;
	var hasSetup = typeof tests.setUp == "function";
	var hasTeardown = typeof tests.tearDown == "function";

	for (var test in tests) {
		// See if file name begins with 'test'
		if (!/^test/.test(test)) { 
			continue;
		}

		testCount++;

		try {

			if (hasSetup) {
				tests.setUp();
				console.log("this.date: ", this.date)
			}

			tests[test]();
			output(test, "#090")

			if (hasTeardown) {
				tests.hasTeardown();
			}

			successful++;
		} catch (e) {
			output(test + " failed: " + e.message, "#c00");
		}
	}

	var color = successful == testCount ? "#0c0" : "#c00";

	output("<strong>" + testCount + " tests, " + (testCount - successful) + " failures</strong>", color);
}

testCase("strftime test", {

	setUp: function() {
		//this.date = new Date(2010, 9, 2, 22, 14, 15);
		date = new Date(2009, 11, 5, 22, 14, 15);
	},

	"test format specificer %Y": function() {
		assert("%Y should return full year",
			Date.formats.Y(date) === 2009);
	},
	"test format specificer %F": function() {
		assert("%F should return %Y-%m-%d",
			date.strftime("%F") === "2009-11-05");
	}
});

