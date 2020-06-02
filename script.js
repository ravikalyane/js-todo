//Selectors
let todoList = document.querySelector(".todo-list"),
    todoInput = document.querySelector(".todo-input"),
    addButton = document.querySelector(".add-task")

//Event Listener
addButton.addEventListener("click", fieldCheck)
todoList.addEventListener("click", taskAction)

//Check input field is empty or not
function fieldCheck() {
            if (todoInput.value.length == 0) {
                event.preventDefault()
                alert("Please enter a task")
            } else {
                event.preventDefault()
                addTask()
            }
        }

//Add task
function addTask(event) {

    //add div
    todoDiv = document.createElement("div")
    todoDiv.classList.add("todo-item")

    //create li
    todoLi = document.createElement("li")
    todoLi.innerHTML = todoInput.value
    todoDiv.appendChild(todoLi)

    //button container
    todoBtnDiv = document.createElement("div")
    todoDiv.appendChild(todoBtnDiv)

    //completedButton
    completedButton = document.createElement("button")
    completedButton.innerHTML = '<i class="fas fa-check-square"></i>'
    completedButton.classList.add("btn-check")
    todoBtnDiv.appendChild(completedButton)
    /*todoDiv.appendChild(completedButton)*/

    //deleteButton
    deleteButton = document.createElement("button")
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>'
    deleteButton.classList.add("btn-trash")
    todoBtnDiv.appendChild(deleteButton)
    /*todoDiv.appendChild(deleteButton)*/

    //append everything created above to ul
    todoList.appendChild(todoDiv)
    todoInput.value = ""
}

//Task update
function taskAction(event) {
    const item = event.target
    const todo = item.parentElement.parentElement
    if (item.classList == "btn-check") {
        todo.classList.toggle("completed")
    } 
    else if (item.classList == "btn-trash") {
        todo.classList.add('del-transition')
        todo.addEventListener('transitionend', function(){todo.remove()})
    }
}

