// We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.

let arrayOfTodos = []



const fetchTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then((response) => response.json())
        .then((json) => arrayOfTodos = json)
}

const logTodos = () => {
    console.log(arrayOfTodos)
}

const populateTodos = () => {
    let ol = document.getElementById('todo-list')
    for (let index = 0; index < arrayOfTodos.length; index++) {
        const title = arrayOfTodos[index].title;
        let li = document.createElement('li');
        var text = document.createTextNode(title);
        li.appendChild(text);
        ol.appendChild(li);
    }


}

const FilterUserId = () => {
    let userId = document.getElementById("numUser").value;
    console.log("userId = " + userId);
    let userIdArray = arrayOfTodos.filter(toDo => toDo.userId == userId);
    console.log(userIdArray)
    removeElements();
    let ol = document.getElementById('todo-list')
    for (let index = 0; index < userIdArray.length; index++) {
        const title = userIdArray[index].title;
        let li = document.createElement('li');
        var text = document.createTextNode(title);
        li.appendChild(text);
        ol.appendChild(li);
    }

}

const removeElements = () => {
    const allListElements = document.querySelectorAll("li")
    console.log(allListElements)
    for (let index = 0; index < allListElements.length; index++) {
        const element = allListElements[index];
        console.log(element)
        element.remove()
    }
}

const filterComplete = () => {
       let userId = document.getElementById("numUser").value;
    console.log("userId = " + userId);
    let userIdArray = arrayOfTodos.filter(toDo => toDo.userId == userId);
    console.log(userIdArray)
    let userCompleteArray = userIdArray.filter(toDo => toDo.completed == true)
    removeElements();
    let ol = document.getElementById('todo-list')
    for (let index = 0; index < userCompleteArray.length; index++) {
        const title = userCompleteArray[index].title;
        let li = document.createElement('li');
        var text = document.createTextNode(title);
        li.appendChild(text);
        ol.appendChild(li);
    }

}

