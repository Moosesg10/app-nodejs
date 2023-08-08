import express from "express";
import empolyeesRoutes from "./routes/empolyees.routes.js";
import indexRoutes from "./routes/index.routes.js";
import "./config.js";

const app = express();

app.use(express.json());

app.use(indexRoutes);
app.use("/api", empolyeesRoutes);

app.use((req, res, next) => {
  res.status(404).json({
    message: "endpoint not found",
  });
  next();
});

export default app;
