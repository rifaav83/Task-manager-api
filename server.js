require("dotenv").config();
const express = require("express");

const taskRoutes = require("./routes/tasks");
const logger = require("./middleware/logger");

const server = express();
const PORT = process.env.PORT || 3000;


server.use(express.json());
server.use(logger);


server.use("/tasks", taskRoutes);


server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
