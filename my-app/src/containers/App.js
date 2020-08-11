import React, { useState } from "react";
import classes from "./App.module.css";
import Persons from "../components/Persons/Persons";

import Cockpit from "../components/Persons/Cockpit/Cockpit";

class App extends React.Component {
    state = {
        persons: [
            { id: "id_1", name: "Max", age: 30 },
            { id: "id_2", name: "Manu", age: 30 },
            { id: "id_3", name: "Stephanie", age: 90 },
        ],
        showPersons: false,
    };

    nameChangedHandler = (event, id) => {
        // Find person by id
        const personIndex = this.state.persons.findIndex(
            (element) => element.id === id
        );

        // get person by personIndex
        const person = {
            ...this.state.persons[personIndex],
        };

        // change person name based on input value onChange
        person.name = event.target.value;

        // copy personsState
        const persons = [...this.state.persons];

        // chnage person in cpied personsState
        persons[personIndex] = person;

        //set new state with copied persons
        this.setState({
            persons: persons,
        });
    };

    deletePersonHandler = (personIndex) => {
        // copy personsState
        const persons = [...this.state.persons];

        //remove person by personIndex
        persons.splice(personIndex, 1);

        this.setState({
            persons: persons,
        });
    };

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;

        this.setState({
            showPersons: !doesShow,
        });
    };
    render() {
        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <Persons
                    clicked={this.deletePersonHandler}
                    persons={this.state.persons}
                    changed={this.nameChangedHandler}
                ></Persons>
            );
        }
        return (
            <div className={classes.App}>
                <Cockpit
                    showPersons={this.state.persons.showPersons}
                    persons={this.state.persons}
                    clicked={() => this.togglePersonsHandler()}
                ></Cockpit>
                {persons}
            </div>
        );
    }
}

export default App;
