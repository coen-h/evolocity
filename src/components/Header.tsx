import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const [darkMode, setDarkMode] = useState(() => {
        const savedMode = localStorage.getItem('darkMode');
        return savedMode ? JSON.parse(savedMode) : true;
    });
    const [isTop, setIsTop] = useState(false);

    const toggleDropdown = () => {
        setDropdownVisible(!isDropdownVisible);
    };

    const toggleDark = () => {
        const newDarkMode = !darkMode;
        setDarkMode(newDarkMode);
        localStorage.setItem('darkMode', JSON.stringify(newDarkMode));
    }

    useEffect(() => {
        const handleScroll = () => {
          const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
          setIsTop(currentScrollTop ? true : false)
        };
        
        document.body.className = darkMode ? 'dark-mode' : '';
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, [darkMode]);
    
    return (
        <div id="header" className={`${isTop ? darkMode ? 'dark-filter' : 'light-filter' : 'no-filter'}`}>
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
                    <button aria-label="Dark Mode Toggle" id="dark-button" style={{width: "70px", height: "30px"}} onClick={toggleDark}>
                        <i style={{fontSize: "16px"}} className={darkMode ? "fa-solid fa-moon" : "fa-solid fa-sun"}></i>
                    </button>
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
                            <button aria-label="Dark Mode Toggle" id="dark-button" style={{width: "100%", height: "32.8px"}} onClick={toggleDark}>
                                <i style={{fontSize: "16px"}} className={darkMode ? "fa-solid fa-moon" : "fa-solid fa-sun"}></i>
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}