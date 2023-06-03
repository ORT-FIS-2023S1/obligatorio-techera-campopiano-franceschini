import path from "path";

export default (req, res) => {
  const user = res.locals.user;
  res.render(path.join(__dirname, "../interface/views/home"), {
    user,
    data: {},
    configs: {},
  });
};
