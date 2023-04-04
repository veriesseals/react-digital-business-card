import React from "react"
import Me from '../components/img/me.JPG';
import Programming from '../components/img/Most-in-demand-programming-languages.jpg';
import CodingLogo from '../components/img/coding-logo-design-template-vector.png';


function Header() {
    return(
        <header>
            <div className="container nav-bar">
                <div className="row">
                    <div className="col-md-10 d-flex">
                    {/* Nav-Items */}
                        <nav className="nav">
                            <div className="nav-items">
                                <a href="https://github.com/veriesseals">My Portfolio</a>
                                <a href="#">About Me</a>
                                <a href="./ContactForm">Contact Me</a>
                            </div>
                        </nav>
                        <img src={Me} alt="My Picture" height="200" className="me"/>
                        
                    </div>
                    {/* image */}
                    <div className="col-md-2">
                        <img src={CodingLogo} alt="Coding Logo" className="coding"/>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <img src={Programming} alt="Programming Splash Picture" className="splash"/>
                </div>
            </div>
        </header>
    )
}


export default Header;