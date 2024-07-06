import SB from './Button.module.css'

export const Button = ({children}) => {
    return <button 
    type='submit'
    className={SB.btn}>{children}</button>
}