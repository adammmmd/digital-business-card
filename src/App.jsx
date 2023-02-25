import React from "react"
import Profile from "./components/Profile"
import EmailButton from "./components/EmailButton"
import LinkedinButton from "./components/LinkedinButton"
import Description from "./components/Description"
import Footer from "./components/Footer"

export default function App() {
  return (
    <div>
      <Profile />
      <div className="button-container">
        <EmailButton />
        <LinkedinButton />
      </div>
      <Description />
      <Footer/>
    </div>
  )
}

