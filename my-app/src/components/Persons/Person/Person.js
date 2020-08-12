import React, { Component } from "react";
import Aux from "../../../hoc/Aux";

import classes from "./Person.module.css";

class Person extends Component {
    render() {
        console.log("[Person.js] rendering...");
        return (
            // <div className={classes.Person}>

            <Aux>
                <p onClick={this.props.click}>
                    I'm {this.props.name} and I am {this.props.age} years old!
                </p>
                {/* <p>{props.children}</p> */}
                <input
                    type="text"
                    onChange={this.props.changed}
                    defaultValue={this.props.name}
                />
            </Aux>
        );
    }
}

export default Person;
