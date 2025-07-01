import express from 'express';
import { config } from "dotenv"
import morgan from 'morgan';
import cors from 'cors';
import taskRoutes from './routes/taskRoutes.js';
import { errorHandler } from './middlewares/errorMiddleware.js';
import connectDB from './config/db.js';


// Load env vars
config();

// Connect to MongoDB
connectDB();

// Initialize app
const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

// Routes
app.use('/api/tasks/v1', taskRoutes);

// Error handler
app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
