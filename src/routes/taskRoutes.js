
import { Router } from 'express';
import { getTasks, getTask, createTask, updateTask, deleteTask } from '../controllers/taskController.js';

const router = Router();

// GET all
router.get('/', getTasks);

// GET single
router.get('/:id', getTask);

// POST create
router.post('/', createTask);

// PUT update
router.put('/:id', updateTask);

// DELETE remove
router.delete('/:id', deleteTask);

const taskRoutes = router;
export default taskRoutes;
