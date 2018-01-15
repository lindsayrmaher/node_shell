var commands = require('./commands.js');

// var userCommand = 'pwd'; 


process.stdout.write('prompt > ');
// console.log('commands[userCommand]', commands[userCommand])
// commands[userCommand](data); 

process.stdin.on('data', function (data) {
	// console.log(process.cwd());
	// var output;
	var cmd = data.toString().trim();
	if(cmd === 'pwd') {
		commands[cmd]();
	} 
	
	if(cmd === 'date') {
		commands[cmd]();
	}

	if(cmd === 'ls') {
		commands[cmd]();
	}
	// process.stdout.write(output);
	process.stdout.write('\n prompt > ');
});
