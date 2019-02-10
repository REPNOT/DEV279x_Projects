var button1 = document.getElementById("button1");
var input1 = document.getElementById("input1");
var taskList = document.getElementById("taskList");

button1.addEventListener("click", function(){
    var task = input1.value;
    
    if(task.trim()){
        var newItem = document.createElement("LI");
        var taskText = document.createTextNode(task);
        newItem.appendChild(taskText);
        input1.value = "";
        taskList.appendChild(newItem);
    }
    else{
        alert("Task cannot be empty");
    }
});