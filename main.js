// console.log('async');

// setTimeout(togliLeLasagne(), 300)

// function togliLeLasagne() {
//     console.log('le lasagne sono cotte!');
// }

// for (let i = 0; i < 10000; i++) {
//     if (i%3===0 && i%5===0) {
//         console.log('Fizzbuzz');
//     }
//     if (i%5===0) {
//         console.log('Fizz');
        
//     }
//     if (i%3===0) {
//         console.log('buzz');
        
//     }
//     else{
//         console.log(i);
//     }
// }

// setTimeout(buttaLaSpazzatura,500)

// function buttaLaSpazzatura() {
//     console.log('rumenta');
// }

// setTimeout(salutaLaNonna, 210)

// function salutaLaNonna() {
//     document.body.innerHTML = '<h1> Ciao Nonna </h1>'
// }

fetch('http--')
.then(resp = resp.json())
.then(data => displayData(data));

  function  displayData(data) {
        const todoList = document.getElementById('todo-list');
        todoList.innerHTML = '';

        for (let i = 0; i < data.length; i++) {
            const element = data[i];
            
            const newLi = document.createElement('li');
            const titleNode = document.createTextNode(todo,title);
            newLi.appendChild(titleNode);
            todoList.appendChild(newLi);
        }
}