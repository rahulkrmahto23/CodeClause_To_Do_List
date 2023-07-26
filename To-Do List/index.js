// let inputBox = document.querySelector('#inputBox');
//         let list = document.querySelector('#list');

//         inputBox.addEventListener("keyup", function(event){
//             if(event.key=="Enter"){
//                 addItem(this.value)
//                 this.value=""
//             }
//         }
//         )

//         let addItem =(inputBox) => {
//             let listItem = document.createElement("li");
//             listItem.innerHTML = '${inputBox}<i><i>';
//                 list.appendChild(listItem);
//         }

function addTask() {
  var taskInput = document.getElementById("taskInput");
  var taskList = document.getElementById("taskList");

  if (taskInput.value === "") {
      alert("Please enter a task.");
      return;
  }

  var newTask = document.createElement("li");
  newTask.textContent = taskInput.value;

  newTask.addEventListener("click", function() {
  this.classList.toggle("completed");
  });

  var crossBtn = document.createElement("span");
  crossBtn.className = "cross-btn";
  crossBtn.innerHTML = "&#10005;";
  crossBtn.addEventListener("click", function() {
  this.parentNode.remove();
  });

  newTask.appendChild(crossBtn);
  taskList.appendChild(newTask);
  taskInput.value = "";
  }

  var addBtn = document.getElementById("addBtn");
  addBtn.addEventListener("click", addTask);

  var taskInput = document.getElementById("taskInput");
  taskInput.addEventListener("keydown", function(event) {
  if (event.keyCode === 13) {
      addTask();
  }
  });