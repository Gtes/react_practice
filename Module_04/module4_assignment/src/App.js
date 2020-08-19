import React, { useState } from "react";

import ValidationComponent from "./ValidationComponent/ValidationComponent";
import CharComponent from "./CharComponent/CharComponent";

import "./App.css";

const App = (props) => {
    const [stringState, setString] = useState("");
    const [charsState, setChars] = useState([]);

    const generateUniqueArray = (event) => {
        setChars([...new Set(event.target.value.split(""))]);
    };

    const deleteCharacter = (char) => {
        const tempStringState = [...stringState].filter((strChar) => {
            return strChar !== char;
        });
        setString(tempStringState.join(""));

        const tempCharsState = [...charsState].filter((strChar) => {
            return strChar !== char;
        });
        setChars(tempCharsState);
    };

    const inputChanged = (event) => {
        setString(event.target.value);
        generateUniqueArray(event);
    };

    const charList = charsState.map((char, index) => {
        return (
            <CharComponent
                click={() => {
                    deleteCharacter(char);
                }}
                name={char}
                key={char}
            />
        );
    });

    return (
        <div className="App">
            <input
                type="text"
                onChange={inputChanged}
                placeholder="input text please"
                value={stringState}
            />

            <p>{stringState}</p>

            <p>
                <ValidationComponent length={stringState.length} />
            </p>

            {charList}
        </div>
    );
};

export default App;
