var container = document.createElement('div');
container.className = 'container login-wrapper';

document.body.appendChild(container);

console.log(container);

//is a function, that create new DOM element
function createElement(tag, class, id){

	var newElem = document.createElement(tag);

	newElem.className = class;
	newElem.id = id;

	document.appendChild(newElem);

}