import express from "express";
import {
  getTask,
getAllTasks,
createTask,
updateTask,
deleteTask,
deleteAllTasks,
} from "../controllers/taskControllers";

const router = express.Router();

router.get("/task/:id", getTask);
router.get("/tasks", getAllTasks);
router.post("/create", createTask);
router.post("/update/:id", updateTask);
router.delete("/delete/:id", deleteTask);
router.delete("/delete-all/:id", deleteAllTasks);

// module.exports = router;
export default router;
