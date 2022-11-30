"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAllTasks = exports.deleteTask = exports.updateTask = exports.getTask = exports.getAllTasks = exports.createTask = void 0;
const taskmodels_1 = __importDefault(require("../models/taskmodels"));
const createTask = async (req, res) => {
    try {
        const { _id, description, status } = req.body;
        const task = await taskmodels_1.default.create({
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
    }
    catch (error) {
        res.status(400).json({
            status: "Failed to create",
        });
    }
};
exports.createTask = createTask;
const getAllTasks = async (req, res) => {
    try {
        const tasks = await taskmodels_1.default.find({});
        res.status(200).json({
            status: 'retrieved all tasks',
            data: {
                tasks,
            },
        });
    }
    catch (error) {
        res.status(400).json({
            status: "Failed to retrieve all tasks",
        });
    }
};
exports.getAllTasks = getAllTasks;
const getTask = async (req, res) => {
    try {
        const task = await taskmodels_1.default.findById(req.params.id);
        res.status(200).json({
            status: 'success',
            data: {
                task
            },
        });
    }
    catch (error) {
        res.status(400).json({
            status: "Failed to fetch Task",
        });
    }
};
exports.getTask = getTask;
const updateTask = async (req, res) => {
    try {
        const taskToUpdate = await taskmodels_1.default.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        res.status(200).json({
            status: 'Task successfully updated',
            data: {
                taskToUpdate,
            },
        });
    }
    catch (error) {
        res.status(400).json({
            status: "Failed to update Task",
        });
    }
};
exports.updateTask = updateTask;
const deleteTask = async (req, res) => {
    try {
        await taskmodels_1.default.findByIdAndDelete(req.params.id);
        res.status(204).json({
            status: 'Task successfully deleted',
            data: null,
        });
    }
    catch (error) {
        res.status(400).json({
            status: "Failed to delete Task",
        });
    }
};
exports.deleteTask = deleteTask;
const deleteAllTasks = async (req, res) => {
    try {
        const limiter = req.query.limit;
        await taskmodels_1.default.deleteMany({ limiter });
        res.status(204).json({
            status: 'All Tasks successfully deleted',
            data: null,
        });
    }
    catch (error) {
        res.status(400).json({
            status: "Failed to delete all Tasks",
        });
    }
};
exports.deleteAllTasks = deleteAllTasks;
//# sourceMappingURL=taskControllers.js.map