import { Router } from "express";

import {
  create,
  getAll,
  get,
  update,
  deleteTask,
} from "../controllers/task.controller.js";

const router = Router();

router.route("/").post(create);
router.route("/").get(getAll);
router.route("/:id").get(get);
router.route("/:id").put(update);
router.route("/:id").delete(deleteTask);

export default router;
