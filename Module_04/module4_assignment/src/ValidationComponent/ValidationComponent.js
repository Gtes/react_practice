import React from "react";

const validationComponent = (props) =>{
    let validationMessage = "Text long enough"


    if (props.length < 5){
        validationMessage =  "Text too short"  
    } else if(props.length > 20){
        validationMessage =  "Text too long"
    }

    return validationMessage
}

export default validationComponent;