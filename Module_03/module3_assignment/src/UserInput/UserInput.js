import React from "react";

const userInput = (props) => {
    const style = {
        border: '2px solid red',

    }
    return (
        <input
            className="UserInput"
            style = {style}
            type="text"
            defaultValue={props.userName}
            onChange={props.changed}
        />
    );
};

export default userInput;
