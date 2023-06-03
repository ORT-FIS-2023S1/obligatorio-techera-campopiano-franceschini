import jwt from "jsonwebtoken";
import User from "../domain/entities/User";
import Cache from "../utils/cache";
import ENTITIES from "../domain/types/entities";
export default (req, res, next) => {
  const session = req.session;
  if (!session) {
    //redirect to main page
    return res.redirect("/");
  }
  //validate token
  const Authorization = session.Autorization;

  try {
    const verified: any = jwt.verify(Authorization, process.env.TOKEN_SECRET);
    if (typeof verified === "object" && verified.email) {
      const user: User = Cache.getEntity<User>(ENTITIES.USERS, verified.email);
      // pasar el usuario al siguiente middleware
      res.locals.user = user.toJSON();
      next();
    } else {
      // redirigir a la página de inicio de sesión si no se encontró el email
      return res.redirect("/login");
    }
  } catch (error) {
    // redirigir a la página de inicio de sesión en caso de error
    console.log(error);
    return res.redirect("/login");
  }
};
