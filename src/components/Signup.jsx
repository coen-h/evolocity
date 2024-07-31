import React from 'react'

export default function Signup() {
    return (
        <div id="signup">
            <div id="signup-content">
                <p>Want to join?</p>
                <a>Sign up now!</a>
                <div id="signup-bar" style={{display: "flex", gap: "12px"}}>
                    <a href="https://evolocity.co.nz" target="_blank">
                        <i style={{fontSize: "36px"}} class="fa-solid fa-earth-americas" />
                    </a>
                    <a href="mailto:admin@evolocity.co.nz" target="_blank">
                        <i style={{fontSize: "36px"}} class="fa-solid fa-inbox" />
                    </a>
                </div>
            </div>
        </div>
    )
}