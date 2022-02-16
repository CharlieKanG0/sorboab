import * as React from 'react';
import { Link } from 'react-router-dom';

export default function NavigationBar() {
    return (
        <nav>
            <ul>
                <Link to="/Home">Home</Link>
                <Link to="/Gallery">Gallery</Link>
            </ul>
        </nav>
    );
}