import jwt from "jsonwebtoken";
import Cache from "../../utils/cache";
import User from "shared/domain/User";

export default (req: any, res: any) => {
  const { email, password } = req.body;
  const cache = Cache.getInstance();

  const user: User = cache.get(email);
  const message = "Email or password is incorrect";

  if (!user || user.password !== password || user.email !== email) {
    console.log(message);

    res.render("login", {
      role: null,
      data: { errorMessage: message },
      configs: {},
    });
  } else {
    const token = jwt.sign(
      { email: req.body.email, role: user.role },
      "secret"
    );

    user.token = token;

    res.cookie("token", token); // Agregar el token en una cookie en la respuesta
    res.redirect("/adminProfile"); // Redireccionar al perfil del administrador o cualquier otra ruta que desees
  }
};
