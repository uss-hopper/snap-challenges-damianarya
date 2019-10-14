/*
*find the sum of all unique positive factors of a number.
*
*@param int # the # which we are finding factors for.
 */
function sumUniquePositiveFactors (number){
	let sum =0;
	for (i=1; i<=number; i++) {
		if(number % i === 0) {
			sum = sum + i;
		}
	}
	return sum;
}
