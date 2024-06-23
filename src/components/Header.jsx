import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div id="header">
            <div id="header-section">
                <div id="header-left">
                    <Link to="/"><img id="header-image" src="/logo.png" /></Link>
                    <Link to="/kart">Kart</Link>
                </div>
                <div id="header-right">
                    <Link to="/image">Images</Link>
                    <Link to="/about">About</Link>
                </div>
            </div>
        </div>
    )
}