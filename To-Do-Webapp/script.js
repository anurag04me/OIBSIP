document.getElementById("add-task-btn").addEventListener("click", function() {
    let taskInput = document.getElementById("task-input");
    let taskText = taskInput.value.trim();

    if (taskText) {
        addTask(taskText);
        taskInput.value = "";
        taskInput.focus();
    }
});

function addTask(taskText) {
    let taskList = document.getElementById("task-list");

    let li = document.createElement("li");
    li.textContent = taskText;

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";
    deleteBtn.addEventListener("click", function() {
        taskList.removeChild(li);
    });

    li.addEventListener("click", function() {
        li.classList.toggle("completed");
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);
}
