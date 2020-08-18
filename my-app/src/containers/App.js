import React, { Component } from "react";
import classes from "./App.module.css";
import Persons from "../components/Persons/Persons";
import withClass from "../hoc/withClass";
import Aux from "../hoc/Aux";

import Cockpit from "../components/Persons/Cockpit/Cockpit";

class App extends Component {
    constructor(props) {
        super(props);
        console.log("[App.sj] constructor");
    }

    state = {
        persons: [
            { id: "id_1", name: "Max", age: 30 },
            { id: "id_2", name: "Manu", age: 30 },
            { id: "id_3", name: "Stephanie", age: 90 },
        ],
        showPersons: false,
        showCockpit: true,
        authenticated: false,

    };

    static getDerivedStateFromProps(props, state) {
        console.log("[App.js] getDerivedStateFromProps", props);
        return state;
    }

    componentDidMount() {
        console.log("[App.sj] componentDidMount");
    }

    shouldComponentUpdate() {
        console.log("[App.js] shouldComponentUpdate");
        return true;
    }

    componentDidUpdate() {
        console.log("[App.js] componentDidUpdate");
    }

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

    loginHandler = () =>{
        this.setState({
            authenticated: true
        })

    }
    render() {
        console.log("[App.js] render");
        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <Persons
                    clicked={this.deletePersonHandler}
                    persons={this.state.persons}
                    changed={this.nameChangedHandler}
                    isAuthenticated={this.state.authenticated}
                ></Persons>
            );
        }
        return (
            <Aux classes={classes.App}>
                <button
                    onClick={() => {
                        this.setState({ showCockpit: !this.state.showCockpit });
                    }}
                >
                    Remove Cockpit{" "}
                </button>
                {this.state.showCockpit ? (
                    <Cockpit
                        title={this.props.appTitle}
                        showPersons={this.state.persons.showPersons}
                        personsLength={this.state.persons.length}
                        clicked={this.togglePersonsHandler}
                        login={this.loginHandler}
                    ></Cockpit>
                ) : null}
                {persons}
            </Aux>
        );
    }
}

export default withClass(App, classes.App);
