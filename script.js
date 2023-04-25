// Gets the list ul element
const list = document.querySelector('#list');
list.style.border = '1px solid green';
list.style.backgroundColor = '#f4f4f4';

// Create new todo
const newTask = document.createElement('li');
newTask.textContent = 'Do something uncomfortable everyday.';
newTask.classList.add('task');
list.appendChild(newTask);

// create another todo task
const anotherTodo = document.createElement('li');
anotherTodo.className = 'task';
anotherTodo.textContent = 'Pay bills';

// adds new todo to the beginning of the list.
// parentNode.insertBefore(newNode, referenceNode);
list.insertBefore(anotherTodo, list.firstElementChild);

// create an item to replace another
const modifiedTodo = document.createElement('li');
modifiedTodo.className = 'task';
modifiedTodo.textContent = 'pay college\'s fucking bills'

// replace some node with another.
list.replaceChild(modifiedTodo, list.children[2]);

// delete some node
list.removeChild(list.children[3]);

// create delete button and append to all li
let deleteButton = document.createElement('button');
deleteButton.textContent = 'Delete Item';

const items = list.querySelectorAll('li');

// create one Delete button for each list item
items.forEach( (item) => {
    let delBtn = document.createElement('button');
    delBtn.textContent = 'Delete Item';
    delBtn.className = 'delete';
    item.appendChild(delBtn);
})

const deleteButtons = document.querySelectorAll('.delete');

list.addEventListener('click', (e) =>{
    console.log(e.target.parentNode);
    if (e.target.className !== 'delete') {
        return;
    }
    e.target.parentNode.remove();
} )