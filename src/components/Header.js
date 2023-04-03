import react from "react"


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
                                <a href="#">Contact Me</a>
                            </div>
                        </nav>
                        <img src="https://avatars.githubusercontent.com/u/24753536?s=400&u=60403b9db86dbfc552b7656eca56ac102006aedc&v=4" className="me" />
                    </div>
                    {/* image */}
                    <div className="col-md-2">
                        <img src="https://static.vecteezy.com/system/resources/thumbnails/004/909/777/small/coding-logo-design-template-vector.jpg" className="coding"></img>
                    </div>
                </div>
            </div>
            <div className="container">
            <div className="row">
                <img src="https://codeandhack.com/wp-content/uploads/2018/10/Most-in-demand-programming-languages.jpeg" className="splash"/>
            </div>

            </div>
        </header>
    )
}


export default Header;