var container = document.createElement('div');
container.className = 'container login-wrapper';

document.body.appendChild(container);

console.log(container);

//is a function, that create new DOM element
function createElement(tag, nameOfClass, id){

	var newElem = document.createElement(tag);

	newElem.className = nameOfClass;
	newElem.id = id;

	document.body.appendChild(newElem);
}

createElement('div', 'row');
