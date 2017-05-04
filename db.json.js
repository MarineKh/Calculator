
// var json = [
// 	[
// 		{content: 'MC', command: MC},
// 		{content: '<--', command: back},
// 		{content: '+/-', command: plusMinus},
// 		{content: '/', command: operation}	
// 	],
// 	[
// 		{content: 7, command: concat},
// 		{content: 8,command: concat},
// 		{content: 9,command: concat},
// 		{content: '*', command: operation}	
// 	],
// 	[
// 		{content: 4, command: concat},
// 		{content: 5, command: concat},
// 		{content: 6, command: concat},
// 		{content: '+', command: operation}	
// 	],
// 	[
// 		{content: 1, command: concat},
// 		{content: 2, command: concat},
// 		{content: 3, command: concat},
// 		{content: '-', command: operation}	
// 	],
// 	[
// 		{content: 0, command: concat},
// 		{content: '.', command: dot},
// 		{content: '=', command: equal}	
// 	]
// ]

// var input = document.createElement('input');
// 	document.body.appendChild(input);
// 	input.value = 0;

// 	var tbl = document.createElement('table');
// 	document.body.appendChild(tbl);

// var isFirstNumber = true,  //irar hetevic grelu hamar ete false-a jnjum e nory grum
// 	isPlus = false,
// 	isMultiply = false,
// 	isMinus = false,
// 	isDivide = false,
// 	isDot = true,
// 	isPlusMinus = true;
// 	isEqual = false,
// 	isBack = false;
// 	firstNumber = 0;

// function concat() {
// 	if(input.value == '0') {
// 		input.value = '';
// 	}

//     if(isFirstNumber) {
//         input.value += this.innerText;
//     } else {
//         input.value = this.innerText;
//         isFirstNumber = true;
//     }
// }

// function operation() {
// 	if(isFirstNumber || isEqual) {
// 		firstNumber = +input.value;
// 		isFirstNumber = false;
// 		isDot = true;
// 		isEqual = false;
// 		isPlusMinus = true;

// 		switch(this.innerHTML) {
// 	        case '+':
// 	       		isPlus = true;
// 	            break;
// 	        case '-':
// 				isMinus = true;
// 				break;
// 			case '/':
// 				isDivide = true;
// 				break;
// 			case '*':
// 				isMultiply = true;
// 				break;
// 	    }	
// 	}
    
// }

// function dot() {
// 	 if(isDot) {
//         input.value += this.innerText;
//         isDot = false;
//     } 	
// }	

// function plusMinus() {
// 	input.value = parseFloat(-input.value);
// 	isDot = true;
// }

// function MC() {
// 	input.value = 0;
// 	isDot = true;	
// 	isFirstNumber = true;	
// }

// function back() {
// 	if(isFirstNumber) {
// 		input.value = (input.value.length === 1) ? 0 : input.value.slice(0,-1);
// 	}		
// }

// function equal() {
// 	isFirstNumber = false;
// 	isEqual = true;
// 	isPlusMinus = true;
// 	isDot = false;

// 	switch(true) {
// 		case isPlus:
// 			input.value = +input.value + firstNumber;
// 			isPlus = false;
// 			break;
// 		case isMinus:
// 			input.value = firstNumber - input.value;
// 			isMinus = false;
// 			break;
// 		case isMultiply:
// 			input.value *= firstNumber;
// 			isMultiply = false;
// 			break;
// 		case isDivide: 
// 			input.value = firstNumber / input.value;
// 			isDivide = false;
// 			break;
// 	}
// }

// var isFirstNumber = true,  //irar hetevic grelu hamar ete false-a jnjum e nory grum
	// isPlus = false,
	// isMultiply = false,
	// isMinus = false,
	// isDivide = false,
	// isDot = true,
	// isPlusMinus = true;
	// isEqual = false,
	// isBack = false;
	// firstNumber = 0;
	
// function plusMinus() {
// 	if(isPlusMinus/* || isPlus*/) {
// 		input.value = '-' + input.value;
// 		isPlusMinus = false;
// 		// isPlus = false;	
// 	}
// 	else if(isPlusMinus/* || isMinus*/) {
// 		input.value = '-' + input.value;
// 		isPlusMinus = false;
// 		// isMinus = false;
// 	} 
// 	else if(isPlusMinus || isMultiply) {
// 		input.value = '-' + input.value;
// 		isPlusMinus = false;
// 		// isMultiply = false;
// 	} 
// 	else if(isPlusMinus || isDivide) {
// 		input.value = '-' + input.value;
// 		isPlusMinus = false;
// 		// isDivide = false;
// 	}
// 	else {
// 		input.value = input.value.substr(1); //arajin tvic heto vor gri indexqy neraryal
// 		isPlusMinus = true;
// 	}
// } // 2 hat - 

// function plus() {
// 	if(isFirstNumber || isEqual) {
// 		firstNumber = +input.value;
// 		isFirstNumber = false;
// 		isPlus = true;
// 		isDot = true;
// 		isEqual = false;
// 		isPlusMinus = true;
// 	}
// }
// function multiply() {
// 	if(isFirstNumber || isEqual) {
// 		firstNumber = +input.value;
// 		isFirstNumber = false;
// 		isMultiply = true;
// 		isEqual = false;
// 		isPlusMinus = true;
// 	}
// }

// function minus() {
// 	if(isFirstNumber || isEqual) {
// 		firstNumber = +input.value;
// 		isFirstNumber = false;
// 		isMinus = true;
// 		isEqual = false; 
// 		isPlusMinus = true;
// 	}		
// }

// function divide() {
// 	if(isFirstNumber || isEqual) {
// 		firstNumber = +input.value;
// 		isFirstNumber = false;
// 		isDivide = true;
// 		isEqual = false;
// 		isPlusMinus = true;
// 	}	
// }
// function equal() {
	// if(isPlus) {
	// 	input.value = +input.value + firstNumber;
	// 	isPlus = false;
	// 	isFirstNumber = false;
	// 	isEqual = true;
	// 	isPlusMinus = true;
	// 	isDot = false;
	// }
	// else if(isMultiply) {
	// 	input.value = +input.value * firstNumber;
	// 	isMultiply = false;
	// 	isFirstNumber = false;  //gorcoxutyunic heto nory skseluc hiny jnji
	// 	isEqual = true;
	// 	isPlusMinus = true;
	// 	isDot = false;
	// }
	// else if(isMinus) {
	// 	input.value =  firstNumber - (+input.value);
	// 	isMinus = false;
	// 	isFirstNumber = false;
	// 	isEqual = true;
	// 	isPlusMinus = true;
	// 	isDot = false;
	// }
	// else if(isDivide) {
	// 	input.value = firstNumber / (+input.value);
	// 	isDivide = false;
	// 	isFirstNumber = false;	
	// 	isEqual = true;
	// 	isPlusMinus = true;
	// 	isDot = false;
	// }
// }
