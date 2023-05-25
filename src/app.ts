import express, { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import path from "path";
import userRoutes from "./user/routes";
import adminRoutes from "./admin/routes";
import sharedRoutes from "./shared/routes";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();

// set middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "shared", "public")));
app.use(cookieParser()); // Usar el middleware cookie-parser
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "shared", "interface", "views"));

// Middleware de verificación de token
const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies.token; // Obtener el valor de la cookie 'token'
  if (token) {
    try {
      const decoded = jwt.verify(token, "secret");
      (req as any).token = decoded; // Utilizamos 'req as any' para evitar errores de tipado
    } catch (error) {
      console.log("Token inválido");
    }
  }

  next();
};

// Aplicar el middleware de verificación de token
app.use(verifyToken);

// Routes
app.get("/", (req: Request, res: Response) => {
  res.render("index");
});

app.get("/adminProfile", (req: Request, res: Response, next: NextFunction) => {
  const token = (req as any).token; // Accedemos al token utilizando 'req as any'

  if (token) {
    // El token es válido, hacer algo con él
    // Por ejemplo, obtener el ID del usuario: const userId = token.userId;

    res.send("Ruta protegida");
  } else {
    res.status(401).send("Token inválido o no proporcionado");
  }
});

app.use("/", sharedRoutes);
app.use("/user", userRoutes);
app.use("/admin", adminRoutes);

// Initialize the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
});
