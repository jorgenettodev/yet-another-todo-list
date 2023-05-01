// Create an array on objects to storage the li items of the task list
let arrayOfTasks = [];

// Create a function that you retrieve the data from the localStorage and put it on the object 'arrayOfTasks'

// Create a const to retrieve the data from localStorage
const savedList = localStorage.getItem('todo-list');

if (savedList) {
    arrayOfTasks = JSON.parse(savedList);
}









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
    delBtn.textContent = 'Delete';
    delBtn.className = 'delete';

    //append li + delete button;
    task.appendChild(text);

    // Push the text of the task to the arrayOfTasks object.
    arrayOfTasks.push(`{${task.innerText}}`);
    localStorage.setItem('todo-list',JSON.stringify(arrayOfTasks));


    task.appendChild(delBtn);

    console.log(arrayOfTasks);
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


// localStorage

