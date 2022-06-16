import React from 'react';
import "./Header.css";
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div>
            <h1>Todo Project!</h1>
            <nav  style={{
                borderBottom: "solid 1px",
                paddingBottom: "1rem",
            }}>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/cp">Completed Project</NavLink>
                <NavLink to="/ap">Abandoned Project</NavLink>
            </nav>
        </div>
    );
};

export default Header;