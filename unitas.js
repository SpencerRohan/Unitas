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
  }else if(num > 0 && num < 2){
    return 0;
  } else {
    return "Arg must be 0 or 1";
  }
}

function foo4(num){
	//Array
}

function foo5(num){
	//Hash
}

function foo6(num){
	//Not Operator
}

function foo7(num){
	//Ternary based on assumptions
}