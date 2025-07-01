import { Router } from "express";
import { addTask, deleteTaskById, getTask, getTasksById, updateTask } from "../controllers/tasksController.js";

const router=Router();

//getting tasks
router.get("/tasks", getTask);

//getting task by id
router.get("/task/:id", getTasksById);

//posting tasks
router.post("/tasks", addTask);

//update tasks
router.put('/task/:id', updateTask);

//delete task by id
router.delete("/task/:id", deleteTaskById);


// CRUD-
// Creating--POST
// Read--GET
// Update--PUT / PATCH
// Delete--DELETE


const taskRouter=router;
export default taskRouter;


