import React from "react";
import './CallToAction.css'

function CallToAction({text,className,onclick,type='button'}){
    return(
        <button className={`primary-button ${className}`} type={type} onClick={onclick}>{text}</button>
    )
}

export {CallToAction}