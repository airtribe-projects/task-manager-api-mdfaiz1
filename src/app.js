import express from "express";

const app = express();
app.use(express.json());
app.get("/", async (_, res) => {
  res.send("Express Working Properly");
});

import taskRouter from "./routes/task.routes.js";
app.use("/api/v1/tasks", taskRouter);

export { app };
