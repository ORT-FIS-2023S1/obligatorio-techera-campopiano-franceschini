import express from "express";
import dotenv from "dotenv";
import path from "path";
import userRoutes from "./user/routes";
import adminRoutes from "./admin/routes";
import sharedRoutes from "./shared/routes";
import validateToken from "./shared/middlewares/validateToken";

dotenv.config();

const app = express();

//set middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "./shared/public"));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./shared/interface/views"));
//-------------------------------------------------------------
//Routes
app.use(validateToken);
app.use("/", sharedRoutes);
app.use("/user", userRoutes);
app.use("/admin", adminRoutes);

//-------------------------------------------------------------
//initialize the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
});
