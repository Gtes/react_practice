import React, { useState } from "react";

import "./App.css";

import Person from "./Person/Person";

const App = (props) => {
    const [personsState, setPersonsState] = useState({
        persons: [
            { id: "id_1", name: "Max", age: 30 },
            { id: "id_2", name: "Manu", age: 30 },
            { id: "id_3", name: "Stephanie", age: 90 },
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

    const nameChangedHandler = (event, id) => {
        // Find person by id
        const personIndex = personsState.persons.findIndex(
            (element) => element.id === id
        );

        // get person by personIndex
        const person = {
            ...personsState.persons[personIndex],
        };

        // change person name based on input value onChange
        person.name = event.target.value;

        // copy personsState
        const persons = [...personsState.persons];

        // chnage person in cpied personsState
        persons[personIndex] = person;

        //set new state with copied persons
        setPersonsState({
            ...personsState,
            persons: persons,
        });
    };

    // Button styles
    const style = {
        backgroundColor: "white",
        font: "inherit",
        border: "1px solid blue",
        padding: "8px",
        cursor: "pointer",
    };

    const deletePersonHandler = (personIndex) => {
        // copy personsState
        const persons = [...personsState.persons];

        persons.splice(personIndex, 1);

        setPersonsState({
            ...personsState,
            persons: persons,
        });
    };

    const togglePersonsHandler = () => {
        const doesShow = personsState.showPersons;

        setPersonsState({
            ...personsState,
            showPersons: !doesShow,
        });
    };

    let persons = null;

    if (personsState.showPersons) {
        persons = (
            <div>
                {personsState.persons.map((person, index) => {
                    return (
                        <Person
                            click={() => deletePersonHandler(index)}
                            name={person.name}
                            age={person.age}
                            key={person.id}
                            changed={(event) =>
                                nameChangedHandler(event, person.id)
                            }
                        />
                    );
                })}
            </div>
        );
    }

    return (
        <div className="App">
            <header className="App-header">
                <h1>List of Users</h1>
                <button style={style} onClick={togglePersonsHandler}>
                    Toggle Users
                </button>
                {persons}
            </header>
        </div>
    );

    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi how are you?'))
};

export default App;
