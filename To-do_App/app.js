let input = document.getElementById("text");
let addBtn = document.getElementById("add");
let taskList = document.getElementById("tasklist");
let tasks = [];

addBtn.addEventListener("click", () => {
    let inp = input.value.trim();
    if (inp.length > 0) {
        tasks.push(inp);
        renderUI();
        input.value = "";
    }

    else{
        alert("Error! Empty Cannot be Logged!!!");
    }
});

input.addEventListener("keydown", function(event){
    if (event.key === "Enter"){
        addBtn.click();
    }
});

function renderUI() {
    taskList.innerHTML = "";
    for (let i = 0; i < tasks.length; i++) {
        let newTask = document.createElement("li");
        newTask.textContent = tasks[i];
        taskList.append(newTask);
        newTask.addEventListener("click", () => {
            newTask.classList.toggle("completed");
        })

        let deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = "Delete";
        newTask.append(deleteBtn);
        deleteBtn.addEventListener("click", () => {
            tasks.splice(i, 1);
            renderUI();
        })
    }
}