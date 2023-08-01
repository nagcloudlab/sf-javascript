import './index.scss'
console.log("-index.js-")

// ----------------------------------------
// using DOM API
// ----------------------------------------

// step-1 : query DOM-Elements 
const alertBox = document.querySelector('.alert-info')
const greetBtn = document.querySelector(".btn-success")
const hideBtn = document.querySelector(".btn-danger")
const showBtn = document.querySelector(".btn-primary")

// step-2 : bind event Listeners & react
greetBtn.addEventListener('click', function () {
    alertBox.innerText = "good morning mary"
})
hideBtn.addEventListener('click', () => {
    alertBox.style.display = 'none'
})
showBtn.addEventListener('click', () => {
    alertBox.style.display = 'block'
})


// ----------------------------------------
// using DOM API + Timer Api
// ----------------------------------------

const images = [
    './images/1.jpeg',
    './images/2.jpeg',
    './images/3.jpeg',
    './images/4.jpeg',
];

const kungfuImgEle = document.getElementById('kungfu-img')
const startBtn = document.getElementById('start')
const stopBtn = document.getElementById('stop')
stopBtn.disabled = true

startBtn.addEventListener('click', e => {
    startBtn.disabled = true;
    stopBtn.disabled = false
    let idx = 0;
    const intervalId = setInterval(() => {
        const imagePath = images[idx];
        idx++;
        if (idx === images.length) {
            idx = 0;
        }
        kungfuImgEle.src = imagePath;
    }, 1000)
    stopBtn.addEventListener('click', e => {
        clearInterval(intervalId);
        startBtn.disabled = false;
        stopBtn.disabled = true
    })
})


// ----------------------------------------
// using DOM API + XHR Api
// ----------------------------------------

const todoListEle = document.getElementById("todo-list")

const topFiveTodosBtn = document.getElementById('top-5-todos')
const todosLimitListEle = document.getElementById('todos-limit-list')
const todosLimitInpEle = document.getElementById('todos-limit-inp')

topFiveTodosBtn.addEventListener('click', e => {
    loadAndRenderTodos()
})
todosLimitListEle.addEventListener('change', e => {
    const limit = e.target.value;
    if (limit !== '#')
        loadAndRenderTodos(limit)
})
todosLimitInpEle.addEventListener('blur', e => {
    const limit = e.target.value;
    if (limit !== '')
        loadAndRenderTodos(limit)
})


function loadAndRenderTodos(limit = 5) {

    // XHR API to send HTTP Request backend APIS
    const url = `https://jsonplaceholder.typicode.com/todos?_limit=${limit}`
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true); // async request
    xhr.send()
    document.getElementById('progress-message').innerText = "Loading todos.."
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            document.getElementById('progress-message').innerText = ""
            const jsonText = xhr.responseText;
            // parse json-text to javascript array
            const todos = JSON.parse(jsonText)
            const todoListElements = todos.map(todo => {
                return `
                    <li class="list-group-item ${todo.completed ? ' bg-success' : ''}">
                        <span class="badge bg-secondary">${todo.id}</span>
                        <span>${todo.title}</span>
                        <span class="badge bg-secondary">${todo.completed}</span>
                    </li>
                `
            })
            todoListEle.innerHTML = todoListElements.join("");
        }
    }

}