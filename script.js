(function() {
	
	var json = [
		[
			{content: 'MC', command: MC},
			{content: '<--', command: back},
			{content: '+/-', command: plusMinus},
			{content: '/', command: operation}	
		],
		[
			{content: 7, command: concat},
			{content: 8,command: concat},
			{content: 9,command: concat},
			{content: '*', command: operation}	
		],
		[
			{content: 4, command: concat},
			{content: 5, command: concat},
			{content: 6, command: concat},
			{content: '+', command: operation}	
		],
		[
			{content: 1, command: concat},
			{content: 2, command: concat},
			{content: 3, command: concat},
			{content: '-', command: operation}	
		],
		[
			{content: 0, command: concat},
			{content: '.', command: dot},
			{content: '=', command: equal}	
		]
	]

	var newDiv = document.createElement('div');
		document.body.appendChild(newDiv);
		newDiv.setAttribute('class','divContainer')

	var divInput = document.createElement('div');
		newDiv.appendChild(divInput);
		divInput.textContent = 0;
		
		divInput.setAttribute('class', 'divInput');

	var tbl = document.createElement('table');
		newDiv.appendChild(tbl);

	var isFirstNumber = true,  //irar hetevic grelu hamar ete false-a jnjum e nory grum
		isPlus = false,
		isMultiply = false,
		isMinus = false,
		isDivide = false,
		isDot = true,
		isPlusMinus = true,
		isEqual = false,
		isBack = false,
		firstNumber = 0;


	function concat(number) {
		if(divInput.textContent == '0') {
			divInput.textContent = '';
		}

	    if(isFirstNumber) {
	    	if(divInput.textContent.length > 9) {
	    		divInput.textContent = divInput.textContent.substr(0, 10);
	    		
	    		if(divInput.textContent.charAt(divInput.textContent.length-1) == 7) {
	    			alert(divInput.textContent.charAt(divInput.textContent.length-1));
	    			return false;
	    		}
	    		
	    		
		    } else {
		        divInput.textContent += this.innerText || number;
	       	}
	    } else {
	        divInput.textContent = this.innerText || number;
	        isFirstNumber = true;
	    }
	}

	function operation(operator) {
		if(isFirstNumber || isEqual) {
			firstNumber = +divInput.textContent;
			isFirstNumber = false;
			isDot = true;
			isEqual = false;
			isPlusMinus = true;

			operator = operator.constructor == String ? operator : false;
			switch(operator || this.innerHTML) {
		        case '+':
		       		isPlus = true;
		            break;
		        case '-':
					isMinus = true;
					break;
				case '/':
					isDivide = true;
					break;
				case '*':
					isMultiply = true;
					break;
		    }	
		}
	    
	}

	function dot() {
		if(isDot) {
        	divInput.textContent += '.';
		} else {
		 	if(divInput.textContent.indexOf('.') !== -1) {
		    	return;
		   	}
		  // divInput.textContent = "0.";   
		}


        isDot = false;
        isFirstNumber = true;    
	}

	function plusMinus() {
		divInput.textContent = parseFloat(-divInput.textContent); 
		isDot = true;
	}

	function MC() {
		divInput.textContent = 0;
		isDot = true;	
		isFirstNumber = true;	
	}

	function back() {
		if(isFirstNumber) {
			divInput.textContent = (divInput.textContent.length === 1) ? 0 : divInput.textContent.slice(0,-1);
		}		
	}

	function equal() {
		isFirstNumber = false;
		isEqual = true;
		isPlusMinus = true;
		isDot = false;

		switch(true) {
			case isPlus:
				divInput.textContent = +divInput.textContent + firstNumber;
				isPlus = false;
				break;
			case isMinus:
				divInput.textContent = firstNumber - divInput.textContent;
				isMinus = false;
				break;
			case isMultiply:
				divInput.textContent *= firstNumber;
				isMultiply = false;
				break;
			case isDivide: 
				divInput.textContent = firstNumber / divInput.textContent;
				isDivide = false;
				break;
		}
	}
	
	(function () {
		var tr = [],
			td =[];

		for(var i = 0; i < json.length; i++) {
			tr[i] = document.createElement('tr');
			tr[i].setAttribute('class', 'row');
			tbl.appendChild(tr[i]);
			for(var j = 0; j < json[i].length; j++ ) {
				td[j] = document.createElement('td');
				tr[i].appendChild(td[j]);
				if(0 === json[i][j].content) {
					td[j].setAttribute('colspan', 2)
				}
				td[j].innerHTML = json[i][j].content;

				td[j].addEventListener('click', json[i][j].command);
			}
		}

		document.onkeydown = function isNumber(e) {
			var code = e.keyCode,
				strCode = String.fromCharCode(code);

			if(!(code > 47 && code < 58)) {
				if(e.shiftKey && 187 == code) {
					operation("+");
				} else {      
					switch(code) {
						case 187:
							equal();
							break;
						case 189:
							operation('-');
							break;
						case 191:
							operation('/');
							break;
						case 190:
							dot();
							break;
						case 8:
							MC();
							break;
					}
				} 
			} else {
				if(e.shiftKey && 56 == code) {
					operation("*");
				} else {
					concat(strCode);
				}
			}
		};
	}());
}());






