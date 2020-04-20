import { User } from "../dbConnection/Users"

function completeProf(request, response) {
    var user = new User()
    var fields = {
        user_id: request.body.email
    }
    Object.assign(fields, request.body.interests);

    if (request.body.gender) {
        var name = {
            name: request.body.gender
        }
        console.log(name)
        user.updateRefTable(name, 'Genders', 'gender_id', request.body.email)
    }
    if (request.body.sexualPreference) {
        user.updateRefTable(request.body.sexualPreference, 'SexualPreference', 'sexual_preference_id', request.body.email)
    }

    user.findOne({user_id: request.body.user_id}, 'Interests').then(result => {
        if (result.length === 0) {
            user.pushInfo(fields, 'Interests').then(result => {
                response.send({
                    page: "Home page",
                })
            }).catch(error => {
                response.status(400).send({
                    error: error
                })
            })
        } else {
            user.updateInfo(fields, {condition: 'user_id', value: mail}, 'Interests').then(result => {
                response.send({
                    page: "Home page",
                })
            }).catch(error => {
                response.status(400).send({
                    error: `Something went wrong while trying to update interests. Error: ${error})`
                })
            })
        }
    }).catch(error => {
        response.status(400).send({
            error: error
        })
    })
}

export { completeProf }