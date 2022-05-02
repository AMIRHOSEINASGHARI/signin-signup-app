const validation = (data) => {
    const errors = {};

    if(!data.name.trim()) {
        errors.name = '*Enter ur username*'
    }else {
        delete errors.name
    }

    if(!data.email) {
        errors.email = '*Please enter ur email*'
    }else if (!/\S+@\S+\.\S+/.test(data.email)) {
        errors.email = '*unvalid email address*'
    }else {
        delete errors.email
    }

    if(!data.password) {
        errors.password = '*Please enter ur password*'
    }else if(data.password.length <8) {
        errors.password = '*Password must be 8 characters or more*'
    }else {
        delete errors.password
    }

    if(!data.confirmPassword) {
        errors.confirmPassword = '*Please confirm ur password*'
    }else if(data.confirmPassword !== data.password) {
        errors.confirmPassword = '*Password do not match*'
    }

    return errors;
}

export {validation};