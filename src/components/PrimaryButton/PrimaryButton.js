import React from "react";
import './PrimaryButton.css'

function PrimaryButton({text,className,onclick,type='button'}){
    return(
        <button className={`primary-button ${className}`} type={type} onClick={onclick}>{text}</button>
    )
}

export {PrimaryButton}