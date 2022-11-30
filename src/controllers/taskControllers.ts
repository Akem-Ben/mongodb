import { Request, Response } from "express";
import Todo from '../models/taskmodels';

export const createTask = async (req: Request, res: Response) => {
    try{
        const {_id, description, status} = req.body;

        const task = await Todo.create({
            _id,
            description,
            status,
    });

    res.status(201).json({
        status: "Successfully created",
        data: {
            task,
        },
    });
} catch(error) {
    res.status(400).json({
        status: "Failed to create",
    });

}
}

export const getAllTasks = async (req: Request, res: Response) => {
    try {
        const tasks = await Todo.find({});
        res.status(200).json({
            status: 'retrieved all tasks',
            data: {
                tasks,
            },
        });
    } catch(error) {
        res.status(400).json({
            status: "Failed to retrieve all tasks",
        });
    
    }

}

export const getTask = async (req: Request, res: Response) => {
    try {
        const task = await Todo.findById(req.params.id);
        res.status(200).json({
            status: 'success',
            data: {
                task
            },
        });
    } catch(error) {
        res.status(400).json({
            status: "Failed to fetch Task",
        });
    
    }

}

export const updateTask = async (req: Request, res: Response) => {
    try {
        const taskToUpdate = await Todo.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        res.status(200).json({
            status: 'Task successfully updated',
            data: {
                taskToUpdate,
            },
        });
    } catch(error) {
        res.status(400).json({
            status: "Failed to update Task",
        });
    
    }
}

export const deleteTask = async (req: Request, res: Response) => {
    try {
        await Todo.findByIdAndDelete(req.params.id);
        res.status(204).json({
            status: 'Task successfully deleted',
            data: null,
        });
    } catch(error) {
        res.status(400).json({
            status: "Failed to delete Task",
        });
    
    }
}   

export const deleteAllTasks = async (req: Request, res: Response) => {
    try {
        const limiter = req.query.limit;
        await Todo.deleteMany({limiter})
        res.status(204).json({
            status: 'All Tasks successfully deleted',
            data: null,
        });
    } catch(error) {
        res.status(400).json({
            status: "Failed to delete all Tasks",
        });
    
    }
};