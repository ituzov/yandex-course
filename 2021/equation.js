const checkEquation = (data) => {
	const [a, b, c] = data.toString().trim().split('\n').map(Number);
	if (c < 0) return 'NO SOLUTION';
	if (a === 0) return Math.sqrt(b) === c ? 'MANY SOLUTIONS' : 'NO SOLUTION';

	const x = (c ** 2 - b) / a;
	if (Math.round(x) !== x) return 'NO SOLUTION';

	return x.toString();
};

process.stdin.on('data', (data) => {
	let result = checkEquation(data.toString());
	process.stdout.write(result);
	process.exit();
});
