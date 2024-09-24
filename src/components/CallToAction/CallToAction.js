import React from "react";
import './CallToAction.css'

function CallToAction({text,className,onclick,type='button',onSubmit}){
    return(
        <button className={`primary-button ${className}`} type={type} onSubmit={onSubmit} onClick={onclick}>{text}</button>
    )
}

export {CallToAction}