"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const taskAdjunctSchema = new mongoose_1.Schema({
    taskId: { type: String, required: true },
    description: { type: String, required: true },
    startDate: { type: String, required: true },
    endDate: { type: String, required: true },
});
const TaskAdjunctSchema = (0, mongoose_1.model)("tasks_adjuncts", taskAdjunctSchema);
exports.default = TaskAdjunctSchema;
