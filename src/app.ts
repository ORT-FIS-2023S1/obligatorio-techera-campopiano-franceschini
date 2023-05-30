import express from "express";
import session from "express-session";
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
//app.use(express.static(__dirname + "./shared/public"));
// Configurar la carpeta 'public' como estática
app.use(express.static(path.join(__dirname, "shared/public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./shared/interface/views"));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);
//-------------------------------------------------------------
//Routes
app.use("/", sharedRoutes);
//----------------PRIVATE ROUTES------------------------------
app.use(validateToken); //check if the token is valid
app.use("/user", userRoutes);
app.use("/admin", adminRoutes);

//-------------------------------------------------------------
//initialize the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
});
