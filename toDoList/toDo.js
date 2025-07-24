const mainToDoElem = document.querySelector(".todo-lists-elem");
const inputValue = document.querySelector("#inputValue");
const form = document.querySelector("#todoForm");

const getTodoListFromLocal = () => {
  return JSON.parse(localStorage.getItem("todo")) || [];
};

let localTodoList = getTodoListFromLocal();

const saveToLocalStorage = () => {
  localStorage.setItem("todo", JSON.stringify(localTodoList));
};

const addTodoDynamicelement = (element) => {
  const divElement = document.createElement("div");
  divElement.classList.add("main_todo_div");
  divElement.innerHTML = `
    <li>${element}</li> 
    <button class="deleteBtn">Delete</button>
  `;

  // Delete button functionality
  divElement.querySelector(".deleteBtn").addEventListener("click", () => {
    localTodoList = localTodoList.filter(todo => todo !== element);
    saveToLocalStorage();
    renderTodoList(); // Re-render updated list
  });

  mainToDoElem.append(divElement);
};

const renderTodoList = () => {
  mainToDoElem.innerHTML = ""; // Clear existing list
  localTodoList.forEach(addTodoDynamicelement);
};

// Add new item
const addToDoList = () => {
  const toDoListValue = inputValue.value.trim();
  if (toDoListValue === "") return;

  localTodoList.push(toDoListValue);
  localTodoList = [...new Set(localTodoList)]; // Avoid duplicates
  saveToLocalStorage();
  renderTodoList();
  inputValue.value = ""; // Clear input
};

// Form submit handler
form.addEventListener("submit", (e) => {
  e.preventDefault();
  addToDoList();
});

// Initial load
renderTodoList();



