import jwt from 'jsonwebtoken';
import Cache from '../utils/cache';
import User from 'shared/domain/entities/User';
import ENTITIES from '../../shared/domain/types/entities';

export default (req, res) => {
  const {email, password} = req.body;

  const user: User = Cache.getEntity(ENTITIES.USERS, email);
  // ---------------------------------------------------------------------------------
  const message = 'Email or password is incorrect';
  if (!user || user.password !== password || user.email !== email) {
    console.log(message);

    res.render('login', {
      role: null,
      data: {errorMessage: message},
      configs: {},
    });
  } else {
    const token = jwt.sign(
      {email: req.body.email, role: user.role},
      process.env.TOKEN_SECRET,
    );

    req.session.Autorization = token;
    res.redirect(`${user.role}/index`);
  }
};
