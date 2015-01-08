
(function renderLoginPage(global){

	var container = createElement('div', 'container login-wrapper', document.body);
		var row = createElement('div', 'row', container);
			var col = createElement('div', 'col-md-6 col-md-offset-3', row);
				var h1 = createElement('h1', '', col);
					text = document.createTextNode('Please sign in');
					h1.appendChild(text);
				var formHorizontal = createElement('form','form-horizontal well', col);
	

	//it is a function, that create new DOM element
	function createElement(tagName, ClassName, parent){
		 
		var newElem = document.createElement(tagName);
		newElem.className = ClassName;
		
		parent.appendChild(newElem);

		return newElem;
	}



	//this function creates input data place
	function renderInputRow(inputType, text){

		var formGroup = createElement('div', 'form-group', formHorizontal);
			var labelForEmail = createElement('label','col-sm-2 control-label',formGroup);
				textInside = document.createTextNode(text)
				labelForEmail.appendChild(textInside);				
			var divCol = createElement('div','col-sm-10',formGroup);
				var input = createElement('input','form-control', divCol)
					input.type = inputType;
	}


	function renderCheckboxRow(inputType, text){

		var formGroup = createElement('div', 'form-group', formHorizontal);	
			var divCol = createElement('div','col-sm-offset-2 col-sm-10',formGroup);
				var div = createElement('div','checkbox', divCol);
					var label = createElement('label','', div);
						var input = createElement('input','',label);
							input.type = inputType;
							textCheckbox = document.createTextNode(text);
							label.appendChild(textCheckbox);


	}

	function renderSubmitRow(buttonType, text){

		var formGroup = createElement('diu', 'form-group', formHorizontal);
			var divCol = createElement('div', 'col-sm-offset-2 col-sm-10', formGroup);
				var button = createElement('button', 'btn btn-primary', divCol);
					button.type = buttonType; 
					textInButton = document.createTextNode(text);
					button.appendChild(textInButton);


	}


	function renderForm(){
		
		renderInputRow('email','Email');
		renderInputRow('password','Password');
		renderCheckboxRow('checkbox','Remember me');
		renderSubmitRow('submit','Sing in');
		
	}

	renderForm();
})(window);


