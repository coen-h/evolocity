export default function Footer() {
    return (
        <div id="footer">
            <div id="footer-left">
                <p>My</p>
                <img src="/logo.png" style={{height: "35px"}} alt="Logo" />
                <p>Project</p>
            </div>
            <div id="footer-right">
                <a href="https://status.coen.ovh" target="_blank" aria-label="Server" >
                    <i className="fa-solid fa-server" id="footer-icon" />
                </a>
                <a href="https://github.com/coen-h" target="_blank" aria-label="Github" >
                    <i className="fa-brands fa-github" id="footer-icon"/>
                </a>
            </div>
        </div>
    )
}