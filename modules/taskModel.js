// modules/taskModel.js

class Task {
    constructor(id, title, description) {
        this.id = id;
        this.title = title;
        this.description = description;
    }
}

let tasks = [];  
tasks.push(new Task(1, "Task 1", "Description of Task 1"));
tasks.push(new Task(2, "Task 2", "Description of Task 2"));

export { tasks, Task };
