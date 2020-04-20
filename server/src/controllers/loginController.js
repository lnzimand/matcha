import bcrypt from "bcrypt";
import {User} from "../dbConnection/Users";
import {capitalizeAll} from "../helpers/validation";

function login(request, response) {
    var { username, password } = request.body;
    var user = new User();

    user.findOne({username: username}, 'Users').then(result => {
        var userJSON = result[0]
        
        if (userJSON) {
            bcrypt.compare(password, userJSON.password, (error, result) => {
                if (result) {
                    var usernameCapitalized = capitalizeAll(username);
                    var userSess = {
                        loggedIn: true,
                        username: usernameCapitalized
                    }
                    // request.session.user = userSess;
                    user.updateInfo({active: 1}, {condition: 'username', value: username}, 'Users').then(result => {
                        console.log(result)
                        user.isVerified({username: username}).then(result => {
                            user.firstTimeLogin({username: username}).then(result => {
                                user.updateInfo({last_login: new Date()}, {condition: 'username', value: username}, 'Users');
                                user.findOne({username: username}, 'Users').then(result => {
                                    var userJSON = result[0]

                                    response.send({
                                        user: userJSON,
                                        loggedIn: true
                                    });
                                }).catch(error => {
                                    response.status(500).send({
                                        error: "Something went wrong. Please try again"
                                    })
                                })
                            }).catch(notFirstLogger => {
                                user.updateInfo({last_login: new Date()}, {condition: 'username', value: username}, 'Users')
                                response.send({
                                    user: userJSON,
                                    loggedIn: true
                                });
                            })
                        }).catch(notVerified => {
                            response.status(403).send({
                                error: "Please check your email and verify your account"
                            });
                        })
                    })
                } else {
                    response.status(403).send({
                        error: "Login information incorrect"
                    });
                }
            })
        } else {
            response.status(403).send({
                error: "Login information incorrect"
            })
        }
    }).catch(error => response.status(500).send({
        error: "An error has occured while trying to log in. Please try again later"
    }))
}

export {login}