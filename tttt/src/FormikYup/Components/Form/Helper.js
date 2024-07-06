import * as Yup from 'yup'

const regx = {
    name: /^[a-zA-z]{2,20}$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9]+$/,
    password: /^[a-zA-Z0-9!@#$%^&*]{6,16}$/,
}

const firstName = Yup.string()
.matches(regx.name, 'Your name must be at least 2 and no more than 20 letters')
.required('Write Your Name')

const lastName = Yup.string()
.matches(regx.name, 'Your SurName must be at least 2 and no more than 20 letters')
.required('Write Your SurName')

const email = Yup.string()
.matches(regx.email, 'Your email is wrong')
.required('Write Your Email')

const password = Yup.string()
.matches(regx.password, 'Your password is wrong')
.required('Write Your Password')


export const schemas = {
    custom: Yup.object().shape({
        firstName,
        lastName,
        email,
        password
    })
}

export const initialValues = {
    firstName: "",
    lastName: "",
    email:"",
    password:"",
}