// controllers/tasksController.js
const { tasks, Task } = require('../models/taskModel');


const createTask = (req, res) => {
    const { title, description } = req.body;
    const newTask = new Task(tasks.length + 1, title, description);
    tasks.push(newTask);
    res.status(201).json(newTask);
};


const getTasks = (req, res) => {
    res.status(200).json(tasks);
};


const updateTask = (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body;
    
    const task = tasks.find(t => t.id === parseInt(id));
    if (!task) return res.status(404).json({ message: "Task not found" });

    task.title = title || task.title;
    task.description = description || task.description;

    res.status(200).json(task);
};


const deleteTask = (req, res) => {
    const { id } = req.params;
    const taskIndex = tasks.findIndex(t => t.id === parseInt(id));
    if (taskIndex === -1) return res.status(404).json({ message: "Task not found" });

    tasks.splice(taskIndex, 1);
    res.status(204).send();
};

module.exports = { createTask, getTasks, updateTask, deleteTask };
