    // We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.

    let arrayOfTodos = [
        {
        "userId": 14,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    },
    {
        "userId": 20,
        "id": 2,
        "title": "delectus aut autem",
        "completed": false
    }]

    console.log(arrayOfTodos[0].userId) // => 14
    console.log(arrayOfTodos[1].userId) // => 20
    
    const fetchTodos = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then( (response) => response.json())
        .then( (json) => arrayOfTodos = json)
    }
    
    const logTodos = () => {
        console.log(arrayOfTodos)
    }
    
    let ol = document.getElementById('todo-list')
    const populateTodos = () => {
    const ol = document.getElementById('todo-list');

    let li = document.createElement('li');
    var text = document.createTextNode(title);

        li.append(text);
        ol.append(li);
    }
