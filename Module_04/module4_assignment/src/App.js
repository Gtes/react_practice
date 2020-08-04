import React, { useState } from "react";

import ValidationComponent from "./ValidationComponent/ValidationComponent";

import "./App.css";

const App = (props) => {
    const [inputLengthState, setInputLength] = useState(0);

    const inputChanged = (event) => {
        const inputLength = event.target.value.length;

        setInputLength(inputLength);
    };

    return (
        <div className="App">
            <input type="text" onChange={inputChanged} placeholder="input text please"/>

            <p>{inputLengthState}</p>

            <p>
                <ValidationComponent length={inputLengthState} />
            </p>
        </div>
    );
};

export default App;
