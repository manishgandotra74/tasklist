const express = require('express');
const router = express.Router();
const Task = require('../mongoose-models/task')
//add tasks
router.post("/add-task", function (req, res) {
    const task = new Task({
        name: req.body.name,
        description: req.body.description,
        repeated_task: req.body.repeat_task,
        status: false
    });
    console.log(task);
    
    task.save().then(friend => {
        console.log(friend);
        
        if (friend._id) {
            res.send({message:'Task saved Successfully'})
        } else {
            res.send('Some error occured please try again')

        }
    })
});
// get all task list
router.get("/get-all-task", function (req, res) {
    Task.find().then(friend => {
        if (friend) {
            res.send({ tasks: friend })
        } else {
            res.send('Some error occured please try again')

        }
    })
});
// get all completed tasks
router.get("/get-completed-task", function (req, res) {
    Task.find({ status: true }).then(friend => {
        if (friend) {
            res.send({ tasks: friend })
        } else {
            res.send('Some error occured please try again')

        }
    })
});
// change status 
router.post("/change-status", function (req, res) {
    console.log(req.body.id , req.body.status);
    
    Task.updateOne({
        _id: req.body.id,
    }, {
        status: req.body.status
    }).then(data => {
        console.log(data);
        
        if (data.nModified === 1) {
            res.status(200).json({
                message: 'Task status undone'
            })

        }
    })
});
module.exports = router;
