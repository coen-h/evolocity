import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div id="header">
            <div id="header-section">
                <div id="header-left">
                    <Link to="/"><img id="header-image" src="/logo.png" alt="Logo" /></Link>
                    <Link to="/kart">Kart</Link>
                    <Link to="/ashs">ASHS</Link>
                </div>
                <div id="header-right">
                    <Link to="/image">Images</Link>
                    <Link to="/about">About</Link>
                </div>
                {/* MENU BUTTON */}
                <button id="menu-button"><i class="fa-solid fa-bars"></i></button>
            </div>
        </div>
    )
}