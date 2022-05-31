import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../components/login";
import Profile from "../components/profile";

const Navigation = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Login/>} />
            <Route path="/profile/" element={<Profile/>} />
        </Routes>
    )
}

export default Navigation 