const {register} = require("./controllers/AuthenticationController");

module.exports = (app) => {
  app.post("/register",
    register);
};
