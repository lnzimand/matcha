import { validateUser, x as empty } from "../helpers/validation";

function registerMiddleware(request, response, next) {
    var {firstname, lastname, username, mail, password, confirmPassword} = request.body;
    var errorMessages = validateUser({firstname, lastname, username, mail, password, confirmPassword});

    if (empty(errorMessages)) {
        next();
    } else {
        response.status(400).send({
            error: errorMessages
        });
    }
}

export { registerMiddleware }