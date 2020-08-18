import React, { Component } from "react";
import PropTypes from "prop-types";
import Aux from "../../../hoc/Aux";

import AuthContext from "../../../context/auth-context";

import withClass from "../../../hoc/withClass";

import classes from "./Person.module.css";

class Person extends Component {
    constructor(props) {
        super();
        this.inputElementRef = React.createRef();
    }
    componentDidMount() {
        this.inputElementRef.current.focus();
    }

    render() {
        console.log("[Person.js] rendering...");
        return (
            // <div className={classes.Person}>

            <Aux>
                <AuthContext.Consumer>
                    {(context) =>
                        context.authenticated ? (
                            <p>Authenticated</p>
                        ) : (
                            <p>Please Log In</p>
                        )
                    }
                </AuthContext.Consumer>

                <p onClick={this.props.click}>
                    I'm {this.props.name} and I am {this.props.age} years old!
                </p>
                {/* <p>{props.children}</p> */}
                <input
                    type="text"
                    // ref={(inputEl) => {
                    //     this.inputElement = inputEl;
                    // }}
                    ref={this.inputElementRef}
                    onChange={this.props.changed}
                    defaultValue={this.props.name}
                />
            </Aux>
        );
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func,
};
export default withClass(Person, classes.Person);
