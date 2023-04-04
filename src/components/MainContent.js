import React from "react"

function MainContent() {
    return (
        <div className= "container main-headers">
            <div className="row">
                <h1 className="main-title"><span id="let">Let</span> <span id="equal">=</span><span id="vision"> "Me code your next vision!"</span></h1>
            </div>
            <div className="row">
                <h2 className="sec-title">Languages I can use to bring your vision to life!</h2>
            </div>
            <div className="row">
                <div className="langauges">
                    <p id="HTML">HTML</p>
                    <p id="CSS">CSS</p>
                    <p id="JS">JavaScript</p>
                    <p id="MYSQL">MySQL</p>
                    <p id="NODE">Node</p>
                    <p id="REACT">React</p>
                </div>
            </div>
        </div>
    )
}

export default MainContent;
