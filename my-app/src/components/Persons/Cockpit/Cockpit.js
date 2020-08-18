import React, { useEffect, useRef } from "react";
import AuthContext from "../../../context/auth-context";

import classes from "./Cockpit.module.css";

const Cockpit = (props) => {
    const toggleBtnRef = useRef(null);

    useEffect(() => {
        console.log("[Cockpit.js] useEffect");

        toggleBtnRef.current.click();

        return () => {
            console.log("[Cockpit.js] cleanup in useEffect");
        };
    }, []);

    useEffect(() => {
        console.log("[Cockpit.js] 2nd useEffect");

        return () => {
            console.log("[Cockpit.js] cleanup in 2nd useEffect");
        };
    });

    const addedClasses = [];
    let btnClass = "";

    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if (props.personsLength <= 2) {
        addedClasses.push(classes.red);
    }

    if (props.personsLength <= 1) {
        addedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>List of Users</h1>
            <p className={addedClasses.join(" ")}>This is realy works</p>
            <button
                ref={toggleBtnRef}
                className={btnClass}
                onClick={props.clicked}
            >
                Toggle Users
            </button>
            <AuthContext.Consumer>
                {(context) => <button onClick={context.login}>Log In</button>}
            </AuthContext.Consumer>
        </div>
    );
};

export default React.memo(Cockpit);
