const input = document.getElementById('todoInput');
function addTodo() {	
	const hint = document.getElementById('hint');
	const list = document.getElementById('todoList');
	const item = document.createElement('li');
	if(input.value.trim() ==='')
	{
		hint.textContent = 'ВВедите текст';
		return;
	}
	let str= input.value
	str =str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
	hint.textContent='';
	const deleteButton= document.createElement('button');
	deleteButton.textContent='x';
	item.textContent = str;
	input.value = '';
	list.appendChild(item);
	item.appendChild(deleteButton);
	deleteButton.onclick= function(){
		list.removeChild(item);
	}
}
input.addEventListener(
	'keydown',function(event){
		if (event.key ==='Enter')
		addTodo();

	}
	);