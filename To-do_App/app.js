const input = document.getElementById('tasks');
const addTask = document.getElementById('addTask');
const taskList = document.getElementById('taskList');

addTask.addEventListener("click", () => {
    task = input.value.trim();
    if (!task){
        return;
    }

    else{
        const li = document.createElement('li');
        li.textContent = task;
        taskList.appendChild(li);
    }

    input.value = '';
});

