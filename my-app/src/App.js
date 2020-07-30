import React, { useState } from "react";

import "./App.css";

import Person from "./Person/Person";

const App = (props) => {
    const [personsState, setPersonsState] = useState({
        persons: [
            { name: "Max", age: 30 },
            { name: "Manu", age: 30 },
            { name: "Stephanie", age: 90 },
        ],
        showPersons: false,
    });

    const [otherState, setOtherState] = useState("sdfljhslhglashglkhg");

    // console.log(personsState);
    // console.log("updated");

    const switchNameHandler = (newName) => {
        setPersonsState({
            ...personsState,
            persons: [
                { name: "Max", age: 30 },
                { name: newName, age: 30 },
                { name: "Stephanie", age: 90 },
            ],
        });
    };

    const nameChangedHandler = (event) => {
        // console.log(event);

        setPersonsState({
            ...personsState,
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
        cursor: "pointer",
    };

    const togglePersonsHandler = () => {
        const doesShow = personsState.showPersons;

        setPersonsState({
            ...personsState,
            showPersons: !doesShow,
        });

        // console.log(personsState);
    };

    let persons = null;

    if (personsState.showPersons) {
        persons = (
            <div>
                {personsState.persons.map((person) => {
                    return <Person name={person.name} age={person.age} />;
                })}
            </div>
        );
        console.log(persons)
    }

    return (
        <div className="App">
            <header className="App-header">
                <h1>Hellow World!</h1>
                <button style={style} onClick={togglePersonsHandler}>
                    Switch Name
                </button>
                {persons}
            </header>
        </div>
    );

    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi how are you?'))
};

export default App;
