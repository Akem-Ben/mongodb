"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const taskControllers_1 = require("../controllers/taskControllers");
const router = express_1.default.Router();
router.get("/task/:id", taskControllers_1.getTask);
router.get("/tasks", taskControllers_1.getAllTasks);
router.post("/create", taskControllers_1.createTask);
router.post("/update/:id", taskControllers_1.updateTask);
router.delete("/delete/:id", taskControllers_1.deleteTask);
router.delete("/delete-all/:id", taskControllers_1.deleteAllTasks);
// module.exports = router;
exports.default = router;
//# sourceMappingURL=tasks.js.map