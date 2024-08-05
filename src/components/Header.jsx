import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    const [isDropdownVisible, setDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setDropdownVisible(!isDropdownVisible);
    };
    
    return (
        <div id="header">
            <div id="header-section">
                <Link id="menu-logo" to="/"><img id="header-image" src="/logo.png" alt="Logo" /></Link>
                <div id="header-left">
                    <Link to="/"><img id="header-image" src="/logo.png" alt="Logo" /></Link>
                    <Link to="/kart">Kart</Link>
                    <Link to="/ashs">ASHS</Link>
                </div>
                <div id="header-right">
                    <Link to="/image">Images</Link>
                    <Link to="/about">About</Link>
                </div>
                <div id="menu-section" style={{flexDirection: "column"}}>
                    <button aria-label="Menu" id="menu-button" onClick={toggleDropdown} >
                        <i id="menu-icon" className={isDropdownVisible ? "fa-solid fa-x" : "fa-solid fa-bars"}></i>
                    </button>
                    {isDropdownVisible && (
                        <div className="dropdown-content">
                            <Link to="/kart">Kart</Link>
                            <Link to="/ashs">ASHS</Link>
                            <div style={{borderBottom: "1px black solid"}} />
                            <Link to="/image">Images</Link>
                            <Link to="/about">About</Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}