module.exports = {

	pwd: function () {
		// console.log("i'm getting here!")
		process.stdout.write(process.cwd());
		
	},

	date: function() {
		var output = new Date().toString();
		process.stdout.write(output);
	},

	ls: function() {
		var fs = require('fs');
		var lsFunc = fs.readdir('.', function(err, files) {
  			if (err) throw err;
  			files.forEach(function(file) {
    		process.stdout.write(file.toString() + "\n");
  		})
  		process.stdout.write("prompt > ");
		});

	},

	echo: function(args) {
		var output = args
		.split(" ")
		.map(function (arg) {
			return (arg[0] === '$') ? process.env[arg.slice(1)] : arg;
		})
		.join(" ");
		process.stdout.write(output);
		process.stdout.write("prompt > ");

	},
}







