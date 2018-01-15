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
	var cmd = data.toString().trim().split(" ");
	// console.log(cmd);
		if(cmd[0] === 'pwd') {
			commands[cmd[0]]();
		} 
	
		if(cmd[0] === 'date') {
			commands[cmd[0]]();
		}

		if(cmd[0] === 'ls') {
			commands[cmd[0]]();
		}

		if(cmd[0] === 'echo') {
			commands[cmd[0]]();
		}
	// process.stdout.write(output);
	process.stdout.write('\n prompt > ');
});
