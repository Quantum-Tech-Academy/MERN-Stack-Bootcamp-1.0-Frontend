import { useCallback, useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";

function Dashboard() {
    const { isLoggedIn, appName, message: storeMessage } = useSelector((state) => state);

    return <>
        <Navbar />
        <h1>{isLoggedIn ? "Welcome to the Dashboard!" : "Unauthenticated User!!!!"}</h1>
        <h1>{storeMessage}</h1>
    </>
}

export default Dashboard;