import express from "express"
import { config } from "dotenv"
import taskRouter from "./routers/tasksRouter.js";
import connectDB from "./config/db.js";
config();

const app=express();

connectDB();

// Middleware
app.use(express.json());
//tasks
app.use("/api/tasks/v1", taskRouter);

const PORT=process.env.PORT || 4000;
app.listen(PORT,()=>console.log(`Server is running on PORT:${PORT}`))