function isPrimeNumber(checkNum) {
	if (checkNum == 1) { return false; }

	for(var i=2; i<checkNum; i++) {
		if (checkNum % i == 0) { return false; }
	}
	return true;
};

for (var i=1; i<100; i++) {
	if (isPrimeNumber(i)) { console.log(i); }
}
