import React, { useState } from "react";

import "./App.css";

import Person from "./Person/Person";

const App = (props) => {
    const [personsState, setPersonsState] = useState({
        persons: [
            { name: "Max", age: 28 },
            { name: "Manu", age: 39 },
            { name: "Stephanie", age: 26 },
        ],
    });

    const [otherState, setOtherState] = useState("sdfljhslhglashglkhg");

    console.log(personsState, otherState);

    const switchNameHandler = (newName) => {
        setPersonsState({
            persons: [
                { name: newName, age: 30 },
                { name: "tem", age: 40 },
                { name: "get", age: 90 },
            ],
        });
    };

    const nameChangedHandler = (event) => {
        console.log(event);

        setPersonsState({
            persons: [
                { name: "Max", age: 30 },
                { name: event.target.value, age: 40 },
                { name: "Stephanie", age: 90 },
            ],
        });
    };

    const style = {
        backgroundColor: "white",
        font: "inherit",
        border: "1px solid blue",
        padding: "8px",
        cursor: 'pointer'
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>Hellow World!</h1>
                <button
                    style={style}
                    onClick={() => switchNameHandler("Boris")}
                >
                    Switch Name
                </button>
                <Person
                    name={personsState.persons[0].name}
                    age={personsState.persons[0].age}
                >
                    My Hobbies: Racing
                </Person>
                <Person
                    name={personsState.persons[1].name}
                    age={personsState.persons[1].age}
                    click={switchNameHandler.bind(this, "Tesion222")}
                    changed={nameChangedHandler}
                ></Person>
                <Person
                    name={personsState.persons[2].name}
                    age={personsState.persons[2].age}
                ></Person>
            </header>
        </div>
    );

    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi how are you?'))
};

export default App;
