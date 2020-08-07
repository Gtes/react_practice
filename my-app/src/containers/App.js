import React, { useState } from "react";
import classes from "./App.module.css";

import Person from "../components/Persons/Person/Person";

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
    let arePersons = null;
    let btnClass = "";

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

        btnClass = classes.Red;
    }

    const addedClasses = [];

    if (personsState.persons.length <= 2) {
        addedClasses.push(classes.red);
    }

    if (personsState.persons.length <= 1) {
        addedClasses.push(classes.bold);
    }

    return (
        <div className={classes.App}>
            <header>
                <h1>List of Users</h1>
                <p className={addedClasses.join(" ")}>This is realy works</p>
                <button className={btnClass} onClick={togglePersonsHandler}>
                    Toggle Users
                </button>
                {persons}
            </header>
        </div>
    );

    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi how are you?'))
};

export default App;
