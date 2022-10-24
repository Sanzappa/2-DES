fetch("https://jsonplaceholder.typicode.com/todos")
.then((response) => {
    return response.json();
})
.then((data) => {
    data.forEach(todos => {
        let title = document.createElement("h1");
        let cb = document.createElement("input")
        cb.type = "checkbox"
        cb.checked = todos.completed
        title.innerHTML = todos.userId + " " + todos.title;
        title.classList.add("titulo")
        cb.classList.add("checkbox")
        document.querySelector("body").appendChild(title);
        document.querySelector("body").appendChild(cb);
    })
})
