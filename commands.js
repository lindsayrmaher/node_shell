module.exports = {

	pwd: function () {
		// console.log("i'm getting here!")
		process.stdout.write(process.cwd());
		
	},

	date: function() {
		var output = new Date().toString();
		process.stdout.write(output);
	},
}







