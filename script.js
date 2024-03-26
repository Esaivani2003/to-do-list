// Function to add a new task
function addTask() {
    var input = document.getElementById("taskInput");
    var task = input.value.trim();

    if (task !== "") {
        var ul = document.getElementById("taskList");
        var li = document.createElement("li");
        var span = document.createElement("span");
        span.textContent = task;
        span.classList.add("task-text");
        li.appendChild(span);
        li.innerHTML += '<button class="delete-btn" onclick="deleteTask(this)">Delete</button>';
        ul.appendChild(li);
        input.value = ""; // Clear input field
    } else {
        alert("Please enter a task!");
    }}

    // Function to mark a task as completed
    function toggleTask(event) {
        if (event.target && event.target.nodeName === "SPAN") {
            event.target.classList.toggle("completed");
        }
    }
    
    // Function to delete a task
    function deleteTask(element) {
        var li = element.parentElement;
        li.remove();
    }