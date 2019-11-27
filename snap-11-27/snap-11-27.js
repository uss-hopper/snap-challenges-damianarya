//java script reduce challenge
//The reduce() method reduces the array to a single value. The reduce() method executes a provided function for each value
//of the array (from left-to-right). The return value of the function is stored in an accumulator (result/total).

//part one

const array1 = [1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657,
	46368, 75025, 121393, 196418, 317811];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log(array1.reduce(reducer)); 832038

//part two
//turn this array into a string using javascript reduce
var ar = [
	["Deflector", "power", "at", "maximum.", "Energy", "discharge", "in", "six", "seconds.", "Warp", "reactor", "core",
		"primary", "coolant", "failure.", "Fluctuate", "phaser", "resonance", "frequencies.", "Resistance", "is", "futile.",
		"Recommend", "we", "adjust", "shield", "harmonics", "to", "the", "upper", "EM", "band", "when", "proceeding.", "These",
		"appear", "to", "be", "some", "kind", "of", "power-wave-guide", "conduits", "which", "allow", "them", "to", "work",
		"collectively", "as", "they", "perform", "ship", "functions.", "Increase", "deflector", "modulation", "to", "upper",
		"frequency", "band."]  ];

var str = ar.reduce( function (a, b) {
	return a + b.join(', ') + ', ';
}, '' );

str = str.slice(0, -2);
console.log( str ); "Deflector, power, at, maximum., Energy, discharge, in, six, seconds., Warp, reactor, core, primary, " +
"coolant, failure., Fluctuate, phaser, resonance, frequencies., Resistance, is, futile., Recommend, we, adjust, shield," +
" harmonics, to, the, upper, EM, band, when, proceeding., These, appear, to, be, some, kind, of, power-wave-guide, conduits," +
" which, allow, them, to, work, collectively, as, they, perform, ship, functions., Increase, deflector, modulation, to, upper," +
" frequency, band."