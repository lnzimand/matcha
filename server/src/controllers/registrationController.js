import bcrypt from "bcrypt"
import { User } from "../dbConnection/Users"
import { sendMail } from "../helpers/mail"
import randomstring from "randomstring"

function register(request, response) {
    var { firstname, lastname, username, mail, password } = request.body

    var user = new User()
    var vkey = randomstring.generate()
    user.findOne({email: mail}, 'Users').then(result => {
        if (result.length > 0) {
            response.status(400).send({
                error: "Email already exist"
            })
        } else {
            user.findOne({username: username}, 'Users').then(result => {
                if (result.length > 0) {
                    response.status(400).send({
                        error: "Username already exist"
                    })
                } else {
                    bcrypt.hash(password, 10, (error, hash) => {
                        var userReg = { email: mail, username: username, firstname: firstname, lastname: lastname, password: hash, vkey: vkey, date_created: new Date() }
                        var options = {to: mail, subject: "Email verification", message: `<a href='localhost:8080/verify/user?vkey=${vkey}'>Click here</a> to verify your email`}

                        // sendMail(options).then((result) => {
                            user.pushInfo(userReg, "Users").then(result => {
                                response.send({
                                    message: "User registered, check your email for verification*"
                                })
                            }).catch(error => {
                                response.status(400).send({
                                    error: "Something went wrong. Please try again"
                                })
                            })
                        // }).catch(error => {
                        //     response.status(400).send({
                        //         error: "Something went wrong, unable to sent mail. Please try again"
                        //     })
                        // })
                    })
                }
            })
        }
    }).catch(error => {
        response.status(500).send({
            error: "An error has occured while trying to register. Please try again later"
        })
    })
}

export { register }