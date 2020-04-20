import {registerMiddleware} from "./policies/registrationPolicies";
import {loginMiddleware} from "./policies/loginPolicies";
import {register} from "./controllers/registrationController";
import {login} from "./controllers/loginController";

module.exports = (app) => {
  app.post("/register",
      registerMiddleware,
      register);
  app.post("/login",
      loginMiddleware,
      login);
};
