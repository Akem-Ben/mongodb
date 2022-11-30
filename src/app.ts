import express from "express";
import logger from "morgan";
import mongoose from "mongoose";
import tasksrouter from "./routes/tasks";
import dotenv from 'dotenv';

dotenv.config()

const app = express();

mongoose.connect(process.env.DATABASE_URL!, () =>{
    console.log('Database connected')
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/users', tasksrouter);

const Port = 3005;
app.listen(3005, () => {
    console.log(`Server started on port ${Port}`);
})
export default app
