function sumUntil(maxValue) {
  let result = '';
	let tot =  0;
	for (let i = 1; i <= maxValue; i++) {
		tot = i + tot;
		result = `${result} + ${i}`;
	}
	return `${result} +  =  ${tot}`;
}

console.log(sumUntil(5));
