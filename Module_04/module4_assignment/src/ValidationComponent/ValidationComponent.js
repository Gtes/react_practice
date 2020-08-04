import React from "react";

const validationComponent = (props) =>{
    if (props.length < 5){
        return "Text is too short"  
    } else if(props.length > 20){
        return "text is too long"
    }

    return null
}

export default validationComponent;