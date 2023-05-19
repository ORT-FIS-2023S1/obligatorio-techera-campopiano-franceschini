const register = (req, res) => {
  res.render("register", {});
};

const login = (req, res) => {
  const { email, password } = req.body;
  //Required
  if (!email || !password) {
    console.log("Please fill in all the fields");
    res.render("login", {
      email,
      password,
    });
  } else {
    //validate email and password
    if (email === "test" && password === "test") {
      res.render("dashboard", {
        email,
        password,
      });
    }
  }
};
module.exports = {
  register,
  login,
};
