import React, { useState } from "react";

import ValidationComponent from "./ValidationComponent/ValidationComponent";
import CharComponent from "./CharComponent/CharComponent";

import "./App.css";

const App = (props) => {
    const [inputLengthState, setInputLength] = useState(0);
    const [charsState, setChars] = useState([]);
    const [stringState, setString] = useState("");

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
        const inputLength = event.target.value.length;

        setInputLength(inputLength);
        setString(event.target.value);
        generateUniqueArray(event);
    };

    return (
        <div className="App">
            <input
                type="text"
                onChange={inputChanged}
                placeholder="input text please"
                value={stringState}
            />

            <p>{inputLengthState}</p>

            <p>
                <ValidationComponent length={inputLengthState} />
            </p>

            <div>
                {charsState.map((char, index) => {
                    return (
                        <CharComponent
                            click={() => {
                                deleteCharacter(char);
                            }}
                            name={char}
                            key={char}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default App;
