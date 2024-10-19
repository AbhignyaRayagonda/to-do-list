const todoList = [
    {
        name: 'Learn HTML',
        dueDate: '2020-01-01'
    }
]; //create an empty array

renderTodoLists();

function renderTodoLists(){
        
    let todoListHTML = '';

    for (let i = 0; i<todoList.length; i++){
    const todoObject = todoList[i];
    const {name, dueDate} = todoObject;
    //The above one is same as the below one but in shortcut
    //const dueDate = todoObject.dueDate;
    const html = `<div class = "name">${name} </div>
                    <div class="name">${dueDate} </div>
                    <button class="delete"
                    onclick="todoList.splice(${i} , 1);
                    renderTodoLists();"
                    >Delete</button>`;
    todoListHTML += html;
    }
    document.querySelector('.work').innerHTML = todoListHTML

}
function addTodo() {
  const inputElement =   document.querySelector('.list');
   const name = inputElement.value;

const dateInputElement = document.querySelector('.due-date');
const dueDate = dateInputElement.value;
 todoList.push({name, dueDate});
inputElement.value = '';
dateInputElement.value = '';
renderTodoLists();

}
