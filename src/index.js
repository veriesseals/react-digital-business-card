import React from "react"
import ReactDOM from "react-dom"
import Header from "./components/Header"
import MainContent from  "./components/MainContent"
import Footer from "./components/Footer"
import ContactForm from "./components/ContactForm"
import AboutMe from "./components/AboutMe"


function App() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
            {/* <ContactForm /> */}
            {/* <AboutMe /> */}
        </div>
    )
}



ReactDOM.render(<App />, document.getElementById("root"))