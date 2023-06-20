export default (req, res) => {
  delete req.session.Autorization;
  res.redirect('/login');
};
