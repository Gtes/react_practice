import React, { useState } from "react";
import classes from "./App.module.css";
import Persons from "../components/Persons/Persons";

import Cockpit from "../components/Persons/Cockpit/Cockpit";

const App = (props) => {
    const [personsState, setPersonsState] = useState({
        persons: [
            { id: "id_1", name: "Max", age: 30 },
            { id: "id_2", name: "Manu", age: 30 },
            { id: "id_3", name: "Stephanie", age: 90 },
        ],
        showPersons: false,
    });

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

    const deletePersonHandler = (personIndex) => {
        // copy personsState
        const persons = [...personsState.persons];

        //remove person by personIndex
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
            <Persons
                clicked={deletePersonHandler}
                persons={personsState.persons}
                changed={nameChangedHandler}
            ></Persons>
        );
    }

    return (
        <div className={classes.App}>
            <Cockpit
                showPersons={personsState.showPersons}
                persons={personsState.persons}
                clicked={() => togglePersonsHandler()}
            ></Cockpit>
            {persons}
        </div>
    );
};

export default App;
