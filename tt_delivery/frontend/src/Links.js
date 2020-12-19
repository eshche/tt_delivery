import React from 'react';
import { Link } from "react-router-dom";

export default function Links() {
    return (
        <ul>
            <li>
                <Link to="/first-name">First name</Link>
            </li>
            <li>
                <Link to="/last-name">Last name</Link>
            </li>
            <li>
                <Link to="/full-name">Full name</Link>
            </li>
        </ul>
    );
}