import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { isLoggedIn } from "../auth";

const Privateroute = () => {

    return isLoggedIn() ? <Outlet /> : <Navigate to={"/login"} />

    // OR

    // This is static but we need to use our isLoggegIn method instead of this
    // let loggenIn = isLoggedIn()

    // if (loggenIn) {
    //     return <Outlet />
    // } else {
    //     return <Navigate to={"/login"} />
    // }
}

export default Privateroute