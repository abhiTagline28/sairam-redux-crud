export const capitalize = string => string[0].toUpperCase() + string.slice(1)

export const camelCaseSpace = string => string.replace(/([a-z])([A-Z])/g, '$1 $2')


export const emailValidation = email => {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email.toLowerCase());
}

export const passwordValidation = password => {
    const regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/
    return regex.test(password)
}

export const userNameValidation = value => {
    const regex = /^([a-zA-Z]+(.)?[\s]*)$/
    return regex.test(value)
}