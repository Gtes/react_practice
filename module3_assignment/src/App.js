import React, { useState } from "react";

import UserOutput from "./UserOutput/UserOutput";
import UserInput from "./UserInput/UserInput";

import "./UserOutput/UserOutput.css"
import "./UserInput/UserInput.css"

import "./App.css";

const App = (props) => {
    const [userData, setUserData] = useState({
        users: [{ name: "Max" }, { name: "Boris" }],
    });

    const changeUserName = (event) => {
        setUserData({
            users: [{ name: event.target.value }, { name: "Boris" }],
        });
    };

    return (
        <div className="usersCards">
            <UserOutput userName={userData.users[0].name}>
                <UserInput
                    userName={userData.users[0].name}
                    changed={changeUserName}
                ></UserInput>
            </UserOutput>
            <UserOutput userName={userData.users[1].name}>
                <UserInput userName={userData.users[1].name}></UserInput>
            </UserOutput>
        </div>
    );
};

export default App;
