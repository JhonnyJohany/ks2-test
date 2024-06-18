import express from "express";
import "dotenv/config";
import cors from "cors";
import bodyParser from "body-parser";
import userRouter from "./routes/userRoutes.js";
import { Sequelize } from "sequelize";

const sequelize = new Sequelize("userdb", "postgres", "sys64738", {
  host: "localhost",
  port: 5555,
  dialect: "postgres",
});

const User = sequelize.define("User", {
  name: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
  },
});

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/api", userRouter);

const PORT = process.env.PORT || 8090;
app.listen(PORT, () => {
  console.log("Server listening on port " + PORT);
});
