const regex_OnlyAlfanumeric = /^[a-zA-Z0-9 ]+$/i
const regex_OnlyText = /^[a-zA-ZÀ-ÿñÑ]+( [a-zA-ZÀ-ÿñÑ]+)*$/i
const regex_OnlyNumber = /^[0-9]+$/i
const regex_Password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,20}$/i
const regex_Email = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i
const regex_UUIDV4 = /^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i
const regex_PhoneNumber = /^\+(?:[0-9]●?){6,14}[0-9]$/i
const regex_DNI = /^\d{8}[a-zA-Z]?$/i
const regex_ZipCode = /^[A-Z]?[0-9]{4}[A-Z]{0,3}$/i

export const regexOnlyAlfanumeric = (prop) => {
    return regex_OnlyAlfanumeric.test(prop)
}

export const regexOnlyText = (prop) => {
    return regex_OnlyText.test(prop)
}

export const regexOnlyNumber = (prop) => {
    return regex_OnlyNumber.test(prop)
}

export const regexPassword = (prop) => {
    return regex_Password.test(prop)
}

export const regexEmail = (prop) => {
    return regex_Email.test(prop)
}

export const regexUUIDV4 = (prop) => {
    return regex_UUIDV4.test(prop)
}

export const regexPhoneNumber = (prop) => {
    return regex_PhoneNumber.test(prop)
}

export const regexDNI = (prop) => {
    return regex_DNI.test(prop)
}

export const regexZipCode = (prop) => {
    return regex_ZipCode.test(prop)
}