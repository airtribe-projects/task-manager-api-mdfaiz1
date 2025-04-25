import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Task } from "../models/task.model.js";

const create = asyncHandler(async (req, res) => {
  const { title, description } = req.body;
  if (!title || !description) {
    throw new ApiError(400, "Mandatory Required Field");
  }

  const newData = await Task.create({
    title,
    description,
  });
  if (!newData) {
    throw new ApiError(500, "Something Went Wrong While Creating");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, newData, "Task Created Successfully"));
});

const getAll = asyncHandler(async (req, res) => {
  const dataList = await Task.find();
  if (!dataList) {
    throw new ApiError(404, "Tasks Not Found");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, dataList, "All Tasks Fetched Successfully"));
});

const get = asyncHandler(async (req, res) => {
  if (!req.params.id) {
    throw new ApiError(400, "Task ID not Found");
  }
  const taskData = await Task.findById(req.params.id);

  if (!taskData) {
    throw new ApiError(404, "Task Not Found");
  }
  return res
    .status(200)
    .json(new ApiResponse(200, taskData, "Task Fetched Successfully"));
});

const update = asyncHandler(async (req, res) => {
  if (!req.params.id) {
    throw new ApiError(400, "Task ID not Found");
  }
  const { id } = req.params;
  const { title, description, completed } = req.body;
  if (!title || !description || !completed) {
    throw new ApiError(400, "Fields Are Required");
  }

  const newData = await Task.findByIdAndUpdate(id, {
    title,
    description,
    completed,
  });

  if (!newData) {
    throw new ApiError(500, "Something Went Wrong While Updating");
  }
  const updatedData = await Task.findById(newData._id);

  return res
    .status(200)
    .json(new ApiResponse(200, updatedData, "Update Task Successfully"));
});

const deleteTask = asyncHandler(async (req, res) => {
  if (!req.params.id) {
    throw new ApiError(400, "Task ID not Found");
  }

  const deleteData = await Task.findByIdAndDelete(req.params.id);

  if (!deleteData) {
    throw new ApiError(404, "Task Not Found");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, {}, "Task Deleted Succfully"));
});

export { create, getAll, get, update, deleteTask };
