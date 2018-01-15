var commands = require('./commands.js');

// var userCommand = 'pwd'; 


process.stdout.write('prompt > ');
// console.log('commands[userCommand]', commands[userCommand])
// commands[userCommand](data); 

process.stdin.on('data', function (data) {
	// console.log(process.cwd());
	// var output;
	// var args = Array.prototype.slice.call(arguments);
	// console.log(args);

	var tokens = data.toString().trim().split(" ");
	var cmd = tokens[0];
	var args = tokens.slice(1).join(" ");
	// console.log(cmd);
		if(cmd === 'pwd') {
			commands[cmd]();
		} 
	
		if(cmd === 'date') {
			commands[cmd]();
		}

		if(cmd === 'ls') {
			commands[cmd]();
		}

		if(cmd === 'echo') {
			commands[cmd]();
		}
	// process.stdout.write(output);
	process.stdout.write('\n prompt > ');
});
