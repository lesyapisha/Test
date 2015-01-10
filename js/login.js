//it is a function, that create new DOM element
function createElement(tagName, ClassName, parent){
	 
	var newElem = document.createElement(tagName);
	newElem.className = ClassName;		
	parent.appendChild(newElem);

	return newElem;
}



//this function creates input data place
function renderInputRow(inputType, inputPlaceholder, text, form){

	var formGroup = createElement('div', 'form-group', form);
	var labelForEmail = createElement('label','col-sm-2 control-label',formGroup);
		textInside = document.createTextNode(text)
		labelForEmail.appendChild(textInside);				
	var divCol = createElement('div','col-sm-10',formGroup);
	var input = createElement('input','form-control', divCol)
		input.type = inputType;
		input.placeholder = inputPlaceholder;
}

//function ask about saving user's data 
function renderCheckboxRow(inputType, text, form){

	var formGroup = createElement('div', 'form-group', form);	
	var divCol = createElement('div','col-sm-offset-2 col-sm-10',formGroup);
	var div = createElement('div','checkbox', divCol);
	var label = createElement('label','', div);
	var input = createElement('input','',label);
		input.type = inputType;
		textCheckbox = document.createTextNode(text);
		label.appendChild(textCheckbox);


}

//create button of submit
function renderSubmitRow(buttonType, text, form){

	var formGroup = createElement('div', 'form-group', form);
	var divCol = createElement('div', 'col-sm-offset-2 col-sm-10', formGroup);
	var button = createElement('button', 'btn btn-primary', divCol);
		button.type = buttonType; 
		textInButton = document.createTextNode(text);
		button.appendChild(textInButton);


}


function renderForm(parent){
	
	var form = createElement('form','form-horizontal well', parent);
		form.id = 'login-form';

	renderInputRow('email', 'Email','Email', form);
	renderInputRow('password', 'Password','Password', form);
	renderCheckboxRow('checkbox','I agree', form);
	renderSubmitRow('submit','Sign in', form);

	
}


function renderLoginPage(){

	var container = createElement('div', 'container login-wrapper', document.body);
	var row = createElement('div', 'row', container);
	var col = createElement('div', 'col-md-6 col-md-offset-3', row);
	var h1 = createElement('h1', '', col);
		text = document.createTextNode('Please sign in');
		h1.appendChild(text);


	renderForm(col);
}



