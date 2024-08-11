import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
    useEffect(() => {
        document.title = 'Page not found - Evolocity';
    }, []);
    
    return (
        <div id="notfound">
            <h1 style={{margin: "0"}}>404 - Page Not Found</h1>
            <p>The page you are looking for does not exist.</p>
            <Link  to="/" id="notfound-link">Home</Link>
        </div>
    );
};