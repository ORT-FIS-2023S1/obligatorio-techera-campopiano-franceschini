import jwt from "jsonwebtoken";

const privatePaths = ["/user", "/admin"];

const isPublicPath = (path: string) => {
  let isPublic = true;
  for (let i = 0; i < privatePaths.length && isPublic; i++) {
    if (path.startsWith(privatePaths[i])) isPublic = false;
  }
  return isPublic;
};

export default (req, res, next) => {
  const Authorization = req.params.Authorization;
  if (isPublicPath(req.url)) {
    return next();
  }
  //validate token
  if (!Authorization) {
    //redirect to main page
    return res.redirect("/");
  }

  try {
    const verified = jwt.verify(Authorization, process.env.TOKEN_SECRET);
    req.user = verified;
    return next();
  } catch (error) {
    //redirect to login
    return res.redirect("/login");
  }
};
