import react from "react"


function Header() {
    return(
        <header>
        <div>
            <nav className="nav">
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
            <img src="https://codeandhack.com/wp-content/uploads/2018/10/Most-in-demand-programming-languages.jpeg" className="logo"/>
            
        </div>
        </header>
    )
}


export default Header;