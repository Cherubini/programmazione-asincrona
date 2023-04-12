class TodoList{
    constructor(title, todoArray = []){
        this.title = title;
        this.todoArray = todoArray;
    }

    static fromObjectToArray(name, objectArray){
        console.log(objectArray);
        const newTodoList = new TodoList(name);
        for (let i = 0; i < objectArray.length; i++) {
            const todoObject = objectArray[i];
            const newTodo = Todo.fromTodoObject(todoObject) 
            newTodoList.addTodo(newTodo);
        }    
       return newTodoList;
    }

    addTodo(todo){
        this.todoArray.push(todo);    }

    removeTodo(todo){

    }

    sortByTitle(){

    }

    sortByCreationDate(){

    }

    completeTodo(){

    }
}