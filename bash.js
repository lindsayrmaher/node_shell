process.stdout.write('prompt > ');

process.stdin.on('data', function (data) {
	// console.log(process.cwd());
	var output;
	var cmd = data.toString().trim();
	if(cmd === 'pwd') {
		output = process.cwd();
	}
	if(cmd === 'date') {
		output = new Date().toString();
	}
	process.stdout.write(output);
	process.stdout.write('/n prompt > ');
});