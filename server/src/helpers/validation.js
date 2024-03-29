'use strict'
const regex = {
    username:/^[a-zA-Z0-9_-]+$/,
    email:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    name:/^[a-zA-Z]+$/,
    password:/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{4,12}$/
}

const x = function(name) {
    if (name === "" || name === null) {
        return true
    } else {
        return false
    }
}

Boolean(x)

function validateUsername(username) {
    const reg = regex.username
    if (x(username)) {
        return "Please complete all fields"
    } else if (!reg.test(username)) {
        return "Username should only consist of alphabets and numbers"
    }
    return ""
}

function validateEmail(email){
    const reg = regex.email
    if (x(email)) {
        return "Please complete all fields"
    } else if (!reg.test(email)) {
        return "Email provided is invalid"
    }
    return ""
};

function validateNames(name){
    const reg = regex.name
    if (x(name)) {
        return "Please complete all fields"
    } else if (!reg.test(name)) {
        return "Names should only consists of alphabets"
    }
    return ""
};

function validatePassword(password){
    const reg = regex.password
    if (x(password)) {
        return "Please complete all fields"
    } else if (!reg.test(password)) {
        return "Password should at least have one capital letter, one digit, a special character and be a minimum of 4 characters"
    }
    return ""
};

function capitalizeAll(str) {
    return str.toUpperCase()
}

function capitalize(str){
	return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function verifiedUser(bool) {
    if (bool === 0) {
        return false
    } else {
        return true
    }
}

function validateUser(user) {
    var error
    if (user['password'] === user['confirmPassword']) {
        if (error  = validateUsername(user['username'])) {
            return error
        } else if (error = validateEmail(user['mail'])) {
            return error
        } else if (error = validateNames(user['firstname'])) {
            return error
        } else if (error = validateNames(user['lastname'])) {
            return error
        } else if (error = validatePassword(user['password'])) {
            return error
        }
        return ""
    } else {
        return "Passwords do not match"
    }
}

export {
    validateUser,
    validateUsername,
    validateEmail,
    validateNames,
    validatePassword,
    verifiedUser,
    capitalizeAll,
    capitalize,
    x
}