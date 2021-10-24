const todos = localStorage.getItem("todos")
  ? JSON.parse(localStorage.getItem("todos"))
  : [];

window.addEventListener("load", () => {
  displayTodos();
});

function displayTodos() {
  let ul = document.querySelector("ul");
  if (todos.length !== 0) {
    todos.map((todo) => {
      let li = document.createElement("li");
      li.innerHTML = `
      <span class="todo-item">${todo.name}</span>
      <img onclick="deleteTodo(${todo.id})" src = "clear.svg" alt="Clear SVG"/>
  `;
      ul.appendChild(li);
    });
  }
  document.getElementById("todos").appendChild(ul);
}

function addTodo() {
  let input = document.querySelector("input");
  let ul = document.querySelector("ul");
  let li = document.createElement("li");
  if (input.value != "") {
    const todo = {
      id: Math.random(),
      name: input.value,
      isCompleted: false,
    };
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
    li.innerHTML = `
        <span class="todo-item">${todo.name}</span>
        <img onclick="deleteTodo(${todo.id})" src = "clear.svg" alt="Clear SVG"/>
    `;
    ul.appendChild(li);
    input.value = "";
  } else {
    alert("Listeye boş ekleme yapamazsınız!");
  }
}

function deleteTodo(todoId) {
  const newTodos = todos.filter((todo) => todo.id !== todoId);
  console.log(newTodos);
  localStorage.setItem("todos", JSON.stringify(newTodos));
  displayTodos();
}
