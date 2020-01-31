const regex = {
    username:/^[a-zA-Z0-9_-]+$/,
    email:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    name:/^[a-zA-Z]+$/,
    password:/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{4,1000}$/
}

function ft_valid_username(username, messages){
    const reg = regex.username;
    if (!username || username == "")
    {
        return messages.required;
    }
    else if (!reg.test(username))
    {
        return messages.invalid;
    }
    return false;
}

function ft_valid_email(email, messages){
    const reg = regex.email;
    if (!email || email == "")
    {
        return messages.required;
    }
    else if (!reg.test(email))
    {
        return messages.invalid;
    }
    return false;
};

function ft_valid_name(name, messages){
    const reg = regex.name;
    if (!name || name == "")
    {
        return messages.required;
    }
    else if (!reg.test(name))
    {
        return messages.invalid;
    }
    return false;
};

function ft_valid_password(password, messages){
    const reg = regex.password;
    if (!password || password == "")
    {
        return messages.required;
    }
    else if (!reg.test(password))
    {
        return messages.invalid;
    }
    return false;
};

function ft_capitalize(str){
	return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

module.exports = {
	regex,
	ft_valid_username,
	ft_valid_email,
	ft_valid_name,
	ft_valid_password,
	ft_capitalize
}