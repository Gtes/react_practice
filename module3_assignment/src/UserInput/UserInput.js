import React from "react";

const userInput = (props) => {
    return (
        <input
            className="UserInput"
            type="text"
            defaultValue={props.userName}
            onChange={props.changed}
        />
    );
};

export default userInput;
