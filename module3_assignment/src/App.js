import React, { useState } from "react";

import UserOutput from "./UserOutput/UserOutput";
import UserInput from "./UserInput/UserInput";

import "./UserOutput/UserOutput.css";

import "./App.css";

const App = (props) => {
    const [userData, setUserData] = useState({
        users: [{ name: "Max" }, { name: "Boris" }],
    });

    const changeUserName = (event) => {
        setUserData({
            users: [{ name: event.target.value }],
        });
    };

    return (
        <div className="App">
            <UserInput
                userName={userData.users[0].name}
                changed={changeUserName}
            ></UserInput>
            <div className="usersCards">
                <UserOutput userName={userData.users[0].name}></UserOutput>
                <UserOutput userName={userData.users[0].name}></UserOutput>
            </div>
        </div>
    );
};

export default App;
