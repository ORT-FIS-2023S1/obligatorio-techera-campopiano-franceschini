import jwt from "jsonwebtoken";
import User from "../domain/User";
import Cache from "../../utils/cache";
export default (req, res, next) => {
  const session = req.session;
  if (!session) {
    //redirect to main page
    return res.redirect("/");
  }
  //validate token
  const Authorization = session.Autorization;

  try {
    const verified = jwt.verify(Authorization, process.env.TOKEN_SECRET);
    const user: User = Cache.getInstance().get(verified.email);
    // pass user to next middleware
    res.locals.user = user.toJSON();
    next();
  } catch (error) {
    //redirect to login
    return res.redirect("/login");
  }
};
