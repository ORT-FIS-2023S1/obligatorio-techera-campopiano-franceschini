import jwt from "jsonwebtoken";
import User from "../shared/domain/User";
import Cache from "./cache";
export default (token: string): User => {
  const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
  const user: User = Cache.getInstance().get(decoded.email);

  return user;
};
