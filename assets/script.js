// Gets the list ul element
const list = document.querySelector('#list');


const items = list.querySelectorAll('li');

// create one Delete button for each list item
items.forEach( (item) => {
    
    item.appendChild(delBtn);
})

//  ################ Feature - delete item #####################
list.addEventListener('click', deleteItem);

// function deleteItem 
function deleteItem(e) {
    if (e.target.className !== 'delete') {
        return;
    }
    e.target.parentNode.remove();
}


// ######################### Feature - add item ########################
// input
const input = document.querySelector('#inputTask');

const addBtn = document.querySelector('#btnAdd');

addBtn.addEventListener('click', render);

// function createTask
function createTask() {

    

    // create li
    let task = document.createElement('li');
    let text = document.createTextNode(input.value)
    task.classList.add('task');

    // create delete button
    let delBtn = document.createElement('button');
    delBtn.textContent = 'delete';
    delBtn.className = 'delete';

    //append li + delete button;
    task.appendChild(text);
    task.appendChild(delBtn);

    
    return task;
}

function appendTask(task) {
    list.appendChild(task);
    
}

function render() {
    if(input.value == "") {
        return;
    }

    let task = createTask();
    appendTask(task);
    input.value = '';
    input.focus();
}