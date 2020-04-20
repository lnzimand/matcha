import {validateUsername, x as empty} from "../helpers/validation";

function loginMiddleware(request, response, next) {
    var {username} = request.body;
    var errorMessages = validateUsername(username);

    if (empty(errorMessages)) {
        next();
    } else {
        response.status(400).send({
            error: errorMessages
        });
    }
}

export {loginMiddleware}