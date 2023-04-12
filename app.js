// DataService.getTodos(console.log)
 DataService.getTodos()
 .then(data =>TodoList.fromObjectToArray('piango', data))
 .then(todoList => displayTodos(todoList));

// function transformData(data) {
//     const newTodoList = new todoList('lista base');
//     for (let i = 0; i < data.length; i++) {
//         const todoObject = data[i];
//         const newTodo = new Todo(todoObject.title, todoObject.creationDate, todoObject.isCompleted, todoObject.id)
//         newTodoList.addTodo(newTodo);
//     }    
//     console.log(newTodoList);
// }

function displayTodos(todoList) {
    const todoListTitle = document.getElementById('list-name');
    const todoListUl = document.getElementById('todo-list');

    const titleNode = document.createTextNode(todoList.title);
    todoListTitle.appendChild(titleNode);
    todoListUl.innerHTML= '';

    for (let i = 0; i < todoList.todoArray.length; i++) {
        const todo = todoList.todoArray[i];
        //console.log(todo);
        const newLi = document.createElement('li');
        newLi.classList.add('todo-li');

        const titleSpan = document.createElement('span');
        const dateSpan = document.createElement('span');
        const titleNode = document.createTextNode(todo.title);
        const dateNode = document.createTextNode(todo.creationDate);

        titleSpan.classList.add('todo-title');
        dateSpan.classList.add('todo-date');
        newLi.appendChild(titleSpan);
        newLi.appendChild(dateSpan);

        titleSpan.appendChild(titleNode);
        dateSpan.appendChild(dateNode);
        todoListUl.appendChild(newLi);

        
    }
}