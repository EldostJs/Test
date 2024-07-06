import { Field , ErrorMessage as Error } from "formik";
import SI from './Input.module.css'

export const Input = ({id , label , name , placeholder }) => {
    return (
        <div className={SI.cont}>
            <label htmlFor={id}>{label}</label>
            <Field name={name} id={id} placeholder={placeholder}/>
            <Error name={name}>{(error) => <span>{error}</span>}</Error>
        </div>
    )
}