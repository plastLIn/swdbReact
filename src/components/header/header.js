import React from "react";

import './header.css';

function Header () {

    return (
        <header>
            <h3>
                <a href="#">SW DB</a>
            </h3>
            <ul className="d-flex">
                <li className="nav-button">
                    <a href="#">People</a>
                </li>
                <li className="nav-button">
                    <a href="#">Planets</a>
                </li>
                <li className="nav-button">
                    <a href="#">Starships</a>
                </li>
            </ul>
        </header>
    );
}

export default Header;