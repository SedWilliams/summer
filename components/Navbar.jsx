
'use client';

import '../styles/Navbar.css';

export default function Navbar() {

    function handleSignUpClick() {
        console.log("Sign Up Clicked");
    }

    return (
        <nav className="Navbar">
            <h1 id="Home">Summer</h1>
            <ul id="Navbar-items">
                <li>Newsletter</li>
                <li>Location</li>
                <li><button id='Navbar-signup' onClick={handleSignUpClick}>Sign Up</button></li>
            </ul>
        </nav>
    );
}
