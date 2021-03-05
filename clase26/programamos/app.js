let input = document.getElementById('input');
let todoList = document.getElementById('todoList');
let btn = document.getElementById('btn');

input.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        let li = document.createElement('li');
        li.textContent = input.value;
        todoList.appendChild(li);
        input.value = '';
    }
});

btn.addEventListener('click', () => {
    let li = document.createElement('li');
    li.textContent = input.value;
    todoList.appendChild(li);
    input.value = '';
});

let parrafo = document.createElement('p');
parrafo.textContent = 'despues de elemento ul';
todoList.before(parrafo);
