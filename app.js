// DataService.getTodos(console.log)

let superList = new Todolist(' lista super figa');

displayTodos();

DataService.getTodos().then(data => {
    fillTodoArrayFromServer(data);
    displayTodos();
})

function fillTodoArrayFromServer(data) {
    for (let i = 0; i < data.length; i++) {
        const object = data[i];
        const todo = new Todo(object.title, object.creationDate,object.isCompleted,object.id);
        superList.addTodo(todo);
    }
}

    
function displayTodos() {
    const superListTitle = document.getElementById('list-name');
    const superListUl = document.getElementById('todo-list');
    const titleNode = document.createTextNode(superList.title);
    
    superListTitle.innerHTML = '';
    superListUl.innerHTML = '';

    superListTitle.appendChild(titleNode);

    for (let i = 0; i < superList.todoArray.length; i++) {
        const todo = superList.todoArray[i];

        const newLi = document.createElement('li');
        newLi.classList.add('todo-li');
        if (todo.isCompleted) {
                    newLi.classList.add('completed');
                }

        const titleSpan = document.createElement('span');
        titleSpan.classList.add('todo-title');

        const btnCompleted = document.createElement('button');
        const btnDeleted = document.createElement('button');
        btnCompleted.addEventListener('click', (event)=> superList.completeTodo(todo))
        btnDeleted.addEventListener('click', (event)=>  superList.removeTodo(todo))
        btnCompleted.classList.add('todo-completed');

       
        const dateSpan = document.createElement('span');
        dateSpan.classList.add('todo-date');
        
        const titleNode = document.createTextNode(todo.title);
        const dateNode = document.createTextNode(todo.creationDate.toDateString());
        const completedBtn = document.createTextNode('completato');
        const deletedBtn = document.createTextNode('cancella');

        titleSpan.appendChild(titleNode);
        dateSpan.appendChild(dateNode);
        btnCompleted.appendChild(completedBtn);
        btnDeleted.appendChild(deletedBtn);

        newLi.appendChild(titleSpan);
        newLi.appendChild(dateSpan);
        newLi.appendChild(btnCompleted);
        newLi.appendChild(btnDeleted);
        
        superListUl.appendChild(newLi);
        
    }
    addButtonsListeners(superList);

}

 function orderByTitle(superList) {
         superList.sortByTitle();
         displayTodos();
 }
    
 function orderByDate(superList) {
    superList.sortByCreationDate();
    displayTodos();
}

function addButtonsListeners(superList) {
    const orderByTitleBtn = document.getElementById('order-title-btn')
    orderByTitleBtn.addEventListener('click', (event)=> orderByTitle(superList))

    const orderByDateBtn = document.getElementById('creation-date-btn')
    orderByDateBtn.addEventListener('click', (event)=> orderByDate(superList))
}

// [
//     {
//      "title": "Fare colazione in orario",
//      "creationDate": 1681330379,
//      "isCompleted": false,
//      "id": "1"
//     },
//     {
//      "title": "Arrivare in orario a lezione",
//      "creationDate": 1681330319,
//      "isCompleted": false,
//      "id": "2"
//     },
//     {
//      "title": "Arrivare a Winterhold e diventare arcimago",
//      "creationDate": 1681330259,
//      "isCompleted": false,
//      "id": "3"
//     },
//     {
//      "title": "Entrare nella gilda dei ladri a Riften",
//      "creationDate": 1681330199,
//      "isCompleted": false,
//      "id": "4"
//     },
//     {
//      "title": "Andare a bere con Sam",
//      "creationDate": 1681334400,
//      "isCompleted": false,
//      "id": "5"
//     },
//     {
//      "title": "Portare l'osso illiaco di Pelagius",
//      "creationDate": 1681334340,
//      "isCompleted": false,
//      "id": "6"
//     },
//     {
//      "title": "Dire alla porta della confraternita che deve stare zitta",
//      "creationDate": 1681334280,
//      "isCompleted": false,
//      "id": "7"
//     },
//     {
//      "title": "Rovinare il matrimonio a Vittoria",
//      "creationDate": 1681334220,
//      "isCompleted": false,
//      "id": "8"
//     },
//     {
//      "title": "Rapire Lydia e mettera a capo di una fattoria senza possibilità di rescindere il contratto",
//      "creationDate": 1681334160,
//      "isCompleted": false,
//      "id": "9"
//     }
//    ]