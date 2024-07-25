import React from 'react'

export default function Footer() {
    return (
        <div id="footer">
            <div id="footer-left">
                <p>My</p>
                <img src="/logo.png" style={{height: "35px"}} />
                <p>Project</p>
            </div>
            <div id="footer-right">
                <a href="https://github.com/coen-h" >
                    <img src="/github-mark.png" id="github"/>
                </a>
            </div>
        </div>
    )
}