export default function Signup() {
    return (
        <div id="signup">
            <div id="signup-content">
                <p>Want to join?</p>
                <p>Sign up now!</p>
                <div id="signup-bar" style={{display: "flex", gap: "12px"}}>
                    <a href="https://evolocity.co.nz" target="_blank" aria-label="Website">
                        <i style={{fontSize: "2.25rem"}} className="fa-solid fa-earth-americas" />
                    </a>
                    <a href="mailto:admin@evolocity.co.nz" target="_blank" aria-label="Email">
                        <i style={{fontSize: "2.25rem"}} className="fa-solid fa-inbox" />
                    </a>
                </div>
            </div>
        </div>
    )
}