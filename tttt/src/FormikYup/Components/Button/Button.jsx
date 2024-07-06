import SB from './Button.module.css'

import { ToastContainer, toast, Zoom , Slide , Flip} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import React from 'react'

function Button({ children }) {

    const Notify = () => {
        toast('Default', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Flip
        })
    }
    return (
        <>
            <button
                type='submit'
                className={SB.btn}
                onClick={Notify}
            >{children}</button>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Flip}
            />
        </>
    )
}

export default Button;
