const Task = require("../models/Task");


const task_all = async (req, res) => {
    try{
const tasks = await Task.find();
res.json(tasks);
    } catch(error) {
        res.json({message:error});
    }
};

const task_details = async (req, res) => {
    try{
        const task = await Task.find({tag: req.params.taskId});
        res.json(task);
            } catch(error) {
                res.json({message:error});
            }
};

const task_create = async (req, res) => {

const task = new Task(req.body);

try{
    console.log(req.body);
    const saveTask =  await task.save();
    res.send(saveTask);
} catch(error) {
    res.status(200).send();
}
};

const task_update = async (req, res) => {
    try {
        const task = {
            title: req.body.title,
            description: req.body.description,
            tag: req.body.tag,
            author: req.body.salary,
           date: req.body.date
        };
    
        const updatedTask = await Task.findByIdAndUpdate(
          { _id: req.params.taskId },
          task
        );
        res.json(updatedTask);
      } catch (error) {
        res.json({ message: error });
      }

};

const task_delete = async (req, res) => {
    try {
        const removeTask = await Task.findByIdAndDelete(req.params.taskId);
        res.json(removeTask);
      } catch (error) {
        res.json({ message: error });
      }

};

module.exports = {
    task_all,
    task_details,
    task_create,
    task_update,
    task_delete
}
