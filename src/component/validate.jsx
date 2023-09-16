export const validate = (data, type) => {
    const errors = {};

    if (!data.email) {
        errors.email = "email is required"
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(data.email)) {
        errors.email = "email is invalid";
    } else {
        delete errors.email;
    }

    if (!data.password) {
        errors.password = "password is required";
    } else if (data.password.length < 6) {
        errors.password = "password need to be 6 characters or more";
    } else {
        delete errors.password;
    }

    if (type === "signup") {
        if (!data.name.trim()) {
            errors.name = "name is required";
        } else {
            delete errors.name
        }

        if (!data.confirmPassword) {
            errors.confirmPassword = "confirm password is required";
        } else if (data.confirmPassword !== data.password) {
            errors.confirmPassword = "confirm password is not match";
        } else {
            delete errors.confirmPassword;
        }

        if (!data.isAccepted) {
            errors.isAccepted = "confirm the rules"
        } else {
            delete errors.isAccepted;
        }
    }


    return errors
}