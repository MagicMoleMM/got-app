import React from "react";
import img from '../errorMessage/Tips-to-fix-error-404.png'
import  "../errorMessage/errorMessage.css";


const ErrorMessage = () => {
    return (
        <>
            <img src={img} alt='error'></img>
            <span>Samething goes wrong</span>
        </>
    )

}

export default ErrorMessage;
