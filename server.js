import express from "express";
import userRoutes from "./routes/userRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";
import logger from "./middleware/logger.js";

const app = express();
app.use(express.json());
app.use(logger);

app.use("/api/users", userRoutes);
app.use("/api/tasks", taskRoutes);

app.get("/", (req, res) => {
  res.json({ message: "VIRTUALIZER Coin API Running 🚀" });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
