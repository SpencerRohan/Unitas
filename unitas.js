function foo1(num){
	//Equal/IF Statement
	if (num === 1){
		return 0;
	} else if (num === 0){
		return 1;
	} else {
		return "Arg must be a 0 or 1";
	}
}

function foo2(num){
	//Switch Case
	switch(num){
		case 1:
			return 0;
		case 0:
			return 1;
		default: 
			return "Arg must be a 0 or 1";
		}
}

function foo3(num){
	//Greater than or less than/IF Statement
	num = Math.floor(num);

	if(num > -1 && num < 1){
		return 1;
	} else if(num > 0 && num < 2){
		return 0;
	} else {
		return "Arg must be 0 or 1";
	}
}

function foo4(num){
	//Array
	var options = [1,0];
	return options[num];
}

function foo5(num){
	//Hash
	var options = {};
	options[0] = 1;
	options[1] = 0;

	return options[num];
}

function foo6(num){
	//Not Operator
	return Math.floor(!num);
}

function foo7(num){
	//Ternary based on assumptions
	return num !== 1 ? 1 : 0;
}