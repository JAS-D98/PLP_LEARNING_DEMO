import Task from "../model/taskModel.js";

//get tasks
export const getTask=async(req,res)=>{
     try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
  } catch (error) {
        console.log("Error", error)
        res.status(500).json("A problem occurred while adding your task")
  }
}

//get task by id
export const getTasksById=async(req,res)=>{
   try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.status(200).json(task);
  } catch (error) {
    next(error);
  }
}

// add tasks
export const addTask=async(req, res)=>{
    try{
        const {title, description}=req.body;
       
        const task=await Task.create({title, description});
    
        return res.status(201).json({success: true, message: "You've successfully added"});

    }catch(error){
        console.log("Error", error)
        res.status(500).json("A problem occurred while adding your task")
    }
}

// update tasks
export const updateTask=async(req, res)=>{
    try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.status(200).json(task);
  } catch (error) {
     console.log("Error", error)
    res.status(500).json("A problem occurred while adding your task")
  }
}

// delete task by id
export const deleteTaskById=async(req, res)=>{
    try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.status(200).json({ message: 'Task deleted' });
  } catch (error) {
    console.log("Error", error)
    res.status(500).json("A problem occurred while adding your task")
  }
}