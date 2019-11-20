/*
part one, return an array wof #s with count of duplicates.
 */


function compressArray(original) {

	var compressed = [];
	// make a copy of the input array
	var copy = original.slice(0);

	// first loop goes over every element
	for (var i = 0; i < original.length; i++) {

		var myCount = 0;
		// loop over every element in the copy and see if it's the same
		for (var w = 0; w < copy.length; w++) {
			if (original[i] == copy[w]) {
				// increase amount of times duplicate is found
				myCount++;
				// sets item to undefined
				delete copy[w];
			}
		}

		if (myCount > 0) {
			var a = new Object();
			a.value = original[i];
			a.count = myCount;
			compressed.push(a);
		}
	}

	return compressed;
};

// It should go something like this:
var testArray = new Array("1", "1", "2", "7", "5", "2", "9", "2");
var newArray = compressArray(testArray);

/*results could look like this
console: [
	Object { value="1", count=2},
	Object { value="2", count=3},
	Object { value="7", count=1},
	Object { value="5", count=1},
	Object { value="9", count=1}
]
*/

//part two
let resulting output = x
let x = "fizz" if even
let x = "buzz" if === /3
let x = "baz" if both "fizz" & "buzz" === true

var multiply = new Function('1', '100', 'return 1 * 100');
//onchange function required

//see html & css for part three