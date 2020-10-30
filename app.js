// Define UI Variables
const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

// Load all event listeners
loadEventListerns();

function loadEventListerns() {
  // Add Task Event
  form.addEventListener("submit", addTask);
}

// Add Task
function addTask(e) {
  if (taskInput.value == "") {
    alert("Add a task");
  }
  // Create li element
  const li = document.createElement("li");
  // Add a class
  li.className = "collecion-item";
  // Create text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));
  // Create new link element
  const link = document.createElement("a");
  link.className = "delete-item secondary-content";
  // Add icon html
  link.innerHTML = '<i class="fa fa-remove"></i>';
  // Append the link to li
  li.appendChild(link);

  // Append li to ul
  taskList.appendChild(li);

  // Clear Input
  taskInput.value = "";

  e.preventDefault();
}
