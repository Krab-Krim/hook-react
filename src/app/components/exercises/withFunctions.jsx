import React, { useState } from "react";
import CardWrapper from "../common/Card";

const WithFunctions = (SimpleComponent) => () => {
    const [isAuth, setIsAuth] = useState(localStorage.getItem("user"));

    const onLogin = () => {
        console.log("onLogin");
        localStorage.setItem("user", "true");
        setIsAuth(localStorage.getItem("user"));
    };

    const onLogOut = () => {
        console.log("onLogOut");
        localStorage.removeItem("user");
        setIsAuth(localStorage.getItem("user"));
    };

    return (
        <CardWrapper>
            <SimpleComponent props={{ isAuth: isAuth, onLogin: onLogin, onLogOut: onLogOut }} />
        </CardWrapper>
    );
};

export default WithFunctions;
