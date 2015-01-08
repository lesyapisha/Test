
//it is a function, that create new DOM element
function createElement(tagName, ClassName, parent){
	 
	var newElem = document.createElement(tagName);
	newElem.className = ClassName;
	
	parent.appendChild(newElem);

	return newElem;
}

var container = createElement('div', 'container login-wrapper', document.body);
	var row = createElement('div', 'row', container);
		var col = createElement('div', 'col-md-6 col-md-offset-3', row);
			var h1 = createElement('h1', '', col);
				text = document.createTextNode('Please sign in');
				h1.appendChild(text);
			var formHorizontal = createElement('form','form-horizontal well', col);
				var formGroup = createElement('div', 'form-group', formHorizontal);
					var labelForEmail = createElement('label','col-sm-2 control-label',formGroup);
						text = document.createTextNode('Email')
						labelForEmail.appendChild(text);				
					var divCol = createElement('div','col-sm-10',formGroup);
				var formGroup = createElement('div', 'form-group', formHorizontal);
					var labelForPassword = createElement('label','col-sm-2 control-label',formGroup);
						textLabel = document.createTextNode('Password');
						labelForEmail.appendChild(textLabel);	
					var divCol = createElement('div','col-sm-10',formGroup);
				var formGroup = createElement('div', 'form-group', formHorizontal);	
					var divCol = createElement('div','col-sm-offset-2 col-sm-10',formGroup);
						var div = createElement('div','checkbox', divCol);
							var label = createElement('label','', div);
								var input = createElement('input','',label);


