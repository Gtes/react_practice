import React from "react";

import CharComponent from "./CharComponent.css";

const charComponent = (props) => {
    return(
        <div className="charComponent" onClick={props.click}>
            {props.name}
        </div>
    )
};

export default charComponent