const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("What would you like to calculate?", function(input){
	tokens = input.split(' ');
	
	mathSymbol = tokens[0];
	num1 = Number(tokens[1]);
	num2 = Number(tokens[2]);

	//Log out the variables so I know what 

	console.log("mathSymbol ", mathSymbol);
	console.log("num1 ", num1);
	console.log("num2 ", num2);

	//check what the math symbol is and run the function associated
	if(mathSymbol === "+"){
		console.log("result " + String(num1 + num2));
	}else if (mathSymbol === "-"){
        	console.log("result " + String(num1 - num2));
    	}else if (mathSymbol === "*"){
        	console.log("result " + String(num1 * num2));
    	}else if(mathSymbol === "/"){
        	console.log("result " + String(num1 / num2));
    	}else if(mathSymbol === "sqrt"){
		console.log("result " + String(Math.sqrt(num1)));
	}
	// This line closes the connection to the command line interface.

	reader.close()

});
