// models/taskModel.js

let tasks = [];  


function Task(id, title, description) {
    this.id = id;
    this.title = title;
    this.description = description;
}

module.exports = { tasks, Task };
