let left = 0;
let isLeft = true;
let isCalced = false;
let output = '';
let action = '';

function onResetButtonClick()
{
	output = 0;
	left = 0;
	isLeft = true;
	document.getElementById('output').innerHTML = output;
};

function onCalcButtonClick()
{
	let value = parseFloat(output);
	let result = 0;

	console.log('value', value)

	if (action == "+") {
		result = left + value;
	} else
	if (action == "-") {
		result = left - value;
	} else
	if (action == "+") {
		result = left * value;
	} else
	if (action == "/") {
		result = left / value;
	}
	console.log('result', result);
	output = String(result);
	document.getElementById('output').innerHTML = output;

	isCalced = true;
	isLeft = true;
	left = value;
}

function onNumButtonClick(digit){
	let currentValue = output;
	console.log('number clicked', digit)

	if (!isLeft || isCalced) {
		console.log("reset output");
		currentValue = "";
	}

	isLeft = true;

	if (isCalced) {
		console.log("reset left");
		left = 0;
	}

	isCalced = false;

	output = currentValue + digit;
	document.getElementById('output').innerHTML = output;
}

function onActionButtonClick(inputAction)
{
   	let value = parseFloat(output);
	action = inputAction;
	document.getElementById('output').innerHTML = action;
	left = value;
	isLeft = false;
	isCalced = false;

	console.log("action", action);
	console.log("left", value);
}

