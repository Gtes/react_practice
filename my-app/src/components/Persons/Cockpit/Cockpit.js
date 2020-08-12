import React, { useEffect } from "react";
import classes from "./Cockpit.module.css";

const Cockpit = (props) => {
    useEffect(() => {
        console.log("[Cockpit.js] useEffect");

        setTimeout(() => {
            alert("saved data to cloud");
        }, 1000);

        return()=>{
            console.log('[Cockpit.js] cleanup in useEffect')
        }
    }, []);

    useEffect(()=>{
        console.log('[Cockpit.js] 2nd useEffect')

        return ()=>{
            console.log('[Cockpit.js] cleanup in 2nd useEffect')
        }
    })
  
    const addedClasses = [];
    let btnClass = "";

    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if (props.persons.length <= 2) {
        addedClasses.push(classes.red);
    }

    if (props.persons.length <= 1) {
        addedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>List of Users</h1>
            <p className={addedClasses.join(" ")}>This is realy works</p>
            <button className={btnClass} onClick={props.clicked}>
                Toggle Users
            </button>
        </div>
    );
};

export default Cockpit;
