import express from "express";
import dotenv from "dotenv";
import path from "path";
import { loginRoutes } from "./routes";

dotenv.config();

const app = express();

//set middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/interface/views"));
//-------------------------------------------------------------
//Routes
app.get("/", (req, res) => {
  res.render("index");
});
app.use("/login", loginRoutes);

//-------------------------------------------------------------
//initialize the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
});
